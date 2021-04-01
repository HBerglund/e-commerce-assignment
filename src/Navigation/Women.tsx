import ProductGrid from "../Components/ProductGrid";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { useContext, useEffect } from "react";
import { ProductsContext, Product } from "../Context/ProductListContext";

function WomensProducts() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const womensProducts = products.filter(
    (product: Product) => product.category === "Womens clothing"
  );

  return (
    <div>
      <Hero
        label="Bhagwan Yoga"
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
