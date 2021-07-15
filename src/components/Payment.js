import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../features/StateProvider";
import { getBasketTotal } from "../features/reducer";
import CheckoutProduct from "./CheckoutProduct";
import axios from "../axios";

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import NumberFormat from "react-number-format";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // stripe secret to charge customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects total in currencies subunits
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    // refresh and block after clicking buy now once
    event.preventDefault();
    setProcessing(true);

    // const payload = await stripe
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
        {/* Payment Section - delivery address */}
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

        {/* Payment Section - review items*/}
        <PaySection>
          <PayTitle>
            <h3>Review items and delivery</h3>
          </PayTitle>
          <PayItems>
            {basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </PayItems>
        </PaySection>

        {/* Payment Section - payment method*/}
        <PaySection>
          <PayTitle>
            <h3>Payment Method</h3>
          </PayTitle>
          <PayDetails>
            {/* Stripe Details */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <PriceContainer>
                <NumberFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType="text"
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
`;

const PaySection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;
const PayTitle = styled.div`
  flex: 0.2;
`;
const PayAddress = styled.div`
  flex: 0.8;
`;
const PayItems = styled.div`
  flex: 0.8;
`;
const PayDetails = styled.div`
  flex: 0.8;
`;

const PriceContainer = styled.div``;
