import {
  Card,
  CardContent,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography
} from "@material-ui/core";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import React from "react";

const me = require("../resources/me.jpg");

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    maxWidth: theme.spacing(150),
  },
  content: {
    width: "50%",
  },
  media: {
    height: "100%",
    width: "100%",
  },
  mediaContent: {
    width: "50%",
    minWidth: theme.spacing(35),
    minHeight: theme.spacing(35),
  },
  text: {
    margin: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  caption: {
    marginLeft: theme.spacing(2),
    position: "relative",
    bottom: theme.spacing(1),
  },
  avatarContainer: {
    maxWidth: theme.spacing(54),
  },
  header: {
    color: theme.palette.text.secondary,
  },
  icon: {
    marginRight: -theme.spacing(4),
    marginLeft: -theme.spacing(1),
  },
  innerIcon: {
    fontSize: theme.spacing(1),
    color: theme.palette.text.secondary,
  },
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent className={classes.content}>
        <Typography className={classes.header} variant="h5">
          Olivia Moses
        </Typography>
        <Typography variant="body1" className={classes.text}>
          My name is Olivia Moses and I'm a software engineer from Arkansas,
          currently living in the Rochester, New York area. I've moved across
          the country to find a job where I can build impactful, robust coding
          solutions to everyday problems.
        </Typography>
        <Typography variant="body1" className={classes.text}>
          I'm currently working for Bandwidth, Inc. in Rochester NY and building
          applications that impact millions of phone calls every day. (Maybe
          yours too!)
        </Typography>
        <Typography variant="body1" className={classes.text}>
          In my free time, I like to play guitar, collect MTG/Pokemon cards,
          draw, and play video games.
        </Typography>

        <Typography variant="h5" className={classes.header}>
          Favorite Games
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <FiberManualRecordIcon className={classes.innerIcon} />
            </ListItemIcon>
            <Typography className={classes.game}>
              OMORI (please play this)
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <FiberManualRecordIcon className={classes.innerIcon} />
            </ListItemIcon>
            <Typography className={classes.game}>Pokemon FireRed</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <FiberManualRecordIcon className={classes.innerIcon} />
            </ListItemIcon>
            <Typography className={classes.game}>
              Super Mario Sunshine
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <FiberManualRecordIcon className={classes.innerIcon} />
            </ListItemIcon>
            <Typography className={classes.game}>League of Legends</Typography>
          </ListItem>
          <ListItem>
            <ListItemIcon className={classes.icon}>
              <FiberManualRecordIcon className={classes.innerIcon} />
            </ListItemIcon>
            <Typography className={classes.game}>World of Warcraft</Typography>
          </ListItem>
        </List>
      </CardContent>
      <CardContent className={classes.mediaContent}>
        <CardMedia className={classes.media} image={me} />
      </CardContent>
    </Card>
  );
}
