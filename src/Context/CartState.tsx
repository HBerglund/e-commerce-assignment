import { useContext, useEffect } from "react";
import { ShoppingCartContext } from "./ShoppingCartContext";

function CartState() {
  let cartState = useContext(ShoppingCartContext);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState));
  }, [cartState]);

  return null;
}

export default CartState;
