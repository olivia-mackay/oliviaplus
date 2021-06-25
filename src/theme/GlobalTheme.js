import { createMuiTheme } from "@material-ui/core/styles";

// round 3 of colors
const black = "#262626";
const white = "#FFF0EB";
const mint = "#A5F8D3";
const purple = "#9781D8";
const blue = "#53D8FB";
const selectPurple = "#A997DF";

const GlobalTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: mint,
    },
    secondary: {
      main: black,
    },
    accent: {
      main: purple,
      secondary: selectPurple,
      tertiary: blue,
    },
    text: {
      primary: black,
      secondary: white,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          margin: 0,
          padding: 0,
          backgroundColor: black,
        },
      },
    },
    MuiCard: {
      root: {
        backgroundColor: mint,
        color: black,
      },
    },
  },
});

export default GlobalTheme;
