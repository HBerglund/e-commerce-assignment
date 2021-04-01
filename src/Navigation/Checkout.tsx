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
  CircularProgress,
} from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import CheckoutProductList from "../Components/CheckoutProductList";
import PaymentDetails from "../Components/PaymentDetails";
import Section from "../Components/Section";
import ShippingDetails from "../Components/ShippingDetails";
import OrderDetailsProvider, {
  OrderDetailsContext,
} from "../Context/OrderDetailsContext";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import OrderSummary from "../Components/OrderSummary";
import PlaceOrder from "../Components/PlaceOrder";

function getSteps() {
  return ["Your cart", "Shipping details", "Payment details", "Order summary"];
}

function Checkout() {
  const { orderDetails, orderIsValidated } = useContext(OrderDetailsContext);

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
        return <PaymentDetails />;
      case 3:
        return <OrderSummary />;
      default:
        return "Unknown step";
    }
  }

  console.log({ activeStep, orderIsValidated });

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
                  <Button
                    endIcon={
                      activeStep === steps.length - 1 ? (
                        <PlaceOrder />
                      ) : (
                        <ArrowDropDownIcon />
                      )
                    }
                    variant="contained"
                    color="primary"
                    disabled={activeStep === 1 && !orderIsValidated}
                    onClick={handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Place order" : "Next"}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} style={{ paddingLeft: "3rem" }}>
          <CircularProgress />
        </Paper>
      )}
    </Section>
  );
}

export default Checkout;
