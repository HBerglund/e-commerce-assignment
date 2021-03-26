import {
  Button,
  Collapse,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useContext, useState } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";
import ShippingSelect from "./ShippingSelect";

function PaymentDetails() {
  const order = useContext(OrderDetailsContext);
  const [showCard, setShowCard] = useState<boolean>(false);
  const [showSwish, setShowSwish] = useState<boolean>(false);
  const [showInvoice, setShowInvoice] = useState<boolean>(false);
  const [showOtherAddress, setShowOtherAddress] = useState<boolean>(false);

  const useStyles = makeStyles({
    root: {
      display: "flex",
      flexDirection: "column",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button onClick={() => setShowCard((prev) => !prev)}>
          Pay with card
        </Button>
        <Collapse in={showCard}>
          <TextField label="Card name holder" variant="outlined" />
          <TextField label="Card number" variant="outlined" />
          <TextField label="Y/M" variant="outlined" />
          <TextField label="CCV" variant="outlined" />
          <Button variant="outlined">Validate</Button>
        </Collapse>
      </div>
      <div>
        <Button onClick={() => setShowSwish((prev) => !prev)}>
          Pay with Swish
        </Button>
        <Collapse in={showSwish}>
          <TextField label="Name" variant="outlined" />
          <TextField label="Phone number" variant="outlined" />
          <Button>Validate</Button>
        </Collapse>
      </div>
      <div>
        <Button onClick={() => setShowInvoice((prev) => !prev)}>
          Pay with invoice
        </Button>
        <Collapse in={showInvoice}>
          <Button onClick={() => setShowOtherAddress(false)}>
            Send invoice to home address
          </Button>
          <Button onClick={() => setShowOtherAddress((prev) => !prev)}>
            Send invoice to other address
          </Button>
          <Collapse in={showOtherAddress}>
            <div>
              <TextField label="Name" variant="outlined" />
              <TextField label="Address" variant="outlined" />
              <TextField label="Postal code" variant="outlined" />
              <TextField label="City" variant="outlined" />
            </div>
          </Collapse>
        </Collapse>
      </div>
    </div>
  );
}

export default PaymentDetails;
