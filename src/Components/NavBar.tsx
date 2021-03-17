import React, { useState } from "react";
import { AppBar, Toolbar, Button, IconButton, Hidden } from "@material-ui/core";
import Logo from "../assets/bhagwan-logo.svg";
import { CSSProperties, makeStyles } from "@material-ui/styles";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import Cart from "./Cart";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    textColor: "black",
    boxShadow: "none",
  },
});

function NavBar() {
  const [activePage, setActivePage] = useState("");
  const [isHovered, setIsHovered] = useState("");

  const classes = useStyles();
  const firstNavItems = routes.slice(1, 4);
  const lastNavItems = routes.slice(4, routes.length - 1);
  const checkOutNavItem = routes.slice(routes.length - 1, routes.length);

  const handleActivePage = (name: string) => {
    setActivePage(name);
  };

  const handleHover = (name: string) => {
    setIsHovered(name);
  };
  const handleHoverLeave = (name: string) => {
    setIsHovered("");
  };

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
          onClick={() => handleActivePage("home")}
        >
          <img src={Logo} style={logoStyle} alt="logo" />
        </IconButton>
        <div style={wrapperDiv}>
          <Hidden smDown>
            <div>
              {firstNavItems.map(({ name, path }) => (
                <Button
                  key={name}
                  component={Link}
                  to={path}
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                    borderBottom:
                      activePage === name ? "1px solid black" : "none",
                    fontWeight: isHovered === name ? "bold" : "unset",
                  }}
                  onMouseEnter={() => handleHover(name)}
                  onMouseLeave={() => handleHoverLeave(name)}
                  onClick={() => handleActivePage(name)}
                >
                  {name}
                </Button>
              ))}
            </div>
            <div style={{ display: "flex" }}>
              {lastNavItems.map(({ name, path }) => (
                <Button
                  key={name}
                  component={Link}
                  to={path}
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                    borderBottom:
                      activePage === name ? "1px solid black" : "none",
                    fontWeight: isHovered === name ? "bold" : "unset",
                  }}
                  onMouseEnter={() => handleHover(name)}
                  onMouseLeave={() => handleHoverLeave(name)}
                  onClick={() => handleActivePage(name)}
                >
                  {name}
                </Button>
              ))}
              {checkOutNavItem.map(({ path, name }) => (
                <IconButton
                  key={name}
                  component={Link}
                  to={path}
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                  }}
                  onClick={() => handleActivePage(name)}
                >
                  <Cart />
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
