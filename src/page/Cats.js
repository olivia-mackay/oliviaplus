import { Card, CardMedia } from "@material-ui/core";
import React from "react";

function importAll(r) {
  const images = {};
  return r.keys().map((item) => {
    console.log(`key item: ${item}`);
    images[item.replace("./", "")] = r(item);
  });
}

function CatCard(props) {
  const image = props.image;
  return (
    <Card>
      <CardMedia image={image} />
    </Card>
  );
}

export default function Cats() {
  const images = importAll(
    require.context("./images/cats", false, /\.(png|jpg)$/)
  );

  return images.map((image) => {
    return <CatCard key={image} image={image} />;
  });
}
