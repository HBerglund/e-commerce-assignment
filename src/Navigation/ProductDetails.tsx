import {
  Box,
  Button,
  createStyles,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Section from "../Components/Section";
import { useContext, useState } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";
import { ProductsContext, Product } from "../Context/ProductListContext";

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
        marginTop: "4rem",
      },
      propsContainer: {
        margin: "1rem 0",
      },
      goBack: {
        margin: "0 -4rem 1rem 0",
      },
      addToCart: {
        marginTop: "1rem",
      },
    })
  );

  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));
  const classes = useStyles();

  const cart = useContext(ShoppingCartContext);
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  const match = useRouteMatch<Params>();
  const product: Product | undefined = products.find(
    (p: Product) => p.id === match.params.id
  );

  const [selectedProps, setSelectedProps] = useState({
    price: product ? product.sizeProps[0].price : "",
    size: product ? product.sizeProps[0].size : "",
    img: product
      ? product.colorProps[0].img
      : "https://images.unsplash.com/photo-1532630571098-79a3d222b00d",
    color: product ? product.colorProps[0].color : "",
  });

  const getSelectedColor = (color: string) => {
    switch (color) {
      case "Blueberry Blue": {
        return "#5a6fa4";
      }
      case "Moss Green": {
        return "#78A5AB";
      }
      case "Heather Pink": {
        return "#E0C5D4";
      }
      case "Silver Grey": {
        return "#D5DADE";
      }
      case "Birch White": {
        return "#E2E2E2";
      }
    }
  };

  const handleAddToCartClick = () => {
    if (product) {
      cart.add({
        quantity: 1,
        product: {
          id: product.id,
          name: product.name,
          color: selectedProps.color,
          size: selectedProps.size,
          price: selectedProps.price,
          image: selectedProps.img,
        },
      });
    }
  };

  const history = useHistory();

  if (product) {
    return (
      <Section>
        <Button
          className={classes.goBack}
          onClick={history.goBack}
          startIcon={<ArrowBackIosIcon fontSize="small" />}
        >
          Go back
        </Button>
        <div className={classes.root}>
          <img
            className={classes.productImage}
            src={selectedProps.img}
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
              <Typography variant="h5" gutterBottom>
                $ {selectedProps.price}
              </Typography>
              <Typography
                style={{ margin: "1rem 0" }}
                variant="body1"
                gutterBottom
              >
                {product.description}
              </Typography>
              <Box className={classes.propsContainer}>
                <Typography variant="body2" gutterBottom>
                  Available sizes
                </Typography>
                {product.sizeProps.map(({ size, price }) => (
                  <Button
                    key={size}
                    style={{
                      opacity: selectedProps.size === size ? 1 : 0.4,
                    }}
                    onClick={() =>
                      setSelectedProps((prevState) => {
                        return { ...prevState, size: size, price: price };
                      })
                    }
                  >
                    {size}
                  </Button>
                ))}
              </Box>
              <Box className={classes.propsContainer}>
                <Typography variant="body2" gutterBottom>
                  Available colors
                </Typography>
                {product.colorProps.map(({ img, color }) => (
                  <IconButton
                    key={color}
                    style={{
                      opacity: selectedProps.color === color ? 1 : 0.3,
                      backgroundColor: getSelectedColor(color),
                      borderRadius: "50%",
                      height: "50px",
                      width: "50px",
                      marginRight: ".5rem",
                    }}
                    onClick={() =>
                      setSelectedProps((prevState) => {
                        return { ...prevState, img: img, color: color };
                      })
                    }
                  />
                ))}
              </Box>
              <Button
                className={classes.addToCart}
                onClick={handleAddToCartClick}
                variant="contained"
                color="primary"
                size="large"
              >
                Add to cart
              </Button>
            </Box>
            <Box className={classes.helpContainer}>
              <Typography variant="body2" gutterBottom>
                Need help?
              </Typography>
              <Button component={Link} style={{ color: "black" }} to={"/faq"}>
                Visit our FAQ
              </Button>
              <Button
                component={Link}
                style={{ color: "black" }}
                to={"/contact"}
              >
                Contact Us
              </Button>
            </Box>
          </Box>
        </div>
      </Section>
    );
  } else {
    return <div>Produkten du letar efter finns inte...</div>;
  }
}

export default ProductDetails;
