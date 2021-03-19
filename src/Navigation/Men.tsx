import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";

let products: Product[] = json.Sheet1;

function MensProducts() {
  const mensProducts = products.filter(
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
    </div>
  );
}

export default MensProducts;
