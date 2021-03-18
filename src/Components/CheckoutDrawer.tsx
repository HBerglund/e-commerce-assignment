import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Divider, Drawer, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import SideBarCartItem from "./SideBarCartItem";
import CartItem from "../Context/ShoppingCartContext";
import { useContext } from "react";

interface Props {
  isOpen: boolean;
  handleExit: (isOpen: boolean) => void;
}

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    textColor: "black",
    boxShadow: "none",
    margin: "1rem",
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    width: "40%",
  },
  titleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

function CheckoutDrawer(props: Props) {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;
  console.log(shoppingCart);

  const classes = useStyles();

  const handleDrawerExit = () => {
    props.handleExit(!props.isOpen);
  };

  return (
    <div>
      <Drawer
        anchor="right"
        open={props.isOpen}
        classes={{ paper: classes.paper }}
      >
        <div className={classes.root}>
          <div className={classes.titleWrapper}>
            <Typography variant="h5">Your cart</Typography>
            <IconButton onClick={handleDrawerExit}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div>
            {cart.map(({ color, id, name, price, quantity, size, image }) => (
              <SideBarCartItem
                color={color}
                id={id}
                name={name}
                price={price}
                quantity={quantity}
                size={size}
                image={image}
              />
            ))}
          </div>
          <div className={classes.buttonsWrapper}>
            <Button onClick={handleDrawerExit} component={Link} to="/checkout">
              Checkout
            </Button>
            <Button onClick={handleDrawerExit}>Exit</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default CheckoutDrawer;
