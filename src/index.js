import { ThemeProvider } from "@material-ui/core/styles";
import React from "react";
import ReactDOM from "react-dom";
import Home from "./home/Home";
import "./index.css";
import GlobalTheme from "./theme/GlobalTheme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={GlobalTheme}>
      <Home />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
