import { createMuiTheme } from "@material-ui/core";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#264653",
    },
    secondary: {
      main: "#F4A261",
    },
    type: "dark",
  },
  typography: {
    fontSize: 14,
    color: "primary",
  },
});

export default GlobalTheme;
