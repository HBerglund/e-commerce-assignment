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
  const [disableButton, setDisableButton] = useState(false);
  const shoppingCart = useContext(ShoppingCartContext);

  const handlePlaceOrderClick = async () => {
    setDisableButton(true);
    const response = await mockApi(orderDetails.orderDetails);
    navigateToOrderConfirmation();
  };

  async function mockApi(orderDetails: OrderDetails) {
    await timeOut();
    console.log(orderDetails);
    return true;
  }

  async function timeOut() {
    return new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
  }

  const navigateToOrderConfirmation = () => {
    history.push("/orderconfirmation");
    shoppingCart.emptyCart();

    // check why this doesn't work
    // orderDetails.emptyOrderDetails();
  };

  return (
    <IconButton disabled={disableButton} onClick={handlePlaceOrderClick}>
      <DoneIcon />
    </IconButton>
  );
}

export default PlaceOrder;
