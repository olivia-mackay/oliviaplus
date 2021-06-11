import "@fontsource/roboto";
import { Grid, Link, makeStyles, useTheme } from "@material-ui/core";
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

const styles = makeStyles((theme) => ({
  horizontal: theme.horizontal,
}));

function Home() {
  const theme = useTheme();
  const classes = styles();

  return (
    <Router>
      <Grid
        container
        className={classes.horizontal}
        spacing={theme.grid.spacing}
      >
        <Grid item xs={theme.grid.item.spacing}>
          <Link component={RouterLink} to="/">
            Home
          </Link>
        </Grid>
        <Grid item xs={theme.grid.item.spacing}>
          <Link component={RouterLink} to="/bio">
            Biography
          </Link>
        </Grid>
        <Grid item xs={theme.grid.item.spacing}>
          <Link component={RouterLink} to="/cats">
            Cats!
          </Link>
        </Grid>
        <Grid item xs={theme.grid.item.spacing}>
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
    </Router>
  );
}

export default Home;
