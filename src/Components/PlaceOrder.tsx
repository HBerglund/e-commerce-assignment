import React, { useContext, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import {
  OrderDetails,
  OrderDetailsContext,
} from "../Context/OrderDetailsContext";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

function PlaceOrder() {
  const history = useHistory();
  const orderDetails = useContext(OrderDetailsContext);
  const shoppingCart = useContext(ShoppingCartContext);

  const [disableButton, setDisableButton] = useState(false);

  const navigateToOrderConfirmation = () => {
    history.push("/orderconfirmation");
    shoppingCart.emptyCart();
    orderDetails.emptyOrderDetails();
  };

  const handlePlaceOrderClick = async () => {
    setDisableButton(true);
    const response = await mockApi(orderDetails.orderDetails);
    console.log(response);
    navigateToOrderConfirmation();
  };

  async function mockApi(orderDetails: OrderDetails) {
    await timeOut();
    return true;
  }

  async function timeOut() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  return (
    <IconButton disabled={disableButton} onClick={handlePlaceOrderClick}>
      <DoneIcon />
    </IconButton>
  );
}

export default PlaceOrder;
