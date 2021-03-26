import classes from "*.module.css";
import { makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";
import ShippingSelect from "./ShippingSelect";

function ShippingDetails() {
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
        <TextField label="Name" />
        <TextField label="Phone number" />
        <TextField label="Email" />
      </div>
      <div className={classes.flexColumn} style={{ margin: "1rem 0" }}>
        <Typography>Adress</Typography>
        <TextField label="Street name" />
        <TextField label="Postal code" />
        <TextField label="City" />
        <TextField label="Country" />
      </div>
      <div style={{ margin: "1rem" }}>
        <ShippingSelect />
      </div>
    </div>
  );
}

export default ShippingDetails;
