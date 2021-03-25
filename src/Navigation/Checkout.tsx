import { Button, Divider, Typography } from "@material-ui/core";
import { useContext } from "react";
import CartListItem from "../Components/CartListItem";
import Section from "../Components/Section";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

function Checkout() {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  return (
    <div>
      <Section>
        <Typography variant="h3" component="h1" gutterBottom>
          Checkout
        </Typography>
        <Divider />
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <CartListItem item={item} />
            ))}
            <Button>Continue to payment</Button>
          </div>
        ) : (
          <div style={{ marginTop: "1rem" }}>No items in cart yet</div>
        )}
      </Section>
    </div>
  );
}

export default Checkout;
