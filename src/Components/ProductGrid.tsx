import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import json from "../products";

interface Product {
  name: string;
  imgUrl: string;
  price: string;
  id: string;
}

function ProductGrid() {
  console.log(json.Sheet1);
  const products: Product[] = json.Sheet1;
  const latest = products.filter(
    (product: Product) =>
      product.id === "1" ||
      product.id === "17" ||
      product.id === "33" ||
      product.id === "35"
  );
  console.log(latest);

  return (
    <Grid container spacing={4}>
      {latest.map((product: Product) => (
        <ProductCard
          name={product.name}
          imgUrl={product.imgUrl}
          price={product.price}
        />
      ))}
    </Grid>
  );
}

export default ProductGrid;
