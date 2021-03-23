import { cloneDeep, isEqual } from "lodash";
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
  deleteProduct: (product: Product) => void;
}

export const ProductsContext = createContext<ProductsValue>({
  list: [],
  deleteProduct: () => {},
});

const getDefaultProducts = () => {
  const productsInLs = localStorage.getItem("productList");
  if (productsInLs) {
    return JSON.parse(productsInLs);
  } else {
    return json.Sheet1;
  }
};

const ProductsProvider: FC<{}> = ({ children }) => {
  const [list, setList] = useState<Product[]>(getDefaultProducts());

  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(list));
  }, [list]);

  const deleteProduct = (product: Product) => {
    const clonedList = cloneDeep(list);
    const foundIndex = clonedList.findIndex((p) => isEqual(p, product));
    const updatedList = clonedList.filter(
      (p) => clonedList.indexOf(p) !== foundIndex
    );
    setList(updatedList);
  };

  return (
    <ProductsContext.Provider
      value={{
        list,
        deleteProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
