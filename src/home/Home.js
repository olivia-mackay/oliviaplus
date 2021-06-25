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
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import {
  BrowserRouter as Router,
  Link as RouterLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Biography from "../page/Biography";
import Cats from "../page/Cats";
import Resume from "../page/Resume";

const pageWidth = "100%";
const appBarHeight = 10;
const drawerWidth = 14;

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
    // drawer
    background: theme.palette.accent.main,
    color: theme.palette.text.primary,
  },
  page: {
    paddingTop: theme.spacing(appBarHeight),
    maxWidth: pageWidth,
    width: pageWidth,
  },
  openDrawerPage: {
    paddingTop: theme.spacing(appBarHeight), // away from drawer/app bad
    paddingLeft: theme.spacing(drawerWidth),
    maxWidth: pageWidth,
    width: pageWidth,
  },
  linkList: {
    paddingTop: theme.spacing(appBarHeight), // shift down under app bar
    width: theme.spacing(drawerWidth),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  link: {
    padding: theme.spacing(2),
  },
  linkText: {
    display: "flex",
    justifyContent: "center",
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
              <ListItemText className={classes.linkText} primary="Home" />
            </ListItem>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/cats"
            >
              <ListItemText className={classes.linkText} primary="Cats!" />
            </ListItem>
            <ListItem
              button
              className={classes.link}
              component={RouterLink}
              to="/resume"
            >
              <ListItemText className={classes.linkText} primary="Résumé" />
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

  return (
    <div // pass `open` variable reference into the lower component to sync state (?)
      className={open ? classes.openDrawerPage : classes.page}
    >
      <Router>
        <LinkMenu open={open} setOpen={setOpen} />

        <Switch>
          <Route exact path="/" component={Biography} />
          <Route exact path="/biography">
            <Redirect to="/" />
          </Route>
          <Route exact path="/bio">
            <Redirect to="/" />
          </Route>
          <Route exact path="/cats" component={Cats} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </Router>
    </div>
  );
}

export default Home;
