import { createMuiTheme } from "@material-ui/core/styles";

const lightOrange = "#F4A261";
const blueBlack = "#0D181C";
const seafoam = "#2A9D8F";

const GlobalTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        palette: {
          primary: {
            main: blueBlack,
          },
          secondary: {
            main: seafoam,
          },
        },
      },
    },
    MuiContainer: {
      maxWidth: "md",
    },
    MuiButton: {
      outlined: {
        borderRadius: 0,
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
