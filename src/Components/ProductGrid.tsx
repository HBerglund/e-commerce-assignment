import { Grid, makeStyles, createStyles, Typography } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { Product } from "../Context/ProductListContext";

interface Props {
  products: Product[];
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "100%",
      flex: 1,
    },
  })
);

function ProductGrid(props: Props) {
  const classes = useStyles();

  if (props.products.length > 0) {
    return (
      <div className={classes.root}>
        <Grid container spacing={4}>
          {props.products.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              imgUrl={product.colorProps[0].img}
              price={product.sizeProps[0].price}
            />
          ))}
        </Grid>
      </div>
    );
  } else {
    return (
      <div>
        <Typography>No products available, please come again.</Typography>
      </div>
    );
  }
}

export default ProductGrid;
