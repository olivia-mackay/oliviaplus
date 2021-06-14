import {
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import me from "../images/me.png";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "row",
  },
  media: {
    height: theme.spacing(50),
    width: "35%",
    margin: theme.spacing(2),
  },
  text: { marginBottom: "15px" },
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={me} />
        <CardContent>
          <Typography variant="h6" className={classes.text}>
            My name is Olivia Moses and I'm a software engineer from Arkansas
            who's traveled across the country to do great things!
          </Typography>
          <Typography variant="body1" className={classes.text}>
            I'm currently working for Bandwidth, Inc. in Rochester NY and
            building applications that impact millions of phone calls every day.
          </Typography>
          <Typography variant="body1" className={classes.text}>
            In my free time, I like to play guitar, collect MTG/Pokemon cards,
            draw, play video games, and much more. Some of my favorite games are
            Pokemon FireRed, OMORI, and Bloodborne.
          </Typography>
          <Typography variant="caption">
            (placeholder for an actual image of me)
          </Typography>
        </CardContent>
      </Card>
    </React.Fragment>
  );
}
