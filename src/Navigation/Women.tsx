import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";

let products: Product[] = json.Sheet1;
let filteredProducts = products;

function WomensProduct() {
  filteredProducts = products.filter(
    (product: Product) => product.category === "Womens clothing"
  );

  return (
    <div>
      <Hero
        label='Bhagwan Yoga'
        title='Womens products'
        bgImg={imageSources.womensPageHero}
        center
      />
      <Section>
        <ProductGrid products={filteredProducts} />
      </Section>
    </div>
  );
}

export default WomensProduct;
