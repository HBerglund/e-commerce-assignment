import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Divider,
  Drawer,
  IconButton,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import CartListItem from "./CartListItem";
import { useContext } from "react";

interface Props {
  isOpen: boolean;
  handleExit: (isOpen: boolean) => void;
}

function CheckoutDrawer(props: Props) {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles({
    root: {
      backgroundColor: "white",
      textColor: "black",
      boxShadow: "none",
      margin: "5rem 1rem 1rem 1rem",
      padding: "0 1rem",
    },
    itemsWrapper: {
      margin: "2rem 0",
    },
    checkoutButton: {
      display: "flex",
      flexDirection: "column",
      margin: "2rem 0",
    },
    paper: {
      width: mdUp ? "30%" : "60%" && smUp ? "60%" : "90%",
      minWidth: mdUp ? "500px" : "none",
    },
    header: {
      width: mdUp ? "30%" : "60%" && smUp ? "60%" : "90%",
      minWidth: mdUp ? "500px" : "none",
      position: "fixed",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem",
      zIndex: 100,
    },
    totalPrice: {
      marginTop: "1rem",
      textAlign: "right",
    },
  });

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
        <Paper className={classes.header}>
          <Typography variant="h5">Your cart</Typography>
          <IconButton onClick={handleDrawerExit}>
            <CloseIcon />
          </IconButton>
        </Paper>
        <div className={classes.root}>
          <Divider />
          {cart.length > 0 ? (
            <div className={classes.itemsWrapper}>
              {cart.map((item) => (
                <CartListItem
                  key={item.product.id}
                  item={item}
                  mutable={true}
                  handleExit={handleDrawerExit}
                  drawerOpen={props.isOpen}
                />
              ))}
              <Typography className={classes.totalPrice} variant="h6">
                Total price: ${shoppingCart.totalPrice}
              </Typography>
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "2rem" }}>
              <Typography variant="h6">No items in your cart yet!</Typography>
            </div>
          )}
          {cart.length ? (
            <div className={classes.checkoutButton}>
              <Button
                color="primary"
                variant="contained"
                onClick={handleDrawerExit}
                component={Link}
                to="/checkout"
              >
                Checkout
              </Button>
            </div>
          ) : null}
        </div>
      </Drawer>
    </div>
  );
}

export default CheckoutDrawer;
