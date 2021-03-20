import { Button, createStyles, makeStyles } from "@material-ui/core";
import { useState } from "react";

interface Props {
  category: string;
  activePage: string;
  onActiveCategoryClick: (category: string) => void;
}

function FilterButton(props: Props) {
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
  const { category, activePage } = props;

  const handleActiveCategory = () => {
    props.onActiveCategoryClick(category);
  };

  const handleHover = () => {
    setIsHovered(category);
  };
  const handleHoverLeave = () => {
    setIsHovered("");
  };

  return (
    <div className={classes.root}>
      <Button
        key={category}
        disableRipple
        color={
          activePage === category || isHovered === category
            ? "primary"
            : "default"
        }
        style={{
          backgroundColor: "transparent",
          padding: 0,
          minWidth: 0,
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverLeave}
        onClick={handleActiveCategory}
      >
        {category}
      </Button>
      <div className={classes.bottomLine}></div>
    </div>
  );
}

export default FilterButton;
