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
    margin: theme.spacing(2),
    height: theme.spacing(35),
    width: theme.spacing(35),
  },
  cardBack: {
    position: "relative",
    top: "-100%",
  },
  media: {
    height: "95%",
    margin: theme.spacing(1),
  },
  headerMedia: {
    margin: theme.spacing(2),
    height: theme.spacing(35),
    width: theme.spacing(35),
  },
  content: {
    display: "flex",
    flexDirection: "column",
    maxWidth: theme.spacing(40),
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
    maxWidth: "100%",
  },
}));

function CatCard(props) {
  const classes = useStyles();

  const image = props.image;
  const imageReq = require(`../resources/cats/bulk/${image}`);

  const shrink = () => {
    console.log("shrinking element");
  };

  const grow = () => {
    console.log("growing element");
  };

  return (
    <Card onMouseEnter={grow} onMouseLeave={shrink} className={classes.card}>
      <CardMedia className={classes.media} image={imageReq} />
    </Card>
  );
}

export default function Cats() {
  const classes = useStyles();
  const images = importAll(
    require.context(`../resources/cats/bulk`, false, /\.(png|jpg|jpeg|gif)$/)
  );

  const scarf = require(`../resources/cats/scarf.jpg`);
  const butter = require(`../resources/cats/butter.jpg`);

  return (
    <React.Fragment>
      <Grid container>
        <Grid item>
          <Card className={classes.horizontal}>
            <Grid container alignItems="center">
              <Grid item>
                <CardMedia className={classes.headerMedia} image={scarf} />
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
                <CardMedia className={classes.headerMedia} image={butter} />
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
