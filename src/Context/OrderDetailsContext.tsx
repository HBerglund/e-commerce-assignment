import { createContext, FC, useState, ChangeEvent, useContext } from "react";
import { CartItem, ShoppingCartContext } from "./ShoppingCartContext";

export interface OrderDetails {
  products: CartItem[];
  name: string;
  phone: string;
  email: string;
  street: string;
  postal: string;
  city: string;
  country: string;
  deliveryOption: string;
  paymentOption: string;
}

interface OrderDetailsValue {
  orderDetails: OrderDetails;
  setNewOrderDetails: (e: ChangeEvent<HTMLInputElement>) => void;
  getShippingPrice: (delivery: string) => number;
}

export const OrderDetailsContext = createContext<OrderDetailsValue>({
  orderDetails: {
    products: [],
    name: "",
    phone: "",
    email: "",
    street: "",
    postal: "",
    city: "",
    country: "",
    deliveryOption: "",
    paymentOption: "",
  },
  setNewOrderDetails: (e: ChangeEvent<HTMLInputElement>) => {},
  getShippingPrice: (delivery: string) => 0,
});

const OrderDetailsProvider: FC<{}> = ({ children }) => {
  const cart = useContext(ShoppingCartContext);
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    products: cart.cart,
    name: "",
    phone: "",
    email: "",
    street: "",
    postal: "",
    city: "",
    country: "",
    deliveryOption: "",
    paymentOption: "",
  });

  const setNewOrderDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: value,
    });
  };

  console.log(orderDetails);

  const getShippingPrice = (delivery: string): number => {
    switch (delivery) {
      case "DHL":
        return 0;

      case "Postnord":
        return 4.99;

      case "Bring":
        return 9.99;

      default:
        return 0;
    }
  };

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
        setNewOrderDetails,
        getShippingPrice,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
