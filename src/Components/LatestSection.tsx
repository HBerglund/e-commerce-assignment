import ProductGrid from "./ProductGrid";
import json from "../products";
import ProductTypes from "../productTypes";
import { Typography } from "@material-ui/core";
import Section from "./Section";

const products: any = json.Sheet1;

const latest = products.filter(
  (product: ProductTypes) =>
    product.id === "1" ||
    product.id === "17" ||
    product.id === "33" ||
    product.id === "35"
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
