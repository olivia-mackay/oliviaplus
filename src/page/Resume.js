import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";

function download(url, filename) {
  var a = document.createElement("a");
  a.href = url;
  a.setAttribute("download", filename);
  a.click();
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 0,
    margin: 0,
    minWidth: theme.spacing(100),
  },
  card: {
    margin: theme.spacing(2),
    minWidth: theme.spacing(75),
    width: theme.spacing(75),
    maxWidth: theme.spacing(75),
  },
  horizontal: {
    flexDirection: "row",
    margin: 0,
    padding: 0,
  },
  buttonItem: {
    display: "flex",
    position: "absolute",
    right: 0,
    top: theme.spacing(8),
  },
  title: {
    paddingBottom: theme.spacing(1),
  },
  button: {
    height: theme.spacing(10),
    minWidth: theme.spacing(25),
    width: theme.spacing(25),
    backgroundColor: theme.palette.accent.main,
    margin: theme.spacing(2),
    position: "relative",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  projects: {
    minWidth: theme.spacing(100),
  },
}));

export default function Resume() {
  const resume = require("../resources/resume.pdf");

  const handleClick = () => {
    download(resume, "olivia-resume-2021.pdf");
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container className={classes.horizontal}>
        <Grid item className={classes.projects}>
          <Container className={classes.container}>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  HardSubScript
                </Typography>
                <Typography variant="body1">
                  A bash script that leverages gawk and ffmpeg to hard-encode
                  subtitles onto videos with separate subtitle tracks.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  DiscordPlays
                </Typography>
                <Typography variant="body1">
                  A Discord chat listener for integration with RetroArch for
                  crowdsourced game-playing à la TwitchPlaysPokemon.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  ScarfBot
                </Typography>
                <Typography variant="body1">
                  A Discord chat bot with various features, including a
                  hydration tracker for my friends to make sure we stay
                  hydrated. :)
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Ferret ETL
                </Typography>
                <Typography variant="body1">
                  Extract/Transform/Load application for gathering call-routing
                  optimization data. This data was used to improve toll-free
                  revenue across our entire network.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Iris Ride-Along
                </Typography>
                <Typography variant="body1">
                  Spent a week with our frontend development team to learn their
                  GWT codebase to enable my backend team to complete our
                  required UI work on our own. This freed us from an external
                  dependency which increased our turnaround time.
                </Typography>
              </CardContent>
            </Card>
            <Card className={classes.card}>
              <CardContent>
                <Typography className={classes.title} variant="h5">
                  Roger Maintenance Mode
                </Typography>
                <Typography variant="body1">
                  Request-blocking mechanism within call routing engines to
                  prevent customer data provisioning during maintenance windows.
                  The legacy system where this was implemented uses lots of
                  legacy code, so this mechanism had a few different facets.
                </Typography>
              </CardContent>
            </Card>
          </Container>
        </Grid>
        <Grid item className={classes.buttonItem}>
          <Button className={classes.button} onClick={handleClick}>
            Full Résumé Download
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
