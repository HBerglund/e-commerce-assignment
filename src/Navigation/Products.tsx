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
let catArr: string[] = [];
for (const product of products) {
  catArr.push(product.category);
}
const categories: string[] = [...new Set(catArr)];

function Products() {
  const [filterValue, setFilterValue] = useState("");

  const handleFilterClick = (id: string) => {
    if (id) {
      filteredProducts = products.filter(
        (product: Product) => product.category === id
      );
    } else {
      filteredProducts = products;
    }
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
            handleFilterClick("");
          }}
        >
          All
        </Button>
        {categories.map((category) => (
          <Button
            onClick={() => {
              handleFilterClick(category);
            }}
          >
            {category}
          </Button>
        ))}
        <ProductGrid products={filteredProducts} />
      </Section>
    </div>
  );
}

export default Products;
