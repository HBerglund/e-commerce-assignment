import { Typography } from "@material-ui/core";
import Section from "../Components/Section";
import imageSources from "../assets/imageSources";
import Hero from "../Components/Hero";
import { useContext } from "react";
import { OrderDetailsContext } from "../Context/OrderDetailsContext";

function OrderConfirmation() {
  const newOrderNumber = new Date().getTime().toString(36);
  const orderDetails = useContext(OrderDetailsContext);
  orderDetails.emptyOrderDetails();

  return (
    <>
      <Hero
        bgImg={imageSources.orderConfirmation}
        label="Bhagwan Yoga namastes you"
        title="Success"
        lessHeight
      />
      <Section>
        <Typography variant="h4" gutterBottom>
          Your ordernumber is {newOrderNumber}
        </Typography>
        <Typography variant="body1" gutterBottom>
          We hope you'll be happy with your new products. Please reach out if
          you have any questions.
        </Typography>
      </Section>
    </>
  );
}

export default OrderConfirmation;
