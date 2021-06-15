import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import butter from "../images/cats/butter.jpg";
import scarf from "../images/cats/scarf.jpg";

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
    maxWidth: "100%",
    minWidth: "100%",
    width: "100%",
    padding: "0px",
    overflow: "hidden",
  },
  card: {
    margin: theme.spacing(1),
  },
  media: {
    height: theme.spacing(35),
    width: theme.spacing(35),
    margin: theme.spacing(2),
  },
  horizontal: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(2),
    minWidth: theme.spacing(80),
    maxWidth: theme.spacing(80),
  },
  horizontal2: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(2),
    minWidth: theme.spacing(80),
    maxWidth: theme.spacing(80),
  },
  gallery: {
    minWidth: "100%",
    width: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    minWidth: theme.spacing(40),
    maxWidth: theme.spacing(40),
  },
}));

function CatCard(props) {
  const image = props.image;
  const classes = useStyles();
  const imageSrc = require(`../images/cats/bulk/${image}`);

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={imageSrc.default} />
    </Card>
  );
}

export default function Cats() {
  const classes = useStyles();
  const images = importAll(
    require.context("../images/cats/bulk", false, /\.(png|jpg)$/)
  );

  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Card className={classes.horizontal}>
            <Grid container alignItems="center">
              <Grid item>
                <CardMedia className={classes.media} image={scarf} />
              </Grid>
              <Grid item>
                <CardContent className={classes.content}>
                  <Typography variant="h5">Scarf</Typography>
                  <Typography variant="caption">
                    Adopted July 2017 as a 1.5-year-old shelter cat in
                    Arkadelphia, Arkansas. Rambunctious, friendly, troublemaker.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item>
          <Card className={classes.horizontal2}>
            <Grid container alignItems="center">
              <Grid item>
                <CardMedia className={classes.media} image={butter} />
              </Grid>
              <Grid item>
                <CardContent className={classes.content}>
                  <Typography variant="h5">Butter</Typography>
                  <Typography variant="caption">
                    Adopted May 2018 as a foster kitten in Webster, New York.
                    Timid, cuddly, also a troublemaker.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Container className={classes.container}>
        {images.map((image) => {
          return <CatCard key={image} image={image} />;
        })}
      </Container>
    </React.Fragment>
  );
}
