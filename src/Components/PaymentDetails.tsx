import {
  Collapse,
  FormControl,
  FormControlLabel,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";

function PaymentDetails() {
  const [paymentValue, setPaymentValue] = useState("Credit card");
  const [invoiceValue, setInvoiceValue] = useState("home");
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showSwish, setShowSwish] = useState<boolean>(false);
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [showHomeAddress, setShowHomeAddress] = useState<boolean>(false);
  const [showOtherAddress, setShowOtherAddress] = useState<boolean>(false);
  const order = useContext(OrderDetailsContext);

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
    inputField: {
      margin: ".5rem",
    },
  });

  useEffect(() => {
    switch (paymentValue) {
      case "Credit card":
        setShowCard((prev) => !prev);
        setShowInvoice(false);
        setShowSwish(false);
        break;
      case "Swish":
        setShowSwish((prev) => !prev);
        setShowInvoice(false);
        setShowCard(false);
        break;
      case "Invoice":
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
    order.setNewOrderDetails(event);
    setPaymentValue((event.target as HTMLInputElement).value);
  };

  const handleInvoiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInvoiceValue((event.target as HTMLInputElement).value);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.selectWrapper}>
        <FormControl component='fieldset'>
          <RadioGroup
            name='paymentOption'
            value={paymentValue}
            onChange={handlePaymentChange}
          >
            <FormControlLabel
              value='Credit card'
              control={<Radio />}
              label='Credit card'
            />
            <Collapse className={classes.inputWrapper} in={showCard}>
              <TextField
                label='Card name holder'
                variant='outlined'
                className={classes.inputField}
              />
              <TextField
                label='Card number'
                variant='outlined'
                className={classes.inputField}
              />
              <TextField
                label='Y/M'
                variant='outlined'
                className={classes.inputField}
              />
              <TextField
                label='CCV'
                variant='outlined'
                className={classes.inputField}
              />
            </Collapse>
            <FormControlLabel value='Swish' control={<Radio />} label='Swish' />
            <Collapse className={classes.inputWrapper} in={showSwish}>
              <TextField
                value={order.orderDetails.phone}
                label='Phone number'
                variant='outlined'
              />
            </Collapse>
            <FormControlLabel
              value='Invoice'
              control={<Radio />}
              label='Invoice'
            />
            <Collapse className={classes.inputWrapper} in={showInvoice}>
              <FormControl component='fieldset'>
                <RadioGroup
                  name='invoice'
                  value={invoiceValue}
                  onChange={handleInvoiceChange}
                >
                  <FormControlLabel
                    value='home'
                    control={<Radio />}
                    label='Send invoice to home address'
                  />
                  <FormControlLabel
                    value='other'
                    control={<Radio />}
                    label='Send invoice to another address'
                  />
                </RadioGroup>
              </FormControl>
              <Collapse className={classes.inputWrapper} in={showHomeAddress}>
                <div>
                  <TextField
                    value={order.orderDetails.name}
                    label='Name'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    style={{ minWidth: "300px" }}
                    value={order.orderDetails.street}
                    label='Street'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    value={order.orderDetails.postal}
                    label='Postal code'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    value={order.orderDetails.city}
                    label='City'
                    variant='outlined'
                    className={classes.inputField}
                  />
                </div>
              </Collapse>
              <Collapse className={classes.inputWrapper} in={showOtherAddress}>
                <div>
                  <TextField
                    label='Name'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    style={{ minWidth: "300px" }}
                    label='Address'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    label='Postal code'
                    variant='outlined'
                    className={classes.inputField}
                  />
                  <TextField
                    label='City'
                    variant='outlined'
                    className={classes.inputField}
                  />
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
