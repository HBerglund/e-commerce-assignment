import { cloneDeep, isEqual } from "lodash";
import { parse } from "node:url";
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
  deleteColor: (product: Product, color: string) => void;
  deleteSize: (product: Product, size: string) => void;
  editProductName: (product: Product, name: string) => void;
  editProductDesc: (product: Product, description: string) => void;
  addNewProduct: (product: Product) => void;
}

export const ProductsContext = createContext<ProductsValue>({
  list: [],
  deleteProduct: () => {},
  deleteColor: () => {},
  deleteSize: () => {},
  editProductName: () => {},
  editProductDesc: () => {},
  addNewProduct: () => {},
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
    if (clonedList.length === 1) {
      setList([]);
      return;
    }

    const updatedList = clonedList.filter(
      (p) => clonedList.indexOf(p) !== foundIndex
    );
    setList(updatedList);
  };

  const deleteColor = (product: Product, color: string) => {
    const clonedList = cloneDeep(list);
    const productIndex = clonedList.findIndex((p) => isEqual(p, product));
    if (clonedList[productIndex].colorProps.length === 1) {
      alert("Product needs to have color props");
      return;
    }
    const colorIndex = clonedList[productIndex].colorProps.findIndex(
      (c) => c.color === color
    );

    clonedList[productIndex].colorProps.splice(colorIndex, 1);
    setList(clonedList);
  };

  const deleteSize = (product: Product, size: string) => {
    const clonedList = cloneDeep(list);
    const productIndex = clonedList.findIndex((p) => isEqual(p, product));
    if (clonedList[productIndex].sizeProps.length === 1) {
      alert("Product needs to have size props");
      return;
    }

    const sizeIndex = clonedList[productIndex].sizeProps.findIndex(
      (p) => p.size === size
    );

    clonedList[productIndex].sizeProps.splice(sizeIndex, 1);
    setList(clonedList);
  };

  const editProductName = (product: Product, name: string) => {
    const clonedList = cloneDeep(list);
    const productIndex = clonedList.findIndex((p) => isEqual(p, product));
    clonedList[productIndex].name = name;
    setList(clonedList);
  };

  const editProductDesc = (product: Product, description: string) => {
    const clonedList = cloneDeep(list);
    const productIndex = clonedList.findIndex((p) => isEqual(p, product));
    clonedList[productIndex].description = description;
    setList(clonedList);
  };

  const addNewProduct = (product: Product) => {
    const clonedList = cloneDeep(list);
    setList([...clonedList, product]);
  };

  return (
    <ProductsContext.Provider
      value={{
        list,
        deleteProduct,
        deleteColor,
        deleteSize,
        editProductName,
        editProductDesc,
        addNewProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
