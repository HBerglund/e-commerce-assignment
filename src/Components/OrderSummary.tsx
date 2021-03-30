import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { useContext } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import CartListItem from "./CartListItem";

function OrderSummary() {
  const order = useContext(OrderDetailsContext);
  const shoppingCart = useContext(ShoppingCartContext);
  const { cart } = shoppingCart;

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: smUp ? "row" : "column",
      },
      summary: {
        marginRight: smUp ? "4rem" : "0",
        border: "1px solid",
        borderColor: theme.palette.secondary.main,
        padding: "1rem",
        minWidth: mdUp ? "20rem" : "none",
      },
      products: {
        border: "1px solid",
        borderColor: theme.palette.secondary.main,
        padding: "1rem",
        minWidth: mdUp ? "20rem" : "none",
      },
    })
  );

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <div className={classes.summary}>
          <div>
            <Typography variant="h6" gutterBottom>
              Personal details
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.phone}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.email}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Address
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.street}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.postal}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.city}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.country}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Delivery
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.deliveryOption}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Delivered at:{" "}
              {order.getDeliveryDay(order.orderDetails.deliveryOption)}
            </Typography>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Payment
            </Typography>
            <Typography variant="body2" gutterBottom>
              {order.orderDetails.paymentOption}
            </Typography>
          </div>
        </div>
        <div className={classes.products}>
          <Typography variant="h6" gutterBottom>
            Products
          </Typography>
          <div>
            {cart.length > 0 ? (
              <div>
                {cart.map((item) => (
                  <CartListItem item={item} showRemoveButton={false} />
                ))}
              </div>
            ) : (
              <div style={{ marginTop: "1rem" }}>No items in cart yet</div>
            )}
          </div>
        </div>
      </div>
      <Typography style={{ margin: "2rem 0" }} variant="h5" gutterBottom>
        Total price incl shipping: $
        {shoppingCart.totalPrice +
          order.getShippingPrice(order.orderDetails.deliveryOption)}
      </Typography>
    </div>
  );
}

export default OrderSummary;
