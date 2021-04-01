import Router from "./Navigation/Router";
import AppTheme from "./Theming/AppTheme";
import { Container } from "@material-ui/core";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import ProductsProvider from "./Context/ProductListContext";
import OrderDetailsProvider from "./Context/OrderDetailsContext";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <OrderDetailsProvider>
          <AppTheme>
            <Container
              style={{ backgroundColor: "white", padding: 0 }}
              maxWidth="lg"
            >
              <Router />
            </Container>
          </AppTheme>
        </OrderDetailsProvider>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
