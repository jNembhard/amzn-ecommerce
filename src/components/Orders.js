import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../features/StateProvider";
import styled from "styled-components";
import Order from "./Order";

function Orders() {
  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc") //date created in descending order
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <OrdersWrap>
      <h1>Your Orders:</h1>

      <OrdersOrder>
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </OrdersOrder>
    </OrdersWrap>
  );
}

export default Orders;

const OrdersWrap = styled.div`
  padding: 20px 80px;

  > h1 {
    margin: 30px 0;
  }
`;
const OrdersOrder = styled.div``;
