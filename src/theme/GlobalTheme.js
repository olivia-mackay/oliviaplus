import { createMuiTheme } from "@material-ui/core/styles";

// round 3 of colors
const black = "#262626";
const white = "#FFF0EB";
const mint = "#A5F8D3";
const purple = "#A997DF";

const GlobalTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: mint,
    },
    secondary: {
      main: purple,
    },
    background: {
      default: black,
    },
    text: {
      primary: white,
      secondary: black,
    },
  },
  overrides: {
    MuiDrawer: {
      paper: {
        padding: 0,
      },
    },
    MuiToolbar: {
      root: {
        padding: 0,
        margin: 0,
      },
      gutters: {
        padding: 0,
        margin: 0,
      },
    },
    MuiTypography: {
      colorPrimary: true,
    },
  },
});

export default GlobalTheme;
