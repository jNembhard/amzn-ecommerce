import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { useStateValue } from "../features/StateProvider";
import { getBasketTotal } from "../features/reducer";

function Subtotal(props) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Container>
      <NumberFormat
        renderText={(value) => (
          <>
            <p>
              {`Subtotal(${basket.length} items):`}
              <strong>{value}</strong>
            </p>
            <SubtotalGift>
              <input type="checkbox" /> This order contains a small gift
            </SubtotalGift>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType="text"
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </Container>
  );
}

export default Subtotal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: #f3f3f3;
  border: 1px solid #dddddd;
  border-radius: 3px;

  > button {
    background: #f0c14b;
    border-radius: 2px;
    width: 100%;
    height: 30px;
    border: 1px solid #dddddd;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
  }
`;

const SubtotalGift = styled.small`
  display: flex;
  align-items: center;

  > input {
    margin-right: 5px;
  }
`;
