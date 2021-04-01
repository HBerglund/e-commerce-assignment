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

  const [nameInput, setNameInput] = useState({ value: "" });
  const [phoneInput, setPhoneInput] = useState({ value: "" });
  const [emailInput, setEmailInput] = useState({ value: "" });
  const [streetInput, setStreetInput] = useState({ value: "" });
  const [postalInput, setPostalInput] = useState({ value: "" });
  const [cityInput, setCityInput] = useState({ value: "" });
  const [countryInput, setCountryInput] = useState({ value: "" });

  const useStyles = makeStyles({
    flexColumn: {
      display: "flex",
      flexDirection: "column",
    },
  });

  const classes = useStyles();

  const hasMissingInfo = () => {
    const values = Object.values(order.orderDetails);
    console.log(values);
    for (let value of values.slice(1, 7)) {
      if (value === "") {
        console.log("has missing string");
        return true;
      }
    }
    return false;
  };

  const hasError =
    showErrorName ||
    showErrorPhone ||
    showErrorEmail ||
    showErrorStreet ||
    showErrorPostalCode ||
    showErrorCity ||
    showErrorCountry;

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "name": {
        setNameInput({ value: e.target.value });
        validateName(e);
        break;
      }
      case "phone": {
        setPhoneInput({ value: e.target.value });
        validatePhone(e);
        break;
      }
      case "email": {
        setEmailInput({ value: e.target.value });
        validateEmail(e);
        break;
      }
      case "street": {
        setStreetInput({ value: e.target.value });
        validateStreet(e);
        break;
      }
      case "postal": {
        setPostalInput({ value: e.target.value });
        validatePostalCode(e);
        break;
      }
      case "city": {
        setCityInput({ value: e.target.value });
        validateCity(e);
        break;
      }
      case "country": {
        setCountryInput({ value: e.target.value });
        validateCountry(e);
        break;
      }
    }

    if (hasError || hasMissingInfo()) {
      order.validateOrder(false);
    } else {
      order.validateOrder(true);
    }
  };

  const validateName = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.match(/[a-ö][A-Ö]/)) {
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

  const {
    name,
    phone,
    email,
    street,
    postal,
    city,
    country,
  } = order.orderDetails;

  return (
    <div className={classes.flexColumn}>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Personal details</Typography>
        <TextField
          value={nameInput.value}
          onChange={handleFieldChange}
          name="name"
          label="Name"
          required
          error={showErrorName}
          helperText={showErrorName ? "Please enter name" : " "}
        />
        <TextField
          value={phoneInput.value}
          onChange={handleFieldChange}
          name="phone"
          label="Phone number"
          required
          error={showErrorPhone}
          helperText={
            showErrorPhone ? "Please enter a 10 digit phone number" : " "
          }
        />
        <TextField
          value={emailInput.value}
          onChange={handleFieldChange}
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
          value={streetInput.value}
          onChange={handleFieldChange}
          name="street"
          label="Street name"
          required
          error={showErrorStreet}
          helperText={showErrorStreet ? "Please enter street name" : " "}
        />
        <TextField
          value={postalInput.value}
          onChange={handleFieldChange}
          name="postal"
          label="Postal code"
          required
          error={showErrorPostalCode}
          helperText={showErrorPostalCode ? "Please enter postal code" : " "}
        />
        <TextField
          value={cityInput.value}
          onChange={handleFieldChange}
          name="city"
          label="City"
          required
          error={showErrorCity}
          helperText={showErrorCity ? "Please enter city" : " "}
        />
        <TextField
          value={countryInput.value}
          onChange={handleFieldChange}
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
