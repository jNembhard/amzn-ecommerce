import React from "react";
import { useStateValue } from "../features/StateProvider";
import styled from "styled-components";

function Product(props) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  // console.log("This is the basket -> ", basket);

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: props.rating,
      },
    });
  };
  return (
    <ProductWrap>
      <ProductInfo>
        <p>{props.title}</p>
        <ProductPrice>
          <small>$</small>
          <strong>{props.price}</strong>
        </ProductPrice>
        <ProductRating>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </ProductRating>
      </ProductInfo>
      <img src={props.image} alt="Homepage Products" />
      <button onClick={addToBasket}>Add to basket</button>
    </ProductWrap>
  );
}

export default Product;

const ProductWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  border-radius: 50px;
  z-index: 1;

  > img {
    min-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  > button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    min-height: 1.6rem;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.12);
    cursor: pointer;
    width: 200px;

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 80%;
    align-items: center;
    min-height: 400px;
    padding: 10px;
    /* background: white; */
    margin: 10px;

    > img {
      max-height: 100px;
      width: 50%;
      object-fit: contain;
      margin-bottom: 5px;
    }

    > button {
      width: 40%;
      margin-bottom: 8px;
    }
  }
`;

const ProductInfo = styled.div`
  /* width: 100%; */
  height: 100px;
  margin-bottom: 15px;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: fit-content;
    height: fit-content;
    margin: 8px 20px;
  }

  > p {
    font-size: 14px;
  }
`;

const ProductPrice = styled.p`
  margin-top: 5px;
`;
const ProductRating = styled.div`
  display: flex;
`;
