import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Section from "./Section";

interface Props {
  label: string;
  title: string;
  bgImg: string;
  center?: boolean;
}

function Hero(props: Props) {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: props.center ? "center" : "start",
        textAlign: props.center ? "center" : "left",
        height: "60vh",
        width: "100%",
        backgroundImage: `url(${props.bgImg})`,
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
        width: "100%",
      },
      label: {
        color: "white",
        opacity: "0.8",
        textTransform: "uppercase",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <Typography className={classes.label} gutterBottom>
          {props.label}
        </Typography>
        <Typography
          className={classes.heading}
          component="h1"
          variant="h2"
          gutterBottom
        >
          {props.title}
        </Typography>
      </Section>
    </div>
  );
}

export default Hero;
