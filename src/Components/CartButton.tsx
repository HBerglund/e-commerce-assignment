import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState, useContext } from "react";
import CheckoutDrawer from "./CheckoutDrawer";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

function CartButton() {
  const theme = useTheme();
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        position: "relative",
        margin: "0 .5rem",
      },
      productNumber: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        right: "-5%",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: theme.palette.primary.main,
        color: "white",
      },
    })
  );

  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  const numberOfItems = cart.length;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const classes = useStyles();

  const handleShowSidebar = () => {
    setSidebarIsOpen(true);
  };

  const handleExit = (isOpen: boolean) => {
    setSidebarIsOpen(isOpen);
  };

  return (
    <div className={classes.root}>
      <Typography className={classes.productNumber}>{numberOfItems}</Typography>
      <IconButton disableRipple onClick={handleShowSidebar}>
        <ShoppingCartIcon />
      </IconButton>
      <CheckoutDrawer isOpen={sidebarIsOpen} handleExit={handleExit} />
    </div>
  );
}

export default CartButton;
