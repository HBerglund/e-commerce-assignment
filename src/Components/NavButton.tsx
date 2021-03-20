import { Button, createStyles, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  path: string;
  activePage: string;
  onActivePageClick: (name: string) => void;
}

function NavButton(props: Props) {
  const [isHovered, setIsHovered] = useState("");

  const useStyles = makeStyles(() =>
    createStyles({
      root: { padding: "0 1rem" },
      bottomLine: {
        transition: "all 500ms ease",
        height: "2px",
        borderRadius: "1px",
      },
    })
  );

  const classes = useStyles();

  const handleActivePage = (name: string) => {
    props.onActivePageClick(name);
  };

  const handleHover = (name: string) => {
    setIsHovered(name);
  };
  const handleHoverLeave = (name: string) => {
    setIsHovered("");
  };

  const { name, path, activePage } = props;

  return (
    <div className={classes.root}>
      <Button
        key={name}
        component={Link}
        to={path}
        disableRipple
        style={{
          backgroundColor: "transparent",
          padding: 0,
          minWidth: 0,
        }}
        onMouseEnter={() => handleHover(name)}
        onMouseLeave={() => handleHoverLeave(name)}
        onClick={() => handleActivePage(name)}
      >
        {name}
      </Button>
      <div
        className={classes.bottomLine}
        style={{
          width: activePage === name || isHovered === name ? "99%" : "0%",
          backgroundColor:
            activePage === name || isHovered === name ? "black" : "transparent",
        }}
      ></div>
    </div>
  );
}

export default NavButton;
