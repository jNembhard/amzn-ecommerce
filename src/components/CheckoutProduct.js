import React from "react";
import styled from "styled-components";
import { useStateValue } from "../features/StateProvider";

function CheckoutProduct(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

  return (
    <CheckoutProductContainer>
      <Image src={props.image} />
      <Info>
        <Title>{props.title}</Title>
        <Price>
          <small>$</small>
          <strong>{props.price}</strong>
        </Price>
        <Rating>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </Rating>
        {!props.hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </Info>
    </CheckoutProductContainer>
  );
}

export default CheckoutProduct;

const CheckoutProductContainer = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 180px;
  height: 180px;
`;

const Info = styled.div`
  padding-left: 20px;

  > button {
    background: #f0c14b;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.12);
    height: 20px;
    width: 150px;
    cursor: pointer;
    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.12);
    }
  }
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

const Price = styled.p``;
const Rating = styled.div`
  display: flex;
`;
