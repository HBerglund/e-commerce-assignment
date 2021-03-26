import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { ShoppingCartContext, CartItem } from "../Context/ShoppingCartContext";

interface Props {
  item: CartItem;
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

function CartListItem(props: Props) {
  const classes = useStyles();
  const shoppingCart = useContext(ShoppingCartContext);

  const handleRemoveItem = (cartItem: CartItem) => {
    shoppingCart.removeFromCart(cartItem);
  };

  const { name, image, color, size, price } = props.item.product;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div>
          <img className={classes.productImg} src={image} alt={name} />
        </div>
        <div className={classes.productInfo}>
          <Typography variant="h6">{name}</Typography>
          <Typography>{color}</Typography>
          <Typography>{size}</Typography>
          <Typography>Quantity: {props.item.quantity}</Typography>
          <Typography>
            Price: {(Number(price) * props.item.quantity).toFixed(2)}
          </Typography>
        </div>
      </div>
      <Button onClick={() => handleRemoveItem(props.item)}>Remove item</Button>
      <Divider />
    </div>
  );
}

export default CartListItem;
