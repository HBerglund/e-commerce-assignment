import ProductGrid from "../Components/ProductGrid";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { useContext, useState } from "react";
import FilterButton from "../Components/FilterButton";
import { createStyles, makeStyles } from "@material-ui/core";
import { ProductsContext, Product } from "../Context/ProductListContext";

function Products() {
  const productsContext = useContext(ProductsContext);
  const products: Product[] = productsContext.list;

  let filteredProducts = products;
  let catArr: string[] = [];
  for (const product of products) {
    catArr.push(product.category);
  }
  const categories: string[] = [...new Set(catArr)];

  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
      flexWrapper: {
        display: "flex",
        marginBottom: "1rem",
      },
    })
  );
  const classes = useStyles();
  const [activeCategory, setActiveCategory] = useState("All");

  const handleActivePage = (category: string) => {
    if (category !== "All") {
      filteredProducts = products.filter(
        (product: Product) => product.category === category
      );
    } else {
      filteredProducts = products;
    }
    setActiveCategory(category);
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
        <div className={classes.flexWrapper}>
          <FilterButton
            category="All"
            activePage={activeCategory}
            onActiveCategoryClick={handleActivePage}
          />
          {categories.map((category) => (
            <FilterButton
              category={category}
              activePage={activeCategory}
              onActiveCategoryClick={handleActivePage}
            />
          ))}
        </div>
        <ProductGrid products={filteredProducts} />
      </Section>
    </div>
  );
}

export default Products;
