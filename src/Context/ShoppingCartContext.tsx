import { merge } from "lodash";
import { createContext, FC, useState, useEffect } from "react";

export interface CartItem {
  quantity: number;
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: string;
  image: string;
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
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const foundIndex = cart.findIndex(
      (p) => p.id === item.id && p.color === item.color && p.size === item.size
    );

    if (foundIndex !== -1) {
      cart[foundIndex].quantity += 1;
      const localStorageCart = [...cart];
      localStorage.setItem("cart", JSON.stringify(localStorageCart));
      return;
    }

    const clonedCart = merge(item, cart);

    setCart(clonedCart);
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
