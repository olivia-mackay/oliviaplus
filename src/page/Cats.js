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
const exif = require("exif-parser");
const util = require("util");

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
  const image = props.image;
  const classes = useStyles();
  const imageReq = require(`../resources/cats/bulk/${image}`);
  const imageSrc = imageReq.default;

  const [flipped, setFlipped] = React.useState(false);

  var date;
  const handleClick = async () => {
    console.log("flipping cat card");
    setFlipped(!flipped);

    const fr = new FileReader();

    var buffer;
    fr.onload = () => {
      buffer = fr.result;
      console.log(`buffer: ${buffer}, ${buffer.length}`);

      const parser = exif.create(buffer);
      date = parser.parse();

      console.log(`result: ${util.inspect(date)}`);
    };

    // update date with onload callback
    const location = `resources/cats/bulk/${image}`;
    await fetch(location)
      .then((data) => {
        console.log(`data fetched from ${location}: ${util.inspect(data)}`);
        fr.readAsArrayBuffer(new File([data.body.blob], image));
      })
      .catch((err) => {
        console.log(`error fetching: ${err}`);
      });
  };

  return (
    <Card onClick={handleClick} className={classes.card}>
      <CardMedia
        style={{ opacity: flipped ? "0%" : "100%" }}
        className={classes.media}
        image={imageSrc}
      />
      <CardContent
        style={{ opacity: flipped ? "100%" : "0%" }}
        className={classes.cardBack}
      >
        <Typography>Picture taken {date}</Typography>
      </CardContent>
    </Card>
  );
}

export default function Cats() {
  const classes = useStyles();
  const images = importAll(
    require.context(
      `${process.env.PUBLIC_URL}/resources/cats/bulk`,
      false,
      /\.(png|jpg|jpeg|gif)$/
    )
  );

  const scarf = require(`${process.env.PUBLIC_URL}/resources/cats/scarf.jpg`);
  const butter = require(`${process.env.PUBLIC_URL}/resources/cats/butter.jpg`);

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
