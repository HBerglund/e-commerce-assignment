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
import ProductDetails from "./ProductDetails";
import Contact from "./Contact";
import Footer from "../Components/Footer";
import Admin from "./Admin";
import SignIn from "./SignIn";

function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/products' exact component={Products} />
        <Route path='/products/:id' component={ProductDetails} />
        <Route path='/women' component={Women} />
        <Route path='/men' component={Men} />
        <Route path='/about' component={About} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/faq' component={Faq} />
        <Route path='/contact' component={Contact} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/admin' component={SignIn} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
