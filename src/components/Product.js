import React from "react";
import { useStateValue } from "../features/StateProvider";
import styled from "styled-components";

// title, image, price, rating
function Product(props) {
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
      <img src={props.image} alt={`${props.image}`} />
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
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;

const ProductInfo = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`;

const ProductPrice = styled.p`
  margin-top: 5px;
`;
const ProductRating = styled.div`
  display: flex;
`;
