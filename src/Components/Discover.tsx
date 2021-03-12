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
  "https://images.unsplash.com/photo-1489659639091-8b687bc4386e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHlvZ2F8ZW58MHwwfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
const img3: string =
  "https://images.unsplash.com/photo-1594056113573-f8faae5ac78e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fHlvZ2F8ZW58MHwyfDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";

function Discover() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.up("xs"));
  const matchesXsDown = useMediaQuery(theme.breakpoints.down("xs"));

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
        marginTop: "2rem",
      },
      paragraph: {
        maxWidth: "500px",
        textAlign: "left",
        margin: "2rem 0 2rem 2rem",
      },
      img1: {
        width: matchesSm ? "500px" : "400px",
        maxWidth: matchesXsDown ? "325px" : "500px",
      },
      imgsDiv: {
        flexDirection: matchesSm ? "row" : "column",
      },
      img2: {
        width: matchesXs ? "240px" : "50px",
        margin: "10px",
      },
      img3: {
        width: matchesXs ? "240px" : "50px",
        margin: "10px",
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
        <div className={classes.imgsDiv} style={{ display: "flex" }}>
          <img className={classes.img2} src={img2} />
          <img className={classes.img3} src={img3} />
        </div>
        <Box>
          <div className={classes.paragraph}>
            <Typography variant='body1' gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium ad aut nihil enim amet optio commodi, quis corrupti
              omnis dicta!
            </Typography>
          </div>
        </Box>
      </div>
    </Section>
  );
}

export default Discover;
