import ProductGrid from "./ProductGrid";
import { Typography } from "@material-ui/core";
import Section from "./Section";
import { ProductsContext, Product } from "../Context/ProductListContext";
import { useContext } from "react";

function LatestSection() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  const latest = products.filter(
    (product: Product) =>
      product.id === "1" ||
      product.id === "2" ||
      product.id === "5" ||
      product.id === "7"
  );
  return (
    <Section>
      <Typography variant="h4" component="h2" gutterBottom>
        Latest products
      </Typography>
      <ProductGrid products={latest} />
    </Section>
  );
}

export default LatestSection;
