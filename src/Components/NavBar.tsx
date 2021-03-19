import { useState } from "react";
import { AppBar, Toolbar, IconButton, Hidden } from "@material-ui/core";
import Logo from "../assets/bhagwanlogo3.svg";
import { makeStyles } from "@material-ui/styles";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import CartButton from "./CartButton";
import NavButton from "./NavButton";

const useStyles = makeStyles({
  root: {
    backgroundColor: "white",
    boxShadow: "none",
  },
  logo: {
    height: "70px",
    margin: "0.5rem 2rem 0.5rem 0.5rem",
  },
  navWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "5px",
  },
  buttonWrapper: {
    margin: "0.5rem 2rem 0 0",
    display: "flex",
    alignItems: "center",
  },
});

function NavBar() {
  const [activePage, setActivePage] = useState("");
  const classes = useStyles();
  const firstNavItems = routes.slice(1, 4);
  const lastNavItems = routes.slice(4, routes.length - 1);
  const checkOutNavItem = routes.slice(routes.length - 1, routes.length);

  const handleActivePage = (name: string) => {
    setActivePage(name);
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
          <img className={classes.logo} src={Logo} alt="logo" />
        </IconButton>
        <div className={classes.navWrapper}>
          <Hidden smDown>
            <div className={classes.buttonWrapper}>
              {firstNavItems.map(({ name, path }) => (
                <NavButton
                  name={name}
                  path={path}
                  activePage={activePage}
                  onActivePageClick={handleActivePage}
                />
              ))}
            </div>
            <div className={classes.buttonWrapper}>
              {lastNavItems.map(({ name, path }) => (
                <NavButton
                  name={name}
                  path={path}
                  activePage={activePage}
                  onActivePageClick={handleActivePage}
                />
              ))}
              {checkOutNavItem.map(({ path, name }) => (
                <IconButton
                  key={name}
                  disableRipple
                  style={{
                    backgroundColor: "transparent",
                    marginBottom: "0.5rem",
                  }}
                  onClick={() => handleActivePage(name)}
                >
                  <CartButton />
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
