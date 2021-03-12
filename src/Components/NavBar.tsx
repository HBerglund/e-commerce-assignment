import React from "react";
import { AppBar, Toolbar, Button, IconButton, Hidden } from "@material-ui/core";
import Logo from "../assets/bhagwan-logo.svg";
import { CSSProperties, makeStyles } from "@material-ui/styles";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DropDown from "./DropDown";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    textColor: "black",
  },
});

function NavBar() {
  const classes = useStyles();

  const firstNavItems = routes.slice(1, 4);
  const lastNavItems = routes.slice(4, routes.length - 1);
  const checkOutNavItem = routes.slice(routes.length - 1, routes.length);

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <IconButton
          component={Link}
          to={"/"}
          disableRipple
          style={{
            backgroundColor: "transparent",
          }}
        >
          <img src={Logo} style={logoStyle} alt="logo" />
        </IconButton>
        <div style={wrapperDiv}>
          <Hidden smDown>
            <div>
              {firstNavItems.map(({ name, path }) => (
                <Button
                  component={Link}
                  to={path}
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                  }}
                >
                  {name}
                </Button>
              ))}
            </div>
            <div>
              {lastNavItems.map(({ name, path }) => (
                <Button
                  component={Link}
                  to={path}
                  disableRipple
                  style={{ backgroundColor: "transparent" }}
                >
                  {name}
                </Button>
              ))}
              {checkOutNavItem.map(({ path }) => (
                <IconButton
                  component={Link}
                  to={path}
                  disableRipple
                  style={{ backgroundColor: "transparent" }}
                >
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
