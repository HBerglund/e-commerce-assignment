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
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import DropDown from "./DropDown";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    textColor: "black",
  },
});

function NavBar() {
  const classes = useStyles();

  const firstNavItems = routes.slice(0, 3);
  const lastNavItems = routes.slice(3, routes.length - 1);
  const checkOutNavItem = routes.slice(routes.length - 1, routes.length);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <img src={Logo} style={logoStyle} alt="logo" />
        <div style={wrapperDiv}>
          <Hidden smDown>
            <div>
              {firstNavItems.map(({ name, path }) => (
                <Button component={Link} to={path}>
                  {name}
                </Button>
              ))}
            </div>
            <div>
              {lastNavItems.map(({ name, path }) => (
                <Button component={Link} to={path}>
                  {name}
                </Button>
              ))}
              {checkOutNavItem.map(({ name, path }) => (
                <IconButton component={Link} to={path}>
                  <ShoppingCartIcon />
                </IconButton>
              ))}
            </div>
          </Hidden>
        </div>
        <Hidden mdUp>
          <DropDown />
        </Hidden>
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
