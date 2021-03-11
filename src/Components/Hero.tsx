import {
  Button,
  createStyles,
  makeStyles,
  Typography,
} from "@material-ui/core";
import bgImage from "../assets/hero-img.jpg";
import Section from "./Section";

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
    },
    button: {
      border: "1.5px solid white",
      color: "white",
      fontWeight: "bold",
    },
    heading: {
      color: "white",
      fontWeight: "bold",
      maxWidth: "60%",
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
    <div className={classes.root}>
      <Section>
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
      </Section>
    </div>
  );
}

export default Hero;
