import React from "react";
import styled from "styled-components";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "../features/StateProvider";

function Checkout(props) {
  const [{ basket }, dispatch] = useStateValue();
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
          <H2Title>Your Shopping Basket</H2Title>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
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
`;
const LeftCheckout = styled.div``;

const BannerImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const H2Title = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const RightCheckout = styled.div``;
