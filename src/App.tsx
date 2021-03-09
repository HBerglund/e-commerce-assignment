import React from "react";
import Home from "./Navigation/Home";
import Router from "./Navigation/Router";
import AppTheme from "./Theming/AppTheme";

function App() {
  return (
    <AppTheme>
      <Router />
    </AppTheme>
  );
}

export default App;
