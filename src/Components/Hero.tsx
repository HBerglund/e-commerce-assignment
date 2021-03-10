import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";
import bgImage from "../assets/hero-img.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "start",
      height: "60vh",
      width: "100%",
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "bottom",
      padding: "4rem",
    },
    button: {
      border: "1.5px solid white",
      color: "white",
      fontWeight: "bold",
    },
    heading: {
      color: "white",
      fontWeight: "bold",
      maxWidth: "50%",
    },
    label: {
      color: "white",
      opacity: "0.8",
      textTransform: "uppercase",
    },
  })
);

function Hero() {
  const classes = useStyles();

  return (
    <Paper variant="outlined" className={classes.root}>
      <Typography className={classes.label} gutterBottom>
        Bhagwan yoga
      </Typography>
      <Typography
        className={classes.heading}
        component="h1"
        variant="h2"
        gutterBottom
      >
        Yoga essentials for everyone
      </Typography>
      <Button size="large" className={classes.button} variant="outlined">
        Shop now
      </Button>
    </Paper>
  );
}

export default Hero;
