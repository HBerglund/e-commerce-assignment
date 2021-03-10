import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { MenuItem, Menu } from "@material-ui/core";

function DropDown() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClose = (event: any) => {
    setAnchorEl(null);
  };

  const openMenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div>
      <MenuIcon onClick={openMenu} />
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Hej</MenuItem>
        <MenuItem onClick={handleClose}>Herman</MenuItem>
        <MenuItem onClick={handleClose}>Hej då</MenuItem>
      </Menu>
    </div>
  );
}

export default DropDown;
