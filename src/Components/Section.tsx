import { useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Section: React.FC<Props> = ({ children }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.up("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div
      style={{
        padding: matchesMd ? "4rem" : "2rem" && matchesSm ? "2rem" : "0.8rem",
      }}
    >
      {children}
    </div>
  );
};

export default Section;
