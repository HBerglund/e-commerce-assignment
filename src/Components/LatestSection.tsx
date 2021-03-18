import ProductGrid from "./ProductGrid";
import json from "../products";
import Product from "../productTypes";
import { Typography } from "@material-ui/core";
import Section from "./Section";

const products: Product[] = json.Sheet1;

const latest = products.filter(
  (product: Product) =>
    product.id === "1" ||
    product.id === "2" ||
    product.id === "5" ||
    product.id === "7"
);

function LatestSection() {
  return (
    <Section>
      <Typography variant="h3" component="h2" gutterBottom>
        Latest products
      </Typography>
      <ProductGrid products={latest} />
    </Section>
  );
}

export default LatestSection;
