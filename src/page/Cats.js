import { Avatar, Card, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  grid: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    paddingTop: "90px",
    paddingLeft: "150px",
    fontSize: "10rem",
  },
}));

export default function Cats() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item>
        <Card>
          <Avatar
            alt="Scarf"
            variant="rounded"
            src={`${process.env.PUBLIC_URL}/cats/scarf.jpg`}
          />
          <Typography className={classes.text} variant="h5">
            Scarf
          </Typography>
        </Card>
      </Grid>
      <Grid item>
        <Card>
          <Avatar
            alt="Butter"
            variant="rounded"
            src={`${process.env.PUBLIC_URL}/cats/butter.jpg`}
          />
          <Typography className={classes.text} variant="h5">
            Butter
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
}
