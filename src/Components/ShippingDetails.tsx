import { makeStyles, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useContext, useState } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";
import ShippingSelect from "./ShippingSelect";

function ShippingDetails() {
  const order = useContext(OrderDetailsContext);
  const [showErrorName, setShowErrorName] = useState<boolean>(false);
  const [showErrorPhone, setShowErrorPhone] = useState<boolean>(false);
  const [showErrorEmail, setShowErrorEmail] = useState<boolean>(false);
  const [showErrorStreet, setShowErrorStreet] = useState<boolean>(false);
  const [showErrorPostalCode, setShowErrorPostalCode] = useState<boolean>(
    false
  );
  const [showErrorCity, setShowErrorCity] = useState<boolean>(false);
  const [showErrorCountry, setShowErrorCountry] = useState<boolean>(false);

  const useStyles = makeStyles({
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
  });

  const classes = useStyles();

  const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^([^0-9]*)$/)) {
      setShowErrorName(true);
    } else {
      setShowErrorName(false);
      order.setNewOrderDetails(e);
    }
  };

  const validatePhone = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^\d{10}$/)) {
      setShowErrorPhone(true);
    } else {
      setShowErrorPhone(false);
      order.setNewOrderDetails(e);
    }
  };

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setShowErrorEmail(true);
    } else {
      setShowErrorEmail(false);
      order.setNewOrderDetails(e);
    }
  };

  const validateStreet = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^\s*\S+(?:\s+\S+){2}/)) {
      setShowErrorStreet(true);
    } else {
      setShowErrorStreet(false);
      order.setNewOrderDetails(e);
    }
  };

  const validatePostalCode = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match("^\\d{3}\\s*\\d{2}$")) {
      setShowErrorPostalCode(true);
    } else {
      setShowErrorPostalCode(false);
      order.setNewOrderDetails(e);
    }
  };

  const validateCity = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^([^0-9]*)$/)) {
      setShowErrorCity(true);
    } else {
      setShowErrorCity(false);
      order.setNewOrderDetails(e);
    }
  };

  const validateCountry = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value.match(/^([^0-9]*)$/)) {
      setShowErrorCountry(true);
    } else {
      setShowErrorCountry(false);
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
          error={showErrorName}
          helperText={showErrorName ? "Please enter name" : " "}
        />
        <TextField
          onChange={validatePhone}
          name="phone"
          label="Phone number"
          required
          error={showErrorPhone}
          helperText={
            showErrorPhone ? "Please enter a 10 digit phone number" : " "
          }
        />
        <TextField
          onChange={validateEmail}
          name="email"
          label="Email"
          required
          error={showErrorEmail}
          helperText={showErrorEmail ? "Please enter email address" : " "}
        />
      </div>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Adress</Typography>
        <TextField
          onChange={validateStreet}
          name="street"
          label="Street name"
          required
          error={showErrorStreet}
          helperText={showErrorStreet ? "Please enter street name" : " "}
        />
        <TextField
          onChange={validatePostalCode}
          name="postal"
          label="Postal code"
          required
          error={showErrorPostalCode}
          helperText={showErrorPostalCode ? "Please enter postal code" : " "}
        />
        <TextField
          onChange={validateCity}
          name="city"
          label="City"
          required
          error={showErrorCity}
          helperText={showErrorCity ? "Please enter city" : " "}
        />
        <TextField
          onChange={validateCountry}
          name="country"
          label="Country"
          required
          error={showErrorCountry}
          helperText={showErrorCountry ? "Please enter country" : " "}
        />
      </div>
      <div style={{ margin: "1rem" }}>
        <ShippingSelect />
      </div>
    </div>
  );
}

export default ShippingDetails;
