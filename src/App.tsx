import Router from "./Navigation/Router";
import AppTheme from "./Theming/AppTheme";
import { Container } from "@material-ui/core";
import ShoppingCartProvider from "./Context/ShoppingCartContext";
import ProductsProvider from "./Context/ProductListContext";

function App() {
  return (
    <ProductsProvider>
      <ShoppingCartProvider>
        <AppTheme>
          <Container
            style={{ backgroundColor: "white", padding: 0 }}
            maxWidth="lg"
          >
            <Router />
          </Container>
        </AppTheme>
      </ShoppingCartProvider>
    </ProductsProvider>
  );
}

export default App;
