import "@fontsource/roboto";
import { Button, Container, Link, Menu, MenuItem } from "@material-ui/core";
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
    <React.Fragment>
      <Router>
        <Menu>
          <MenuItem>
            <Button>
              <Link component={RouterLink} to="/home">
                Home
              </Link>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <Link component={RouterLink} to="/bio">
                Biography
              </Link>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <Link component={RouterLink} to="/cats">
                Cats!
              </Link>
            </Button>
          </MenuItem>
          <MenuItem>
            <Button>
              <Link component={RouterLink} to="/resume">
                Résumé
              </Link>
            </Button>
          </MenuItem>
        </Menu>
        <Container></Container>

        <Switch>
          <Route exact path="/home">
            <Redirect to="/" />
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
    </React.Fragment>
  );
}

export default Home;
