import React from "react";
import { Typography } from "@material-ui/core";
import Hero from "../Components/Hero";
import ProductGrid from "../Components/ProductGrid";

function Home() {
  return (
    <div>
      <Hero />
      <ProductGrid />
    </div>
  );
}

export default Home;
