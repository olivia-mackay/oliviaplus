import "@fontsource/roboto";
import { Button, Container, Grid, Link } from "@material-ui/core";
import React from "react";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Redirect,
  Route,
  Switch
} from "react-router-dom";
import Biography from "../page/Biography";
import Cats from "../page/Cats";
import Resume from "../page/Resume";

function Home() {
  return (
    <Container>
      <Router>
        <Grid container>
          <Grid item>
            <Button>
              <Link component={RouterLink} to="/home">
                Home
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Link component={RouterLink} to="/bio">
                Biography
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Link component={RouterLink} to="/cats">
                Cats!
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Link component={RouterLink} to="/resume">
                Résumé
              </Link>
            </Button>
          </Grid>
        </Grid>

        <Switch>
          <Route exact path="/">
            <Redirect to="/home"></Redirect>
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
    </Container>
  );
}

export default Home;
