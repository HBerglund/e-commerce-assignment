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
  getDeliveryDay: (delivery: string) => string;
  emptyOrderDetails: () => void;
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
  getDeliveryDay: (delivery: string) => "",
  emptyOrderDetails: () => {},
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

  const getDeliveryDay = (delivery: string): string => {
    const dhlDate = new Date();
    const postnordDate = new Date();
    const bringDate = new Date();

    dhlDate.setDate(dhlDate.getDate() + 7);
    postnordDate.setDate(postnordDate.getDate() + 5);
    bringDate.setDate(bringDate.getDate() + 3);

    const dhlDeliveryDay =
      dhlDate.getDate() +
      "/" +
      (dhlDate.getMonth() + 1) +
      "/" +
      dhlDate.getFullYear();
    const postnordDeliveryDay =
      postnordDate.getDate() +
      "/" +
      (postnordDate.getMonth() + 1) +
      "/" +
      postnordDate.getFullYear();
    const bringDeliveryDay =
      bringDate.getDate() +
      "/" +
      (bringDate.getMonth() + 1) +
      "/" +
      bringDate.getFullYear();

    switch (delivery) {
      case "DHL":
        return dhlDeliveryDay;

      case "Postnord":
        return postnordDeliveryDay;

      case "Bring":
        return bringDeliveryDay;

      default:
        return "";
    }
  };

  const emptyOrderDetails = () => {
    const emptyDetails: OrderDetails = {
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
    };
    setOrderDetails(emptyDetails);
  };

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
        setNewOrderDetails,
        getShippingPrice,
        getDeliveryDay,
        emptyOrderDetails,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
