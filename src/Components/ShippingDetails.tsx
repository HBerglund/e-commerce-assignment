import { makeStyles, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useContext, useEffect, useState } from "react";
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

  const hasMissingInfo = () => {
    const {
      name,
      phone,
      email,
      street,
      postal,
      city,
      country,
    } = order.orderDetails;
    if (name && phone && email && street && postal && city && country) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {
    console.log("useeffect " + order.orderIsValidated);
    const hasError =
      showErrorName ||
      showErrorPhone ||
      showErrorEmail ||
      showErrorStreet ||
      showErrorPostalCode ||
      showErrorCity ||
      showErrorCountry;
    if (hasError || hasMissingInfo) {
      order.validateOrder(false);
    } else {
      order.validateOrder(true);
    }
  }, [
    showErrorName,
    showErrorPhone,
    showErrorEmail,
    showErrorStreet,
    showErrorPostalCode,
    showErrorCity,
    showErrorCountry,
  ]);

  const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[a-ö][A-Ö]/)) {
      console.log(e.target.value);
      setShowErrorName(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorName(true);
    }
  };

  const validatePhone = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^\d{10}$/)) {
      setShowErrorPhone(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorPhone(true);
    }
  };

  const validateEmail = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setShowErrorEmail(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorEmail(true);
    }
  };

  const validateStreet = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/^.{3,}$/)) {
      setShowErrorStreet(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorStreet(true);
    }
  };

  const validatePostalCode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match("^\\d{3}\\s*\\d{2}$")) {
      setShowErrorPostalCode(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorPostalCode(true);
    }
  };

  const validateCity = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[a-ö][A-Ö]/)) {
      setShowErrorCity(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorCity(true);
    }
  };

  const validateCountry = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[a-ö][A-Ö]/)) {
      setShowErrorCountry(false);
      order.setNewOrderDetails(e);
    } else {
      setShowErrorCountry(true);
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
