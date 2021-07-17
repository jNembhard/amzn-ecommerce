import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { useStateValue } from "../features/StateProvider";
import { getBasketTotal } from "../features/reducer";
import { useHistory } from "react-router-dom";

function Subtotal(props) {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
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
      <button onClick={(e) => history.push("/payment")}>
        Proceed to Checkout
      </button>
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
    cursor: pointer;
    box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.12);

    &:active {
      transform: scale(0.98);
      box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.12);
    }
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SubtotalGift = styled.small`
  display: flex;
  align-items: center;

  > input {
    margin-right: 5px;
  }
`;
