import { createMuiTheme } from "@material-ui/core/styles";

const blue = "#0D3B66";
const white = "#FAF0CA";
const purple = "#B2A3B5";

const GlobalTheme = createMuiTheme({
  palette: {
    primary: {
      main: blue,
    },
    secondary: {
      main: purple,
    },
    background: {
      default: white,
    },
    text: {
      primary: "#00000",
      secondary: white,
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        position: "absolute",
        zIndex: 2,
        height: "70px",
      },
      colorPrimary: true,
    },
    MuiDrawer: {
      root: {
        position: "absolute",
        zIndex: 1,
        flexGrow: "-moz-initial",
      },
      paper: {
        background: purple,
      },
    },
    MuiList: {
      root: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "-30px",
        marginTop: "75px",
      },
    },
    MuiListItem: {
      root: {
        display: "inline-block",
        width: "150px",
        maxWidth: "150px",
      },
    },
    MuiButton: {
      root: {
        justifyContent: "left",
        marginTop: "-15px",
        width: "150px",
        height: "50px",
      },
    },
    MuiLink: {
      root: {
        padding: "25px",
        width: "100px",
      },
    },
    MuiTypography: {
      root: {
        fontSize: "1rem",
      },
    },
    MuiAvatar: {
      root: {
        padding: "50px",
        width: "300px",
        height: "300px",
      },
    },
    MuiCard: {
      root: {
        borderRadius: "10px",
        background: blue,
        color: white,
        display: "flex",
        flexDirection: "row",
        maxWidth: "1200px",
        width: "1200px",
        marginBottom: "5px",
      },
    },
  },
});

export default GlobalTheme;
