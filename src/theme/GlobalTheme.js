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
  grid: {
    spacing: 20,
    item: {
      spacing: 20,
    },
  },
  horizontal: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
});

export default GlobalTheme;
