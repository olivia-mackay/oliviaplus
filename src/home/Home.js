import "@fontsource/roboto";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "absolute",
    zIndex: 1, // in front of drawer
  },
  drawer: {
    position: "absolute",
    zIndex: 0, // behind the top bar
    paddingTop: "100px",
  },
  page: {
    // shift everything away from navigation stuff
    marginTop: theme.spacing(10),
  },
  linkList: {
    paddingTop: "70px", // shift down under app bar
    width: "100px",
  },
  link: {
    padding: "15px",
    paddingBottom: "15px",
  },
  toolbar: {
    padding: 0,
  },
  icon: {},
}));

function LinkMenu() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar style={{ marginLeft: "-8px", minHeight: "70px" }}>
          <IconButton edge="start" aria-label="menu" onClick={handleClick}>
            <MenuIcon className={classes.icon} />
          </IconButton>
          <Typography variant="h5">Navigation</Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" open={open} className={classes.drawer}>
        <Toolbar className={classes.toolbar}>
          <List className={classes.linkList}>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/"
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/bio"
            >
              <ListItemText primary="Bio" />
            </ListItem>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/cats"
            >
              <ListItemText primary="Cats!" />
            </ListItem>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/resume"
            >
              <ListItemText primary="Résumé" />
            </ListItem>
          </List>
        </Toolbar>
      </Drawer>
    </React.Fragment>
  );
}

function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Router>
        <LinkMenu />
        // todo we need to make sure these are shifted when we open the drawer
        <div className={classes.page}>
          <Switch>
            <Route exact path="/bio" component={Biography} />
            <Route exact path="/biography">
              <Redirect to="/bio" />
            </Route>
            <Route exact path="/cats" component={Cats} />
            <Route exact path="/resume" component={Resume} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default Home;
