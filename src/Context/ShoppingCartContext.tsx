import { createContext, FC, useState, useEffect } from "react";

export interface CartItem {
  quantity: number;
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
  console.log(cart);

  useEffect(() => {
    let currentCart: any = localStorage.getItem("cart");
    if (currentCart) {
      currentCart = JSON.parse(currentCart);
    } else {
      currentCart = cart;
    }
    setCart(currentCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addToCart = (item: CartItem) => {
    const cartItem = {
      quantity: item.quantity,
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
