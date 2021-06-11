import { Avatar, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const styles = makeStyles((theme) => ({
  horizontal: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
}));

export default function Cats() {
  const classes = styles();

  return (
    <Container>
      <Grid container>
        <Grid item className={classes.horizontal}>
          <Avatar
            alt="butter"
            variant="rounded"
            className={classes.large}
            src={`${process.env.PUBLIC_URL}/cats/butter.jpg`}
          ></Avatar>
          <Avatar
            alt="scarf"
            variant="rounded"
            className={classes.large}
            src={`${process.env.PUBLIC_URL}/cats/scarf.jpg`}
          ></Avatar>
          <p>Here is a paragraph about my cats!</p>
        </Grid>
      </Grid>
    </Container>
  );
}
