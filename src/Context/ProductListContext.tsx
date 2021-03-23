import { createContext, FC, useState, useEffect } from "react";
import json from "../products";

export interface Product {
  id: string;
  category: string;
  name: string;
  fabric?: string;
  colorProps: Array<{ img: string; color: string }>;
  sizeProps: Array<{ size: string; price: string }>;
  description: string;
}

interface ProductsValue {
  list: Product[];
}

export const ProductsContext = createContext<ProductsValue>({
  list: [],
});

const ProductsProvider: FC<{}> = ({ children }) => {
  const [list, setList] = useState<Product[]>(json.Sheet1);

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(list));
  }, [list]);

  return (
    <ProductsContext.Provider
      value={{
        list,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
