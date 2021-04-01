import ProductGrid from "../Components/ProductGrid";
import Section from "../Components/Section";
import Hero from "../Components/Hero";
import imageSources from "../assets/imageSources";
import { useContext, useEffect, useState } from "react";
import FilterButton from "../Components/FilterButton";
import { createStyles, makeStyles } from "@material-ui/core";
import { ProductsContext, Product } from "../Context/ProductListContext";

function Products() {
  const productsContext = useContext(ProductsContext);
  const [filteredProducts, setFilteredProducts] = useState(
    productsContext.list
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let catArr: string[] = [];
  for (const product of productsContext.list) {
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
      setFilteredProducts(
        productsContext.list.filter(
          (product: Product) => product.category === category
        )
      );
    } else {
      setFilteredProducts(productsContext.list);
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
              key={category}
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
