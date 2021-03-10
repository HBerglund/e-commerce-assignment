import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: "#CC6D5B",
      },
      secondary: {
        main: "#909D7F",
      },
    },
    shape: {
      borderRadius: 0,
    },
  })
);
