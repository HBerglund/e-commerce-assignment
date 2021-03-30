import { Typography } from "@material-ui/core";
import Section from "../Components/Section";
import imageSources from "../assets/imageSources";
import Hero from "../Components/Hero";

function OrderConfirmation() {
  const newOrderNumber = Math.ceil(Math.random() * 100000);

  return (
    <>
      <Hero
        bgImg={imageSources.orderConfirmation}
        label=""
        title="Success"
        lessHeight
      />
      <Section>
        <Typography variant="h6" gutterBottom>
          Your ordernumber is {newOrderNumber}
        </Typography>
      </Section>
    </>
  );
}

export default OrderConfirmation;
