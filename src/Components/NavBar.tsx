import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Logo from "../Assets/bhagwan-logo.svg";
import { CSSProperties } from "@material-ui/styles";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function NavBar() {
  const firstNavItems = routes.slice(0, 3);
  const lastNavItems = routes.slice(3, routes.length - 1);
  const checkOutNavItem = routes.slice(routes.length - 1, routes.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <img src={Logo} style={logoStyle} alt="logo" />
        <div style={wrapperDiv}>
          <div>
            {firstNavItems.map(({ name, path }) => (
              <Button component={Link} to={path} color="inherit">
                {name}
              </Button>
            ))}
          </div>
          <div>
            {lastNavItems.map(({ name, path }) => (
              <Button component={Link} to={path} color="inherit">
                {name}
              </Button>
            ))}
            {checkOutNavItem.map(({ name, path }) => (
              <IconButton component={Link} to={path} color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            ))}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

const logoStyle: CSSProperties = {
  width: "6rem",
  marginRight: "2rem",
};

const wrapperDiv: CSSProperties = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
