import { createStyles, IconButton, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import CheckoutDrawer from "./CheckoutDrawer";

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

function Cart() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const classes = useStyles();

  const handleShowSidebar = () => {
    setSidebarIsOpen(true);
  };

  const handleExit = (isOpen: boolean) => {
    setSidebarIsOpen(isOpen);
  };

  // if (numberOfItems > 0) {
  //   return (
  //     <div className={classes.root}>
  //       <Typography className={classes.productNumber}>
  //         {numberOfItems}
  //       </Typography>
  //       <IconButton
  //         component={Link}
  //         to="/checkout"
  //         disableRipple
  //         onClick={handleShowSidebar}
  //       >
  //         <ShoppingCartIcon />
  //       </IconButton>
  //       <CheckoutDrawer isOpen={sidebarIsOpen} handleExit={handleExit} />
  //     </div>
  //   );
  // } else {
  return (
    <div className={classes.root}>
      <IconButton
        component={Link}
        to="/checkout"
        disableRipple
        onClick={handleShowSidebar}
      >
        <ShoppingCartIcon />
      </IconButton>
      <CheckoutDrawer isOpen={sidebarIsOpen} handleExit={handleExit} />
    </div>
  );
}

export default Cart;
