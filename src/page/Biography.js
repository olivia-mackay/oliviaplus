import {
  Avatar
} from "@material-ui/core";
import React from "react";

export default function Biography() {
  return (
    <Avatar
      alt="Olivia Moses"
      variant="rounded"
      src={`${process.env.PUBLIC_URL}/me.png`}
    />
  );
}
