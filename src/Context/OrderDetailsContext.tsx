import { createContext, FC, useState, ChangeEvent } from "react";

export interface OrderDetails {
  name: string;
  phone: string;
  email: string;
  street: string;
  postal: string;
  city: string;
  country: string;
  deliveryOption: string;
}

interface OrderDetailsValue {
  orderDetails: OrderDetails;
  setNewOrderDetails: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const OrderDetailsContext = createContext<OrderDetailsValue>({
  orderDetails: {
    name: "",
    phone: "",
    email: "",
    street: "",
    postal: "",
    city: "",
    country: "",
    deliveryOption: "",
  },
  setNewOrderDetails: (e: ChangeEvent<HTMLInputElement>) => {},
});

const OrderDetailsProvider: FC<{}> = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    name: "",
    phone: "",
    email: "",
    street: "",
    postal: "",
    city: "",
    country: "",
    deliveryOption: "",
  });

  const setNewOrderDetails = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: value,
    });
  };

  console.log(orderDetails);

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
        setNewOrderDetails,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
