import { Grid, makeStyles, createStyles } from "@material-ui/core";
import ProductCard from "./ProductCard";
import Product from "../productTypes";

interface Props {
  products: Product[];
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    img: {
      height: "350px",
    },
  })
);

function ProductGrid(props: Props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        {props.products.map((product: Product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imgUrl={product.imgUrl}
            price={product.price}
          />
        ))}
      </Grid>
    </div>
  );
}

export default ProductGrid;
