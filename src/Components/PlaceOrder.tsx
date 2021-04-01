import React, { useContext, useEffect, useState } from "react";
import DoneIcon from "@material-ui/icons/Done";
import {
  OrderDetails,
  OrderDetailsContext,
} from "../Context/OrderDetailsContext";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

function PlaceOrder() {
  const history = useHistory();
  const orderDetails = useContext(OrderDetailsContext);
  const shoppingCart = useContext(ShoppingCartContext);

  const [disableButton, setDisableButton] = useState(false);
  const [showError, setShowError] = useState(false);

  const navigateToOrderConfirmation = () => {
    history.push("/orderconfirmation");
    shoppingCart.emptyCart();
    orderDetails.emptyOrderDetails();
  };

  const checkAllFieldsFilled = () => {
    const values = Object.values(orderDetails.orderDetails);
    for (let value of values.slice(1, 7)) {
      if (value === "") {
        return setShowError(true);
      }
      setShowError(false);
    }
  };

  useEffect(() => {
    checkAllFieldsFilled();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePlaceOrderClick = async () => {
    setDisableButton(true);
    console.log(orderDetails.orderDetails);
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

  if (showError) {
    return (
      <Typography color="error">
        Make sure you've filled out all the fields in the order forms above to
        place your order
      </Typography>
    );
  } else {
    return (
      <Button
        disabled={disableButton}
        onClick={handlePlaceOrderClick}
        color="secondary"
        variant="contained"
      >
        Place order <DoneIcon />
      </Button>
    );
  }
}

export default PlaceOrder;
