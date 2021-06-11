import "@fontsource/roboto";
import {
  Grid,
  Link,
  makeStyles,
  MuiThemeProvider as ThemeProvider
} from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Route,
  Switch
} from "react-router-dom";
import Biography from "../page/Biography";
import Cats from "../page/Cats";
import Resume from "../page/Resume";
import GlobalTheme from "../theme/GlobalTheme";

const styles = makeStyles((theme) => ({
  home: {
    margin: "25px",
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.secondary.main,
  },
  container: { spacing: 20 },
  item: { spacing: 20 },
  horizontal: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
}));

function Home() {
  const classes = styles();

  return (
    <div className={classes.home}>
      <ThemeProvider theme={GlobalTheme}>
        <Router>
          <ThemeProvider theme={GlobalTheme}>
            <Grid
              container
              className={classes.horizontal}
              spacing={classes.container.spacing}
            >
              <Grid item xs={classes.item.spacing}>
                <Link component={RouterLink} to="/">
                  Home
                </Link>
              </Grid>
              <Grid item xs={classes.item.spacing}>
                <Link component={RouterLink} to="/bio">
                  Biography
                </Link>
              </Grid>
              <Grid item xs={classes.item.spacing}>
                <Link component={RouterLink} to="/cats">
                  Cats!
                </Link>
              </Grid>
              <Grid item xs={classes.item.spacing}>
                <Link component={RouterLink} to="/resume">
                  Résumé
                </Link>
              </Grid>
            </Grid>

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/bio">
                <Biography />
              </Route>
              <Route exact path="/cats">
                <Cats />
              </Route>
              <Route exact path="/resume">
                <Resume />
              </Route>
            </Switch>
          </ThemeProvider>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default Home;
