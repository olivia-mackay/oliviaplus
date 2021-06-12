import "@fontsource/roboto";
import {
  AppBar,
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  makeStyles,
  Toolbar,
  Typography
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    color: theme.palette.background.main,
  },
  page: {
    position: "absolute",
    marginLeft: "130px",
    marginTop: "80px",
  },
}));

function LinkMenu() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Navigation</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <List>
          <ListItem>
            <Link component={RouterLink} to="/">
              <Button>
                <Typography>Biography</Typography>
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/cats">
              <Button>
                <Typography>Cats!</Typography>
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link component={RouterLink} to="/resume">
              <Button>
                <Typography>Résumé</Typography>
              </Button>
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </React.Fragment>
  );
}

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
        <Switch>
          <div className={classes.route}>
            <Route exact path="/">
              <LinkMenu />
              <div className={classes.page}>
                <Biography />
              </div>
            </Route>
            <Route exact path="/cats">
              <LinkMenu />
              <div className={classes.page}>
                <Cats />
              </div>
            </Route>
            <Route exact path="/resume">
              <LinkMenu />
              <div className={classes.page}>
                <Resume />
              </div>
            </Route>
          </div>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default Home;
