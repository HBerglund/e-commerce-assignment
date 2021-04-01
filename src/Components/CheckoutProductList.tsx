import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import CartListItem from "./CartListItem";

function CheckoutProductList() {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  return (
    <div style={{ width: "100%" }}>
      {cart.length > 0 ? (
        <div>
          {cart.map((item) => (
            <CartListItem item={item} mutable={true} key={item.product.id} />
          ))}
        </div>
      ) : (
        <div style={{ marginTop: "1rem" }}>No items in cart yet</div>
      )}
      <Typography
        variant="h6"
        style={{ margin: "2rem 0", textAlign: "right" }}
        gutterBottom
      >
        Total: ${shoppingCart.totalPrice}
      </Typography>
    </div>
  );
}

export default CheckoutProductList;
