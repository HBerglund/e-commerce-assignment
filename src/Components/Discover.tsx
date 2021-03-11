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
const img2: string =
  "https://images.pexels.com/photos/6037908/pexels-photo-6037908.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
const img3: string =
  "https://images.pexels.com/photos/4614183/pexels-photo-4614183.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

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
      bottomDiv: {
        display: "flex",
        flexDirection: matchesMd ? "row" : "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
      },
      img1: {
        height: "300px",
      },
      img2: {
        height: "250px",
        marginRight: "1rem",
      },
      img3: {
        height: "250px",
        marginRight: "1rem",
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
      <div className={classes.bottomDiv}>
        <div>
          <img className={classes.img2} src={img2} />
          <img className={classes.img3} src={img3} />
        </div>
        <Box>
          <Typography variant='body1' gutterBottom>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
            fugiat!
          </Typography>
        </Box>
      </div>
    </Section>
  );
}

export default Discover;
