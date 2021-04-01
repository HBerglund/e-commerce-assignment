import React, { useContext, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import {
  OrderDetails,
  OrderDetailsContext,
} from "../Context/OrderDetailsContext";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

function PlaceOrder() {
  const history = useHistory();
  const orderDetails = useContext(OrderDetailsContext);
  const shoppingCart = useContext(ShoppingCartContext);

  const [disableButton, setDisableButton] = useState(false);

  const navigateToOrderConfirmation = () => {
    console.log("navigate To next page");
    history.push("/orderconfirmation");
    shoppingCart.emptyCart();
    console.log(orderDetails.orderDetails);
  };

  const handlePlaceOrderClick = async () => {
    console.log("button is clicked");
    setDisableButton(true);
    const response = await mockApi(orderDetails.orderDetails);
    console.log("we have a response: " + response);
    console.log(orderDetails.orderDetails);
    navigateToOrderConfirmation();
  };

  async function mockApi(orderDetails: OrderDetails) {
    console.log("mockAPI is in play");
    await timeOut();
    return true;
  }

  async function timeOut() {
    console.log("timeOut is in play");
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return (
    <Button disabled={disableButton} onClick={handlePlaceOrderClick}>
      <DoneIcon />
    </Button>
  );
}

export default PlaceOrder;
