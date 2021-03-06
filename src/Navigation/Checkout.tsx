import {
  Button,
  createStyles,
  Divider,
  makeStyles,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import CheckoutProductList from "../Components/CheckoutProductList";
import PaymentDetails from "../Components/PaymentDetails";
import Section from "../Components/Section";
import ShippingDetails from "../Components/ShippingDetails";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import OrderSummary from "../Components/OrderSummary";
import PlaceOrder from "../Components/PlaceOrder";

function getSteps() {
  return ["Your cart", "Shipping details", "Payment details", "Order summary"];
}

function Checkout() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {},
      stepperRoot: {},
    })
  );

  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <CheckoutProductList />;
      case 1:
        return <ShippingDetails />;
      case 2:
        return <PaymentDetails />;
      case 3:
        return <OrderSummary />;
      default:
        return "Unknown step";
    }
  }

  return (
    <Section>
      <Typography variant="h3" component="h1" gutterBottom>
        Checkout
      </Typography>
      <Divider />
      <Stepper
        className={classes.stepperRoot}
        activeStep={activeStep}
        orientation="vertical"
      >
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div>
                <div>
                  <Button
                    endIcon={<ExpandLessIcon />}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                  {activeStep === steps.length - 1 ? (
                    <PlaceOrder />
                  ) : (
                    <Button
                      endIcon={<ArrowDropDownIcon />}
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      Next
                    </Button>
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Section>
  );
}

export default Checkout;
