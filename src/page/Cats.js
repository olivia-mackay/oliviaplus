import {
  Card,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography
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

const cardHeight = 35;

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: theme.spacing(2),
    overflow: "hidden",
    width: "100%",
  },
  headerCards: {
    // container
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  headerMedia: {
    margin: theme.spacing(2),
    height: theme.spacing(35),
    width: theme.spacing(35),
  },
  headerContent: {
    display: "flex",
    flexDirection: "column",
    maxWidth: theme.spacing(40),
    justifyContent: "center",
    alignItems: "center",
  },
  caption: {
    display: "flex",
    flexWrap: "wrap",
  },
  scarf: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    margin: theme.spacing(2),
    minWidth: theme.spacing(80),
    maxWidth: theme.spacing(80),
  },
  butter: {
    display: "flex",
    flexDirection: "row",
    margin: theme.spacing(2),
    minWidth: theme.spacing(80),
    maxWidth: theme.spacing(80),
  },
  gallery: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    overflow: "hidden",
    justifyContent: "left",
    alignItems: "left",
    margin: 0,
    padding: 0,
    width: "100%",
    minWidth: "100%",
  },
  galleryMedia: {
    height: "100%",
    width: "100%",
  },
  catCard: {
    minWidth: theme.spacing(40),
  },
  invisible: {
    opacity: 0,
    zIndex: -1,
  },
  animated: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
  },
  front: {
    margin: theme.spacing(2),
    height: theme.spacing(cardHeight),
    width: theme.spacing(cardHeight),
    padding: theme.spacing(2),
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
      {
        // invisible background card to take up space when we zoom
      }
      <Card className={classes.invisible} />
      <animated.div
        onClick={zoom ? shrink : grow}
        onMouseLeave={shrink}
        className={classes.animated}
        style={{
          transform: springProps.xys.to(trans),
        }}
      >
        <Card className={classes.front}>
          <CardMedia className={classes.galleryMedia} image={imageReq} />
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
    <div className={classes.page}>
      <Container className={classes.headerCards}>
        <Card className={classes.scarf}>
          <CardMedia className={classes.headerMedia} image={scarf} />
          <CardContent className={classes.headerContent}>
            <Typography variant="h5">Scarf</Typography>
            <Typography className={classes.caption} variant="caption">
              Adopted July 2017 as a 1.5-year-old shelter cat in Arkadelphia,
              Arkansas. Rambunctious, friendly, troublemaker.
            </Typography>
          </CardContent>
        </Card>
        <Card className={classes.butter}>
          <CardMedia className={classes.headerMedia} image={butter} />
          <CardContent className={classes.headerContent}>
            <Typography variant="h5">Butter</Typography>
            <Typography className={classes.caption} variant="caption">
              Adopted May 2018 as a foster kitten in Webster, New York. Timid,
              cuddly, also a troublemaker.
            </Typography>
          </CardContent>
        </Card>
      </Container>
      <Container className={classes.gallery}>
        {images.map((image) => {
          return <CatCard key={image} image={image} />;
        })}
      </Container>
    </div>
  );
}
