import { Avatar, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  text: {
    marginTop: "25px",
  },
}));

export default function Biography() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.text}>
        My name is Olivia Moses and I'm a software engineer from Arkansas who's
        traveled across the country to do great things!
      </Typography>
      <Avatar
        alt="it me!"
        variant="rounded"
        src={`${process.env.PUBLIC_URL}/me.png`}
      />
    </React.Fragment>
  );
}
