import { createStyles, makeStyles, Typography } from "@material-ui/core";
import Section from "./Section";

interface Props {
  label: string;
  title: string;
  bgImg: string;
  center?: boolean;
  lessHeight?: boolean;
}

function Hero(props: Props) {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: props.center ? "center" : "start",
        textAlign: props.center ? "center" : "left",
        height: props.lessHeight ? "40vh" : "60vh",
        width: "100%",
        backgroundImage: `url(${props.bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: props.lessHeight ? "top" : "bottom",
      },
      button: {
        border: "1.5px solid white",
        color: "white",
        fontWeight: "bold",
      },
      heading: {
        color: "white",
        fontWeight: "bold",
        maxWidth: "800px",
      },
      label: {
        color: "white",
        opacity: "0.8",
        textTransform: "uppercase",
      },
      contentWrapper: {
        position: "relative",
        zIndex: 5,
      },
      overlay: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.3)",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.overlay}></div>
      <Section>
        <div className={classes.contentWrapper}>
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
        </div>
      </Section>
    </div>
  );
}

export default Hero;
