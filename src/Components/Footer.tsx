import {
  createStyles,
  Hidden,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import Section from "./Section";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";

function Footer() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        padding: matchesSm ? 0 : "2rem",
        backgroundColor: "#19181a",
        color: "white",
      },
      flexColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      },
      wrapper: {
        display: "flex",
      },
      sentence: {
        width: "60%",
      },
      linksWrapper: {
        width: "100%",
        margin: matchesSm ? "0 5rem" : "0",
        display: "flex",
        justifyContent: "space-evenly",
      },
      links: {
        color: "white",
        padding: ".3rem 0",
      },
    })
  );
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section>
        <div className={classes.wrapper}>
          <Hidden xsDown>
            <div className={classes.sentence}>
              <Typography component="h4" variant="h5">
                Bhagwan Yoga provides you with the latest yoga equipment
                available...
              </Typography>
            </div>
          </Hidden>
          <div className={classes.linksWrapper}>
            <div className={classes.flexColumn}>
              <Typography component="h4" variant="h5" gutterBottom>
                Menu
              </Typography>
              {routes.map(({ name, path }) => {
                if (name !== "Men" && name !== "Women" && name !== "Checkout") {
                  return (
                    <Link className={classes.links} key={name} to={path}>
                      {name}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
            <div className={classes.flexColumn}>
              <Typography component="h4" variant="h5">
                Categories
              </Typography>
              {routes.map(({ name, path }) => {
                if (name === "Men" || name === "Women") {
                  return (
                    <Link className={classes.links} key={name} to={path}>
                      {name}
                    </Link>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Footer;
