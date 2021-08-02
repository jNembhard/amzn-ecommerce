import React from "react";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../features/StateProvider";

function Checkout(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <Container>
      <LeftCheckout>
        <BannerImage
          src={
            process.env.PUBLIC_URL +
            "/images/checkout_images/checkout_banner.png"
          }
          alt="Checkout Image"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <H2Title>Your Shopping Basket</H2Title>
          <BasketCard>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </BasketCard>
        </div>
      </LeftCheckout>
      <RightCheckout>
        <Subtotal />
      </RightCheckout>
    </Container>
  );
}

export default Checkout;

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftCheckout = styled.div`
  margin-left: 10px;
  margin-right: 10px;
`;

const BannerImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const H2Title = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const BasketCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 30px;
`;

const RightCheckout = styled.div``;
