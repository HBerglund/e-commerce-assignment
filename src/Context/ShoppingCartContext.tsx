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
  totalPrice: number;
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  emptyCart: () => void;
}

export const ShoppingCartContext = createContext<ShoppingCartValue>({
  cart: [],
  totalPrice: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  emptyCart: () => {},
});

const ShoppingCartProvider: FC<{}> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );

  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(getTotalPrice());
  }, [cart]);

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

  const emptyCart = () => {
    const emptyCart: CartItem[] = [];
    setCart(emptyCart);
  };

  const getTotalPrice = () => {
    let price = 0;
    if (cart.length) {
      for (let i = 0; i < cart.length; i++) {
        price += parseFloat(cart[i].product.price) * cart[i].quantity;
      }
      return Number(price.toFixed(2));
    }
    return 0;
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        totalPrice,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
