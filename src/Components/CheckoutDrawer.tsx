import { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Drawer, Typography } from "@material-ui/core";

interface Props {
  isOpen: boolean;
  handleExit: (isOpen: boolean) => void;
}

const useStyles = makeStyles({
  root: {},
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

function CheckoutDrawer(props: Props) {
  const classes = useStyles();

  //   const [productsInCart, setProductsInCart] = useState();

  useEffect(() => {
    const cartLS = localStorage.getItem("productsInCart");
    if (cartLS) {
      //   setProductsInCart(JSON.parse(cartLS));
    }
  }, []);

  const handleDrawerExit = () => {
    props.handleExit(!props.isOpen);
  };

  return (
    <div className={classes.root}>
      <Drawer anchor='right' open={props.isOpen}>
        <Typography>Cart Items</Typography>
        <Button onClick={handleDrawerExit}>Exit</Button>
      </Drawer>
    </div>
  );
}

export default CheckoutDrawer;
