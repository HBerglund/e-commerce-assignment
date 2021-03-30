import { makeStyles, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";
import ShippingSelect from "./ShippingSelect";

function ShippingDetails() {
  const order = useContext(OrderDetailsContext);
  const [showError, setShowError] = useState(false);

  const useStyles = makeStyles({
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
  });

  const classes = useStyles();

  const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^([^0-9]*)$/)) {
      console.log("Invalid name");
      setShowError(true);
    } else {
      setShowError(false);
      order.setNewOrderDetails(e);
    }
  };

  return (
    <div className={classes.flexColumn}>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Personal details</Typography>
        <TextField
          onChange={validateName}
          name="name"
          label="Name"
          required
          error={showError}
          helperText={showError ? "Please enter name" : " "}
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="phone"
          label="Phone number"
          required
          error={order.orderDetails.phone === ""}
          helperText={
            order.orderDetails.phone === "" ? "Please enter phone number" : " "
          }
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="email"
          label="Email"
          required
          error={order.orderDetails.email === ""}
          helperText={
            order.orderDetails.email === "" ? "Please enter email address" : " "
          }
        />
      </div>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Adress</Typography>
        <TextField
          onChange={order.setNewOrderDetails}
          name="street"
          label="Street name"
          required
          error={order.orderDetails.street === ""}
          helperText={
            order.orderDetails.street === "" ? "Please enter street name" : " "
          }
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="postal"
          label="Postal code"
          required
          error={order.orderDetails.postal === ""}
          helperText={
            order.orderDetails.postal === "" ? "Please enter postal code" : " "
          }
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="city"
          label="City"
          required
          error={order.orderDetails.city === ""}
          helperText={
            order.orderDetails.city === "" ? "Please enter city" : " "
          }
        />
        <TextField
          onChange={order.setNewOrderDetails}
          name="country"
          label="Country"
          required
          error={order.orderDetails.country === ""}
          helperText={
            order.orderDetails.country === "" ? "Please enter country" : " "
          }
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <ShippingSelect />
      </div>
    </div>
  );
}

export default ShippingDetails;
