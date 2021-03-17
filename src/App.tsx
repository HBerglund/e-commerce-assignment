import Router from "./Navigation/Router";
import AppTheme from "./Theming/AppTheme";
import { Container } from "@material-ui/core";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import CartState from "./Context/CartState";

function App() {
  return (
    <ShoppingCartProvider>
      <CartState />
      <AppTheme>
        <Container
          style={{ backgroundColor: "white", padding: 0 }}
          maxWidth="lg"
        >
          <Router />
        </Container>
      </AppTheme>
    </ShoppingCartProvider>
  );
}

export default App;
