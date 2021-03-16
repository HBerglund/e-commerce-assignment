import {
  Box,
  Button,
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useRouteMatch } from "react-router-dom";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";

interface Params {
  id: string;
}

function ProductDetails() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        width: "100%",
        display: "flex",
        flexDirection: matchesMd ? "row" : "column",
      },
      productImage: {
        width: matchesMd ? "50%" : "100%",
        height: matchesMd ? "100%" : "450px" && matchesSm ? "450px" : "250px",
        objectFit: "cover",
      },
      infoContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        padding: matchesMd
          ? "4rem"
          : "2rem 0" && matchesSm
          ? "2rem 0"
          : "1rem 0",
      },
      helpContainer: {
        display: "flex",
        flexDirection: "column",
      },
    })
  );

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  const classes = useStyles();

  const products: Product[] = json.Sheet1;
  const match = useRouteMatch<Params>();
  const product: Product | undefined = products.find(
    (p: Product) => p.id === match.params.id
  );

  let prodArr: any = [];

  const handleButtonClick = () => {
    if (product) {
      const currentLS = localStorage.getItem("productsInCart");
      if (currentLS) {
        prodArr = JSON.parse(currentLS);
      }
      const newLS = [...prodArr, product.id];
      localStorage.setItem("productsInCart", JSON.stringify(newLS));
    }
  };

  if (!product) {
    return <div> Produkten du letar efter finns inte...</div>;
  }

  return (
    <Section>
      <Button startIcon={<ArrowBackIosIcon fontSize="small" />}>Go back</Button>
      <div className={classes.root}>
        <img
          className={classes.productImage}
          src={product.imgUrl}
          alt={product.name}
        />
        <Box className={classes.infoContainer}>
          <Box>
            <Typography variant="body1" component="h2" gutterBottom>
              {product.category}
            </Typography>
            <Typography variant="h4" component="h1" gutterBottom>
              {product.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              $ {product.price}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {product.description}
            </Typography>
            <Box>
              <Typography variant="body1" gutterBottom>
                Size
              </Typography>
            </Box>
            <Button onClick={handleButtonClick} variant="outlined">
              Add to cart
            </Button>
          </Box>
          <Box className={classes.helpContainer}>
            <Typography variant="body1" gutterBottom>
              Need help?
            </Typography>
            <Link to={"/faq"}>Visit our FAQ</Link>
            <Link to={"/faq"}>Contact Us</Link>
          </Box>
        </Box>
      </div>
    </Section>
  );
}

export default ProductDetails;
