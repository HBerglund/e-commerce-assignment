import {
  Box,
  createStyles,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import ProductGrid from "../Components/ProductGrid";
import { useContext, useEffect } from "react";
import { ProductsContext, Product } from "../Context/ProductListContext";

function About() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getProducts = (
    products: Product[],
    fromIndex: number,
    toIndex: number
  ) => {
    if (products.length < 1) {
      return [];
    }
    const productsToReturn = [];
    for (let i = fromIndex; i <= toIndex; i++) {
      productsToReturn.push(products[i]);
    }
    return productsToReturn;
  };

  const firstProducts = getProducts(products, 0, 3);

  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
      alternatingContainer: {
        display: "flex",
        flexDirection: smUp ? "row" : "column",
        marginTop: "4rem",
      },
      alternatingContainerReverse: {
        display: "flex",
        flexDirection: smUp ? "row-reverse" : "column",
        marginBottom: "4rem",
      },

      alternatingImg: {
        width: smUp ? "50%" : "100%",
        objectFit: "cover",
        maxHeight: smUp ? "auto" : "300px",
      },
      alternatingContent: {
        width: mdUp ? "50%" : "100%",
        padding: mdUp ? "2rem" : "4rem" && smUp ? "2rem" : "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        placeContent: "center",
      },
      carouselSection: {
        backgroundColor: theme.palette.grey[300],
      },
    })
  );

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Hero
        bgImg={imageSources.aboutHero}
        label="About us"
        title="Our passion is yoga"
        lessHeight
      ></Hero>
      <Section>
        <Box className={classes.alternatingContainer}>
          <img
            className={classes.alternatingImg}
            src={imageSources.yogaGirl}
            alt="Yoga girl"
          />
          <Box className={classes.alternatingContent}>
            <Typography gutterBottom variant="h4" component="h3">
              High quality and always organic
            </Typography>
            <Typography variant="body1" component="span">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
        </Box>
        <Box className={classes.alternatingContainerReverse}>
          <img
            className={classes.alternatingImg}
            src={imageSources.mats}
            alt="Yoga girl"
          />

          <Box className={classes.alternatingContent}>
            <Typography gutterBottom variant="h4" component="h3">
              High quality and always organic
            </Typography>
            <Typography variant="body1" component="span" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Typography>
          </Box>
        </Box>
      </Section>
      <Box className={classes.carouselSection}>
        <Section>
          <Typography variant="h3" gutterBottom>
            Discover Our Yoga Essentials
          </Typography>
          <ProductGrid products={firstProducts} />
        </Section>
      </Box>
    </div>
  );
}

export default About;
