import { cloneDeep, isEqual } from "lodash";
import { createContext, FC, useState, useEffect } from "react";

interface OrderDetails {
  personalDetails: {
    name: string;
    phone: string;
    email: string;
  };
  adressDetails: {
    street: string;
    postal: string;
    city: string;
    country: string;
  };
  deliveryOption: string;
  paymentConfirmed: boolean;
}

interface OrderDetailsValue {
  orderDetails: OrderDetails;
}

export const OrderDetailsContext = createContext<OrderDetailsValue>({
  orderDetails: {
    personalDetails: {
      name: "",
      phone: "",
      email: "",
    },
    adressDetails: {
      street: "",
      postal: "",
      city: "",
      country: "",
    },
    deliveryOption: "",
    paymentConfirmed: false,
  },
});

const OrderDetailsProvider: FC<{}> = ({ children }) => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({
    personalDetails: {
      name: "",
      phone: "",
      email: "",
    },
    adressDetails: {
      street: "",
      postal: "",
      city: "",
      country: "",
    },
    deliveryOption: "",
    paymentConfirmed: false,
  });

  return (
    <OrderDetailsContext.Provider
      value={{
        orderDetails,
      }}
    >
      {children}
    </OrderDetailsContext.Provider>
  );
};

export default OrderDetailsProvider;
