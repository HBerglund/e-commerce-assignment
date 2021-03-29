import {
  Button,
  Collapse,
  FormControl,
  FormControlLabel,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";

function PaymentDetails() {
  const [paymentValue, setPaymentValue] = useState("card");
  const [invoiceValue, setInvoiceValue] = useState("home");
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showSwish, setShowSwish] = useState<boolean>(false);
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [showHomeAddress, setShowHomeAddress] = useState<boolean>(false);
  const [showOtherAddress, setShowOtherAddress] = useState<boolean>(false);

  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    selectWrapper: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
    },
    inputWrapper: {
      width: "100%",
      margin: "1rem",
      display: "flex",
    },
    selectButton: {
      margin: "1rem",
    },
  });

  useEffect(() => {
    switch (paymentValue) {
      case "card":
        setShowCard((prev) => !prev);
        setShowInvoice(false);
        setShowSwish(false);
        break;
      case "swish":
        setShowSwish((prev) => !prev);
        setShowInvoice(false);
        setShowCard(false);
        break;
      case "invoice":
        setShowInvoice((prev) => !prev);
        setShowSwish(false);
        setShowCard(false);
        break;
    }
  }, [paymentValue]);

  useEffect(() => {
    switch (invoiceValue) {
      case "home":
        setShowHomeAddress((prev) => !prev);
        setShowOtherAddress(false);
        break;
      case "other":
        setShowOtherAddress((prev) => !prev);
        setShowHomeAddress(false);
        break;
    }
  }, [invoiceValue]);

  const handlePaymentChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPaymentValue((event.target as HTMLInputElement).value);
  };

  const handleInvoiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceValue((event.target as HTMLInputElement).value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.selectWrapper}>
        <FormControl component="fieldset">
          <RadioGroup
            name="payment"
            value={paymentValue}
            onChange={handlePaymentChange}
          >
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="Credit card"
            />
            <Collapse className={classes.inputWrapper} in={showCard}>
              <TextField label="Card name holder" variant="outlined" />
              <TextField label="Card number" variant="outlined" />
              <TextField label="Y/M" variant="outlined" />
              <TextField label="CCV" variant="outlined" />
            </Collapse>
            <FormControlLabel value="swish" control={<Radio />} label="Swish" />
            <Collapse className={classes.inputWrapper} in={showSwish}>
              <TextField label="Phone number" variant="outlined" />
            </Collapse>
            <FormControlLabel
              value="invoice"
              control={<Radio />}
              label="Invoice"
            />
            <Collapse className={classes.inputWrapper} in={showInvoice}>
              <FormControl component="fieldset">
                <RadioGroup
                  name="invoice"
                  value={invoiceValue}
                  onChange={handleInvoiceChange}
                >
                  <FormControlLabel
                    value="home"
                    control={<Radio />}
                    label="Send invoice to home address"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Send invoice to another address"
                  />
                </RadioGroup>
              </FormControl>
              <Collapse className={classes.inputWrapper} in={showHomeAddress}>
                <div>
                  <TextField
                    value="Victor Wikström"
                    label="Name"
                    variant="outlined"
                  />
                  <TextField
                    style={{ minWidth: "300px" }}
                    value="Jenny Lindsgatan 4B"
                    label="Address"
                    variant="outlined"
                  />
                  <TextField
                    value="41662"
                    label="Postal code"
                    variant="outlined"
                  />
                  <TextField
                    value="Gothenburg"
                    label="City"
                    variant="outlined"
                  />
                </div>
              </Collapse>
              <Collapse className={classes.inputWrapper} in={showOtherAddress}>
                <div>
                  <TextField label="Name" variant="outlined" />
                  <TextField
                    style={{ minWidth: "300px" }}
                    label="Address"
                    variant="outlined"
                  />
                  <TextField label="Postal code" variant="outlined" />
                  <TextField label="City" variant="outlined" />
                </div>
              </Collapse>
            </Collapse>
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}

export default PaymentDetails;
