import {
  createStyles,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useEffect, useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
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
      backgroundColor: "red",
      color: "white",
    },
  })
);

function ShoppingCart() {
  const [numberOfItems, setNumberOfCartItems] = useState(0);

  const classes = useStyles();

  useEffect(() => {
    const cartLS = localStorage.getItem("productsInCart");
    if (cartLS) {
      setNumberOfCartItems(JSON.parse(cartLS).length);
    }
  }, [numberOfItems]);

  if (numberOfItems > 0) {
    return (
      <div className={classes.root}>
        <Typography className={classes.productNumber}>
          {numberOfItems}
        </Typography>
        <IconButton component={Link} to="/checkout" disableRipple>
          <ShoppingCartIcon />
        </IconButton>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <IconButton component={Link} to="/checkout" disableRipple>
          <ShoppingCartIcon />
        </IconButton>
      </div>
    );
  }
}

export default ShoppingCart;
