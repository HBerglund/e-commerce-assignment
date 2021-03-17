import { createContext, FC, useState } from "react";
import json from "../products";
import Product from "../productTypes";

interface ShoppingCartValue {
  cart: Product[];
  addToCart: (product: Product) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartValue>({
  cart: [],
  addToCart: () => {},
});

const ShoppingCartProvider: FC<{}> = ({ children }) => {
  const exampleProduct: Product[] = json.Sheet1;
  const [cart, setCart] = useState<Product[]>(exampleProduct);
  const addToCart = (product: Product) => {};

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
