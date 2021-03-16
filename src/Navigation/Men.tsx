import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { Typography } from "@material-ui/core";
import Footer from "../Components/Footer";


let products: Product[] = json.Sheet1;
let mensProducts = products;

function MensProducts() {
  mensProducts = products.filter(
    (product: Product) => product.category === "Mens clothing"
  );

  return (
    <div>
      <Hero
        label='Bhagwan Yoga'
        title={`Men's clothing`}
        bgImg={imageSources.mensPageHero}
        center
      />
      <Section>
        <ProductGrid products={mensProducts} />
      </Section>
      <Footer />
    </div>
  );
}

export default MensProducts;
