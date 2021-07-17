import React from "react";
import styled from "styled-components";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import NumberFormat from "react-number-format";

function Order(props) {
  return (
    <OrderWrap>
      <h2>Order</h2>
      <p>
        {moment.unix(props.order.data.created).format("MMMM Do YYY, h:mma")}
      </p>
      <OrderID>
        <small>{props.order.id}</small>
      </OrderID>
      {props.order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
        />
      ))}
      <NumberFormat
        renderText={(value) => <OrderTotal>Order Total: {value}</OrderTotal>}
        decimalScale={2}
        value={props.order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        hideButton
      />
    </OrderWrap>
  );
}

export default Order;

const OrderWrap = styled.div`
  padding: 40px;
  margin: 20px 0;
  border: 1px solid lightgray;
  background-color: white;
  position: relative;
`;

const OrderID = styled.p`
  position: absolute;
  top: 40px;
  right: 20px;
`;

const OrderTotal = styled.h3`
  font-weight: 500;
  text-align: right;
`;
