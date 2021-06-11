import { createMuiTheme } from "@material-ui/core/styles";

const lightOrange = "#F4A261";
const blueBlack = "#0D181C";
const seafoam = "#2A9D8F";

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
    MuiContainer: { maxWidth: "md" },
    MuiTypography: { color: "primary" },
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
      variant: "square",
    },
  },
});

export default GlobalTheme;
