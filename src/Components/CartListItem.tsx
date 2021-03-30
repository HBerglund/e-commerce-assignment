import {
  Button,
  createStyles,
  Divider,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useContext } from "react";
import { ShoppingCartContext, CartItem } from "../Context/ShoppingCartContext";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

interface Props {
  item: CartItem;
  mutable: boolean;
}

function CartListItem(props: Props) {
  const cart = useContext(ShoppingCartContext);

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
      },
      wrapper: {
        display: "flex",
        position: "relative",
        justifyContent: "space-between",
        padding: "1rem 0",
      },
      productImg: {
        width: "80px",
        objectFit: "cover",
      },
      productInfo: {
        margin: "0 0 1rem 1rem",
      },
      flex: {
        display: "flex",
      },
      changeWrapper: {
        position: "absolute",
        display: "flex",
        flexDirection: "column",
        right: 0,
        top: 0,
      },
      quantityWrapper: {
        display: "flex",
        alignItems: "center",
        margin: "1rem 0",
      },
      rightWrapper: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
      },
      flexEnd: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
      },
    })
  );

  const theme = useTheme();
  const classes = useStyles();

  const { name, image, color, size, price } = props.item.product;

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.flex}>
          <img className={classes.productImg} src={image} alt={name} />

          <div className={classes.productInfo}>
            <Typography variant="h6" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2">{color}</Typography>
            <Typography variant="body2" gutterBottom>
              {size}
            </Typography>
            <Typography variant="body1">
              ${(Number(price) * props.item.quantity).toFixed(2)}
            </Typography>
          </div>
        </div>
        <div className={classes.rightWrapper}>
          {props.mutable ? (
            <div className={classes.flexEnd}>
              <IconButton size="small" onClick={() => cart.remove(props.item)}>
                <DeleteIcon />
              </IconButton>
              <div className={classes.quantityWrapper}>
                <IconButton
                  size="small"
                  onClick={() => cart.changeQuantity(props.item, "decrease")}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1">{props.item.quantity}</Typography>
                <IconButton
                  size="small"
                  onClick={() => cart.changeQuantity(props.item, "increase")}
                >
                  <AddIcon />
                </IconButton>
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default CartListItem;
