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
  paper: {
    background: theme.palette.accent.main,
  },
  page: {
    marginTop: theme.spacing(11),
    marginLeft: theme.spacing(2),
    maxWidth: theme.spacing(150),
    width: "100%",
  },
  openDrawerPage: {
    marginTop: theme.spacing(11),
    marginLeft: theme.spacing(14),
    maxWidth: theme.spacing(150),
    width: "100%",
  },
  linkList: {
    paddingTop: "70px", // shift down under app bar
    width: "100px",
  },
  link: {
    padding: "15px",
    paddingBottom: "15px",
  },
  appToolbar: {
    marginLeft: -theme.spacing(1),
    minHeight: "70px",
  },
  drawerToolbar: {
    padding: 0,
  },
}));

function LinkMenu(props) {
  const classes = useStyles();
  const { open, setOpen } = props;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className={classes.appToolbar}>
          <IconButton edge="start" aria-label="menu" onClick={handleClick}>
            <MenuIcon color="secondary" />
          </IconButton>
          <Typography variant="h5">Navigation</Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="persistent"
        open={open}
        classes={{
          root: classes.drawer,
          paper: classes.paper,
        }}
      >
        <Toolbar className={classes.drawerToolbar}>
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
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    // handle clicking main page dismisses drawer, otherwise do nothing
    if (open) {
      console.log("closing drawer");
      setOpen(!open);
    }
  };

  return (
    // todo we need to make sure these are shifted when we open the drawer
    <div
      className={open ? classes.openDrawerPage : classes.page}
      onClick={handleClick}
    >
      <Router>
        <LinkMenu open={open} setOpen={setOpen} />

        <Switch>
          <Route exact path="/bio" component={Biography} />
          <Route exact path="/biography">
            <Redirect to="/bio" />
          </Route>
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
