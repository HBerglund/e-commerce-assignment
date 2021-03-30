import { ChangeEvent, useContext, useEffect, useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import {
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";

function ShippingSelect() {
  const order = useContext(OrderDetailsContext);

  const [deliveryValue, setDeliveryValue] = useState("");

  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      flexWrapper: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        flexDirection: matchesSm ? "row" : "column",
      },
      vertical: {
        display: "flex",
        flexDirection: "column",
      },
    })
  );

  const classes = useStyles();

  useEffect(() => {
    switch (deliveryValue) {
      case "DHL":
        setDeliveryValue("DHL");
        break;
      case "Postnord":
        setDeliveryValue("Postnord");
        break;
      case "Bring":
        setDeliveryValue("Bring");
        break;
    }
  }, [deliveryValue]);

  const handleDeliveryOption = (e: ChangeEvent<HTMLInputElement>) => {
    order.setNewOrderDetails(e);
  };

  return (
    <FormControl style={{ width: "100%" }} component="fieldset">
      <Typography>Delivery options</Typography>
      <RadioGroup
        aria-label="vendor"
        name="deliveryOption"
        onChange={handleDeliveryOption}
      >
        <div className={classes.flexWrapper}>
          <div className={classes.vertical}>
            <FormControlLabel value="DHL" control={<Radio />} label="DHL" />
            <Typography>Delivery in 6-10 business days</Typography>
            <Typography>Free shipping</Typography>
          </div>
          <div className={classes.vertical}>
            <FormControlLabel
              value="Postnord"
              control={<Radio />}
              label="Postnord"
            />
            <Typography>Delivery in 3-5 business days</Typography>
            <Typography>$4.99</Typography>
          </div>
          <div className={classes.vertical}>
            <FormControlLabel value="Bring" control={<Radio />} label="Bring" />
            <Typography>Delivery in 1-3 business days</Typography>
            <Typography>$9.99</Typography>
          </div>
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default ShippingSelect;
