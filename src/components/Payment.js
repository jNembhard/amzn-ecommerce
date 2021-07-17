import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../features/StateProvider";
import { getBasketTotal } from "../features/reducer";
import CheckoutProduct from "./CheckoutProduct";
import axios from "../axios";
import { db } from "../firebase";
import NumberFormat from "react-number-format";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
  const history = useHistory();
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const floatToMinor = (x) => {
      return Number.parseInt(Number.parseFloat(x * 100).toFixed(2));
    };
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects total in currencies subunits
        url: `/payments/create?total=${floatToMinor(getBasketTotal(basket))}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // refresh and block after clicking buy now once
    event.preventDefault();
    try {
      setProcessing(true);

      // eslint-disable-next-line no-unused-vars
      const payload = await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
          },
        })
        .then(({ paymentIntent }) => {
          db.collection("users")
            .doc(user?.uid)
            .collection("orders")
            .doc(paymentIntent.id)
            .set({
              basket: basket,
              amount: paymentIntent.amount,
              created: paymentIntent.created,
            });

          setSucceeded(true);
          setError(null);
          setProcessing(false);

          history.replace("/orders");
          dispatch({
            type: "EMPTY_BASKET",
          });
        });
    } catch (error) {
      console.log("Payment failed");
    }
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <PaymentWrap>
      <Container>
        <h1>
          Checkout: (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>

        <PaySection>
          <PayTitle>
            <h3>Delivery Address</h3>
          </PayTitle>

          <PayAddress>
            <p>{user?.email}</p>
            <p>123 Strawberry Lane</p>
            <p>Somwhere, USA 55555</p>
          </PayAddress>
        </PaySection>

        <PaySection>
          <PayTitle>
            <h3>Review items and delivery</h3>
          </PayTitle>
          <PayItems>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </PayItems>
        </PaySection>

        <PaySection>
          <PayTitle>
            <h3>Payment Method</h3>
          </PayTitle>
          <PayDetails>
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <PriceContainer>
                <NumberFormat
                  renderText={(value) => <h4>Order Total: {value}</h4>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </PriceContainer>
            </form>
          </PayDetails>
        </PaySection>
      </Container>
    </PaymentWrap>
  );
}

export default Payment;

const PaymentWrap = styled.div`
  background-color: white;
`;
const Container = styled.div`
  > h1 {
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }

  > h1 a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    > h1 {
      font-size: 32px;
    }
  }
`;

const PaySection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
const PayTitle = styled.div`
  flex: 0.2;

  @media (max-width: 768px) {
    padding-right: 15px;
  }
`;

const PayAddress = styled.div`
  flex: 0.8;
`;
const PayItems = styled.div`
  flex: 0.8;
`;
const PayDetails = styled.div`
  flex: 0.8;

  > form {
    max-width: 400px;
  }

  > h4 {
    padding-bottom: 20px;
  }

  > form > div > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid;
    font-weight: bolder;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    cursor: pointer;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.12);

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.12);
    }
  }
`;

const PriceContainer = styled.div``;
