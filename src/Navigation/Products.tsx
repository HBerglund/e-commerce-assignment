import ProductGrid from "../Components/ProductGrid";
import json from "../products";
import Product from "../productTypes";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { Button } from "@material-ui/core";
import { useEffect, useState } from "react";

let products: Product[] = json.Sheet1;
let filteredProducts = products;

// const latest = products.filter(
//   (product: Product) =>
//     product.id === "1" ||
//     product.id === "17" ||
//     product.id === "33" ||
//     product.id === "35"
// );

function Products() {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterClick = (id: string) => {
    filteredProducts = products.filter(
      (product: Product) => product.category === id
    );
    setFilterValue(id);
  };

  return (
    <div>
      <Hero
        label="Bhagwan Yoga"
        title="Explore our products"
        bgImg={imageSources.productsPageHero}
        center
      />
      <Section>
        <Button
          onClick={() => {
            handleFilterClick("Yoga mats");
          }}
        >
          Yoga Mats
        </Button>
        <Button
          onClick={() => {
            handleFilterClick("Meditation");
          }}
        >
          Meditation
        </Button>
        <Button
          onClick={() => {
            handleFilterClick("Incense");
          }}
        >
          Incense
        </Button>
        <ProductGrid products={filteredProducts} />
      </Section>
    </div>
  );
}

export default Products;
