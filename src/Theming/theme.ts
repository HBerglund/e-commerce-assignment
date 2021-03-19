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
    typography: {
      fontFamily: "Poppins",
      body1: {
        fontWeight: 300,
      },
      h1: {
        fontWeight: 500,
      },
    },
  })
);
