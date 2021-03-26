import { makeStyles, TextField, Typography } from "@material-ui/core";
import { useContext } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";
import ShippingSelect from "./ShippingSelect";

function ShippingDetails() {
  const order = useContext(OrderDetailsContext);
  const useStyles = makeStyles({
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.flexColumn}>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Personal details</Typography>
        <TextField
          onChange={order.setNewOrderDetails}
          name="name"
          label="Name"
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="phone"
          label="Phone number"
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="email"
          label="Email"
        />
      </div>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Adress</Typography>
        <TextField
          onChange={order.setNewOrderDetails}
          name="street"
          label="Street name"
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="postal"
          label="Postal code"
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="city"
          label="City"
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="country"
          label="Country"
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <ShippingSelect />
      </div>
    </div>
  );
}

export default ShippingDetails;
