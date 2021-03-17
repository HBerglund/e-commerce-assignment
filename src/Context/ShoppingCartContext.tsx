import { createContext, FC, useEffect, useState } from "react";
import json from "../products";
import Product from "../productTypes";

export interface CartItem {
  amount: number;
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: string;
}

interface ShoppingCartValue {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartValue>({
  cart: [],
  addToCart: () => {},
});

const ShoppingCartProvider: FC<{}> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    const cartItem = {
      amount: item.amount,
      id: item.id,
      name: item.name,
      color: item.color,
      size: item.size,
      price: item.price,
    };

    const updatedCart = [...cart, cartItem];

    setCart(updatedCart);
  };

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
