import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import {
  Divider,
  Drawer,
  IconButton,
  Paper,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import SideBarCartItem from "./SideBarCartItem";
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
    margin: "5rem 1rem 1rem 1rem",
  },
  buttonsWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  paper: {
    width: "40%",
  },
  header: {
    width: "40%",
    position: "fixed",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1rem",
  },
});

function CheckoutDrawer(props: Props) {
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

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
            <div>
              {cart.map((item) => (
                <SideBarCartItem item={item} />
              ))}
            </div>
          ) : (
            <div>No items in cart yet</div>
          )}

          <div className={classes.buttonsWrapper}>
            <Button onClick={handleDrawerExit} component={Link} to="/checkout">
              Checkout
            </Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default CheckoutDrawer;
