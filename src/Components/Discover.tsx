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
import imageSources from "../assets/imageSources";
import { Link } from "react-router-dom";

function Discover() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      topDiv: {
        width: "100%",
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
        justifyContent: "space-between",
        alignItems: matchesMd ? "center" : "start",
      },
      bottomDiv: {
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: matchesMd ? "row" : "column-reverse",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "2rem",
      },
      quote: {
        maxWidth: "500px",
        textAlign: "left",
        margin: matchesMd ? "2rem 0 2rem 2rem" : 0,
        padding: matchesMd ? 0 : "3rem",
        fontSize: "1rem",
        fontStyle: "italic",
      },
      img1: {
        objectFit: "cover",
        width: matchesMd ? "50%" : "100%",
      },
      imgsDiv: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: matchesSm ? "row" : "column",
        width: matchesMd ? "50%" : "100%",
      },
      img2: {
        objectFit: "cover",
        width: matchesSm ? "48%" : "100%",
        maxHeight: "250px",
        marginTop: "1rem",
      },
      img3: {
        objectFit: "cover",
        width: matchesSm ? "48%" : "100%",
        maxHeight: "250px",
        marginTop: "1rem",
      },
    })
  );

  const classes = useStyles();

  return (
    <Section>
      <div className={classes.topDiv}>
        <Box mb={2}>
          <Typography variant="h4" component="h2" gutterBottom>
            Discover our products
          </Typography>

          <Button component={Link} to="/about" variant="outlined">
            Read More
          </Button>
        </Box>
        <img className={classes.img1} alt="" src={imageSources.discover1} />
      </div>
      <div className={classes.bottomDiv}>
        <div className={classes.imgsDiv} style={{ display: "flex" }}>
          <img className={classes.img2} alt="" src={imageSources.discover2} />
          <img className={classes.img3} alt="" src={imageSources.discover3} />
        </div>
        <Box>
          <div className={classes.quote}>
            <Typography variant="body1" gutterBottom>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Praesentium ad aut nihil enim amet optio commodi, quis corrupti
              omnis dicta!"
            </Typography>
          </div>
        </Box>
      </div>
    </Section>
  );
}

export default Discover;
