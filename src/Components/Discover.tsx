import React from "react";
import {
  Button,
  Typography,
  useTheme,
  useMediaQuery,
  makeStyles,
  createStyles,
  Box,
} from "@material-ui/core";
import Section from "./Section";

const img1: string =
  "https://images.pexels.com/photos/2647471/pexels-photo-2647471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

function Discover() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      topDiv: {
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      img1: {
        height: "300px",
      },
    })
  );

  const classes = useStyles();

  return (
    <Section>
      <div className={classes.topDiv}>
        <Box mb={2}>
          <Typography variant='h3' component='h2' gutterBottom>
            Discover our products
          </Typography>
          <Button variant='outlined'>Read More</Button>
        </Box>
        <img className={classes.img1} src={img1} />
      </div>
    </Section>
  );
}

export default Discover;
