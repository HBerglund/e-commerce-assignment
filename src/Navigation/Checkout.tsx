import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import CheckoutProductList from "../Components/CheckoutProductList";
import Section from "../Components/Section";
import ShippingDetails from "../Components/ShippingDetails";
import OrderDetailsProvider from "../Context/OrderDetailsContext";

function getSteps() {
  return [
    "Your cart",
    "Shipping details",
    "Payment details",
    "Order confirmation",
  ];
}

function Checkout() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
    })
  );

  const [orderDetails, setOrderDetails] = useState({
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

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CheckoutProductList />;
      case 1:
        return <ShippingDetails />;
      case 2:
        return `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`;
      case 3:
        return "hejhej";
      default:
        return "Unknown step";
    }
  }

  return (
    <OrderDetailsProvider>
      <Section>
        <Typography variant="h3" component="h1" gutterBottom>
          Checkout
        </Typography>
        <Divider />

        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
                <div>
                  <div>
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1 ? "Finish" : "Next"}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0}>
            <Typography>All steps completed - you're finished</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </Paper>
        )}
      </Section>
    </OrderDetailsProvider>
  );
}

export default Checkout;
