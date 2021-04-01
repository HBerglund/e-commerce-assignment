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
  orderIsValidated: boolean;
  validateOrder: (validated: boolean) => void;
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
  orderIsValidated: false,
  validateOrder: (validated: boolean) => {},
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

  const [orderIsValidated, setOrderIsValidated] = useState(false);

  const validateOrder = (validated: boolean) => {
    console.log("Validated" + orderIsValidated);
    setOrderIsValidated(validated);
  };

  const setNewOrderDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: value,
    });
  };

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

  console.log({ orderIsValidated });

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
        setNewOrderDetails,
        getShippingPrice,
        orderIsValidated,
        validateOrder,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
