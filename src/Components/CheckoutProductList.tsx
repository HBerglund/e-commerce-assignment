import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import CartListItem from "./CartListItem";

function CheckoutProductList() {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartListItem item={item} />
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "1rem" }}>No items in cart yet</div>
      )}
      <Typography gutterBottom>
        Total price: ${shoppingCart.totalPrice}
      </Typography>
    </div>
  );
}

export default CheckoutProductList;
