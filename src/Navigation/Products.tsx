import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import { Typography } from "@material-ui/core";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";

const allProducts: Product[] = json.Sheet1;

function Products() {
  return (
    <div>
      <Hero
        label="Bhagwan Yoga"
        title="Explore our products"
        bgImg={imageSources.productsPageHero}
        center
      />
      <Section>
        <ProductGrid products={allProducts} />
      </Section>
    </div>
  );
}

export default Products;
