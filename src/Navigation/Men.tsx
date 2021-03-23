import ProductGrid from "../Components/ProductGrid";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { ProductsContext, Product } from "../Context/ProductListContext";
import { useContext } from "react";

function MensProducts() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  const mensProducts = products.filter(
    (product: Product) => product.category === "Mens clothing"
  );

  return (
    <div>
      <Hero
        label="Bhagwan Yoga"
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
