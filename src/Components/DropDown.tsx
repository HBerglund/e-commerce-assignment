import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { Menu, IconButton } from "@material-ui/core";
import { routes } from "../Navigation/routes";
import { Link } from "react-router-dom";

function DropDown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const dropDownRoutes = routes.slice(1, routes.length);

  const handleClose = (event: any) => {
    setAnchorEl(null);
  };

  const openMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <MenuIcon
        onClick={openMenu}
        aria-haspopup="true"
        style={{ color: "black", cursor: "pointer" }}
      />
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "10rem" }}
      >
        {dropDownRoutes.map(({ name, path }) => (
          <IconButton
            component={Link}
            to={path}
            onClick={handleClose}
            style={{ color: "black", fontSize: "1rem" }}
          >
            {name}
          </IconButton>
        ))}
      </Menu>
    </div>
  );
}

export default DropDown;
