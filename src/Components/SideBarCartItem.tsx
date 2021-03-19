import classes from "*.module.css";
import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

interface Props {
  quantity: number;
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: string;
  image: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      margin: "1rem",
    },
    wrapper: {
      display: "flex",
    },
    productImg: {
      width: "80px",
    },
    productInfo: {
      margin: "0 0 1rem 1rem",
    },
  })
);

function SideBarCartItem(props: Props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div>
          <img
            className={classes.productImg}
            src={props.image}
            alt="product image"
          />
        </div>
        <div className={classes.productInfo}>
          <Typography variant="h6">{props.name}</Typography>
          <Typography>{props.color}</Typography>
          <Typography>{props.size}</Typography>
          <Typography>Quantity: {props.quantity}</Typography>
        </div>
      </div>
      <Button>Remove item</Button>
      <Divider />
    </div>
  );
}

export default SideBarCartItem;
