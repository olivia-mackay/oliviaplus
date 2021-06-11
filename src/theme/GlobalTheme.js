import { createMuiTheme } from "@material-ui/core/styles";

const lightOrange = "#F4A261";
const blueBlack = "#0D181C";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: lightOrange,
    },
    secondary: {
      main: blueBlack,
    },
  },
  overrides: {
    MuiContainer: {
      maxWidth: "md",
      justify: "center",
      alignItems: "center",
    },
    MuiTypography: { color: "secondary" },
    MuiButton: {
      fontSize: "1rem",
      variant: "outlined",
      outlined: {
        borderRadius: "10px",
      },
    },
    MuiGrid: {
      spacing: 2,
      direction: "row",
    },
    MuiAvatar: {
      sizes: {
        width: "50px",
        height: "50px",
      },
      variant: "rounded",
    },
  },
});

export default GlobalTheme;
