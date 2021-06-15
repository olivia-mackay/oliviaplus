import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";

const me = require("../resources/me.jpg").default;

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(2),
    width: theme.spacing(150),
    minWidth: theme.spacing(50),
  },
  media: {
    height: theme.spacing(50),
    minWidth: theme.spacing(50),
    maxWidth: theme.spacing(50),
    margin: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(2),
  },
  caption: {
    marginLeft: theme.spacing(2),
    position: "relative",
    bottom: theme.spacing(1),
  },
  avatarContainer: {
    maxWidth: theme.spacing(54),
  },
  subheader: {
    color: theme.palette.accent.main,
  },
  icon: {
    marginRight: -theme.spacing(4),
    marginLeft: -theme.spacing(1),
  },
  innerIcon: {
    fontSize: theme.spacing(1),
  },
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.subheader} variant="h5">
            Olivia Moses
          </Typography>
          <Typography variant="body1" className={classes.text}>
            My name is Olivia Moses and I'm a software engineer from Arkansas,
            currently living in the Rochester, New York area. I've moved across
            the world to find a job where I can build impactful, robust coding
            solutions to everyday problems.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            I'm currently working for Bandwidth, Inc. in Rochester NY and
            building applications that impact millions of phone calls every day.
            (Maybe yours too!)
          </Typography>
          <Typography variant="body1" className={classes.text}>
            In my free time, I like to play guitar, collect MTG/Pokemon cards,
            draw, and play video games.
          </Typography>

          <Typography variant="h5" className={classes.subheader}>
            Favorite Games
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <FiberManualRecordIcon className={classes.innerIcon} />
              </ListItemIcon>
              <Typography>OMORI (please play this)</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <FiberManualRecordIcon className={classes.innerIcon} />
              </ListItemIcon>
              <Typography>Pokemon FireRed</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <FiberManualRecordIcon className={classes.innerIcon} />
              </ListItemIcon>
              <Typography>Super Mario Sunshine</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <FiberManualRecordIcon className={classes.innerIcon} />
              </ListItemIcon>
              <Typography>League of Legends</Typography>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <FiberManualRecordIcon className={classes.innerIcon} />
              </ListItemIcon>
              <Typography>World of Warcraft</Typography>
            </ListItem>
          </List>
        </CardContent>
        <Grid container direction="column" className={classes.avatarContainer}>
          <Grid item>
            <CardMedia className={classes.media} image={me} />
          </Grid>
          <Grid item>
            <Typography variant="caption" className={classes.caption}>
              (placeholder for an actual image of me)
            </Typography>
          </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  );
}
