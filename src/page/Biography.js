import { Card, CardMedia, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  text: {},
  text2: {},
  card: {},
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.text}>
        My name is Olivia Moses and I'm a software engineer from Arkansas who's
        traveled across the country to do great things!
      </Typography>
      <Typography variant="body1" className={classes.text2}>
        I'm currently working for Bandwidth, Inc. in Rochester NY and building
        applications that impact millions of phone calls every day.
      </Typography>
      <Typography variant="body1" className={classes.text2}>
        In my free time, I like to play guitar, collect MTG/Pokemon cards, draw,
        play video games, and much more. Some of my favorite games are Pokemon
        FireRed, OMORI, and Bloodborne.
      </Typography>
      <Card className={classes.card}>
        <CardMedia src={`${process.env.PUBLIC_URL}/me.png`} />
      </Card>
    </React.Fragment>
  );
}
