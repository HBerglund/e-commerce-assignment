import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";

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
    </div>
  );
}

export default WomensProducts;
