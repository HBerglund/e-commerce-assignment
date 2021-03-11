import React from "react";
import { Typography } from "@material-ui/core";
import { useRouteMatch } from "react-router-dom";
import json from "../products";
import Product from "../productTypes";

interface Params {
  id: string;
}

function ProductDetails() {
  const products: Product[] = json.Sheet1;
  const match = useRouteMatch<Params>();
  const product: Product | undefined = products.find(
    (p: Product) => p.id === match.params.id
  );

  // useEffect(() => {
  //   fetch('/api/products/' + match.params.id)
  // }, [])

  if (!product) {
    return <div> Produkten du letar efter finns inte...</div>;
  }

  return <Typography variant="h1">{product.name}</Typography>;
}

export default ProductDetails;
