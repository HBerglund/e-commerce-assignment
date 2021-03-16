import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { Typography } from "@material-ui/core";
import Footer from "../Components/Footer";

let products: Product[] = json.Sheet1;
let womensProducts = products;

function WomensProducts() {
  womensProducts = products.filter(
    (product: Product) => product.category === "Womens clothing"
  );

  return (
    <div>
      <Hero
        label='Bhagwan Yoga'
        title={`Women's clothing`}
        bgImg={imageSources.womensPageHero}
        center
      />
      <Section>
        <ProductGrid products={womensProducts} />
      </Section>
      <Footer />
    </div>
  );
}

export default WomensProducts;
