import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Women from "./Women";
import Men from "./Men";
import About from "./About";
import Privacy from "./Privacy";
import Checkout from "./Checkout";
import Faq from "./Faq";
import NavBar from "../Components/NavBar";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/women" component={Women} />
        <Route path="/men" component={Men} />
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/faq" component={Faq} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
