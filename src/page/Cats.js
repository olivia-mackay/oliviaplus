import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import { animated, useSpring } from "react-spring";

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
    minWidth: theme.spacing(35),
    width: theme.spacing(35),
    padding: 0,
  },
  card2: {
    margin: theme.spacing(2),
    height: theme.spacing(35),
    minWidth: theme.spacing(35),
    width: theme.spacing(35),
    padding: 0,
    top: -theme.spacing(35),
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
  catCard: {
    minWidth: theme.spacing(40),
  },
}));

function CatCard(props) {
  const classes = useStyles();

  const image = props.image;
  const imageReq = require(`../resources/cats/bulk/${image}`);

  const [zoom, setZoom] = React.useState(false);
  const [springProps, set] = useSpring(() => ({
    xys: [0, 0, 1], // initial state
  }));

  const trans = (x, y, s) => `scale(${s})`; // actually do the css function

  const shrink = ({ clientX: x, clientY: y }) => {
    console.log(`shrinking element ${x} ${y}`);
    set({ xys: [0, 0, 1] }); // scale back to normal
    setZoom(false);
  };

  const grow = ({ clientX: x, clientY: y }) => {
    console.log(`growing element ${x} ${y}`);
    setZoom(true);
    set({ xys: [0, 0, 2] }); // scale to 2s
  };

  return (
    <div className={classes.catCard}>
      <Card className={classes.card} style={{ position: "relative" }} />
      <animated.div
        onClick={zoom ? shrink : grow}
        onMouseLeave={shrink}
        style={{
          transform: springProps.xys.to(trans),
          position: "relative",
          zIndex: zoom ? 1 : 0,
        }}
      >
        <Card
          className={classes.card2}
          style={{
            position: "relative",
            zIndex: zoom ? 1 : 0,
          }}
        >
          <CardMedia className={classes.media} image={imageReq} />
        </Card>
      </animated.div>
    </div>
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
