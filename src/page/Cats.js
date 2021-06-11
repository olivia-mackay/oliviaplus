import { Avatar, Container, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Cats() {
  return (
    <Container>
      <Typography variant="body1" className="text">
        Here is a paragraph about my cats!
      </Typography>
      <Grid container className="gridContainer">
        <Grid item className="gridItem">
          <Avatar
            variant="rounded"
            className="avatar"
            alt="Scarf"
            src={`${process.env.PUBLIC_URL}/cats/scarf.jpg`}
          ></Avatar>
        </Grid>
        <Grid item className="gridItem">
          <Avatar
            variant="rounded"
            className="avatar"
            alt="Butter"
            src={`${process.env.PUBLIC_URL}/cats/butter.jpg`}
          ></Avatar>
        </Grid>
      </Grid>
    </Container>
  );
}
