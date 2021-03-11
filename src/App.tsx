import React from "react";
import Router from "./Navigation/Router";
import AppTheme from "./Theming/AppTheme";
import { Container } from "@material-ui/core";

function App() {
  return (
    <AppTheme>
      <Container style={{ backgroundColor: "white", padding: 0 }} maxWidth="lg">
        <Router />
      </Container>
    </AppTheme>
  );
}

export default App;
