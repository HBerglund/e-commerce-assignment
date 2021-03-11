import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  makeStyles,
  createStyles,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";

interface Props {
  name?: string;
  imgUrl?: string;
  price?: string;
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    img: {
      height: "350px",
      width: "100%",
      marginBottom: "2rem",
    },
  })
);

function ProductCard(props: Props) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  return (
    <Grid item xs={matchesMd ? 3 : 6 && matchesSm ? 6 : 12}>
      <Link to="/products">
        <Card>
          <CardContent>
            <CardMedia
              className={classes.img}
              title={props.name}
              image={props.imgUrl}
            ></CardMedia>
            <Typography variant="h6" gutterBottom>
              {props.name}
            </Typography>
            <Typography color="textSecondary" variant="body2">
              $ {props.price}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}

export default ProductCard;
