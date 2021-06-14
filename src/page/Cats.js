import { Card, CardMedia, Container, makeStyles } from "@material-ui/core";
import React from "react";

const importAll = (requireContext) => {
  const images = [];
  requireContext.keys().forEach((key) => {
    images.push(key.replace("./", ""));
  });
  return images;
};

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: '1000px'
  },
  card: {
    margin: theme.spacing(1),
    width: theme.spacing(35),
  },
  media: {
    height: theme.spacing(35),
    width: theme.spacing(35),
  },
}));

function CatCard(props) {
  const image = props.image;
  const classes = useStyles();
  const imageSrc = require(`../images/cats/${image}`);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageSrc.default} />
    </Card>
  );
}

export default function Cats() {
  const classes = useStyles();
  const images = importAll(
    require.context("../images/cats", false, /\.(png|jpg)$/)
  );

  return (
    <Container className={classes.container}>
      {images.map((image) => {
        return <CatCard key={image} image={image} />;
      })}
    </Container>
  );
}
