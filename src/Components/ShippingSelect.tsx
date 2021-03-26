import { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { Typography } from "@material-ui/core";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";

function ShippingSelect() {
  const order = useContext(OrderDetailsContext);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Delivery options</FormLabel>
      <RadioGroup
        aria-label="vendor"
        name="deliveryOption"
        onChange={order.setNewOrderDetails}
      >
        <FormControlLabel value="DHL" control={<Radio />} label="DHL" />
        <Typography>Delivery time: 6-10 business days</Typography>
        <Typography>Free shipping</Typography>
        <FormControlLabel
          value="Postnord"
          control={<Radio />}
          label="Postnord"
        />
        <Typography>Delivery time: 3-5 business days</Typography>
        <Typography>$4.99</Typography>

        <FormControlLabel value="Bring" control={<Radio />} label="Bring" />
        <Typography>Delivery time: 1-3 business days</Typography>
        <Typography>$9.99</Typography>
      </RadioGroup>
    </FormControl>
  );
}

export default ShippingSelect;
