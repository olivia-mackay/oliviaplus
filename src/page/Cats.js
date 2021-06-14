import { Avatar, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  grid: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    marginLeft: "15px",
    paddingTop: "100px",
    fontSize: "10rem",
  },
  paper: {
    display: "flex",
    flexDirection: "row",
    minWidth: "900px",
    width: "300px",
    paddingLeft: "-15px",
    marginBottom: "15px",
    background: theme.palette.secondary.main,
    elevation: 0,
  },
}));

export default function Cats() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid item>
        <Paper className={classes.paper}>
          <Avatar
            alt="Scarf"
            variant="rounded"
            src={`${process.env.PUBLIC_URL}/cats/scarf.jpg`}
          />
          <Typography className={classes.text} variant="h5">
            Scarf
          </Typography>
        </Paper>
      </Grid>
      <Grid item>
        <Paper className={classes.paper}>
          <Avatar
            alt="Butter"
            variant="rounded"
            src={`${process.env.PUBLIC_URL}/cats/butter.jpg`}
          />
          <Typography className={classes.text} variant="h5">
            Butter
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
