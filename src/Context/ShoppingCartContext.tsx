import { cloneDeep, isEqual } from "lodash";
import { createContext, FC, useState, useEffect } from "react";

interface CartProduct {
  id: string;
  name: string;
  color?: string;
  size?: string;
  price: string;
  image: string;
}

export interface CartItem {
  quantity: number;
  product: CartProduct;
}

interface ShoppingCartValue {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

export const ShoppingCartContext = createContext<ShoppingCartValue>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

const ShoppingCartProvider: FC<{}> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    const clonedCart = cloneDeep(cart);

    const foundIndex = clonedCart.findIndex((p) =>
      isEqual(p.product, item.product)
    );

    if (foundIndex !== -1) {
      clonedCart[foundIndex].quantity += 1;
      setCart(clonedCart);
      return;
    }

    const updatedCart = [...clonedCart, item];
    setCart(updatedCart);
  };

  const removeFromCart = (item: CartItem) => {
    const clonedCart = cloneDeep(cart);
    const foundIndex = clonedCart.findIndex((p) =>
      isEqual(p.product, item.product)
    );
    const updatedCart = clonedCart.filter(
      (p) => clonedCart.indexOf(p) !== foundIndex
    );
    setCart(updatedCart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
