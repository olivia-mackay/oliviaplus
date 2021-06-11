import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from "@material-ui/core";
import React from "react";

export default function Biography() {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            alt="Olivia Moses"
            variant="rounded"
            src={`${process.env.PUBLIC_URL}/me.png`}
          />
        </ListItemAvatar>
        <ListItemText>Olivia Moses</ListItemText>
      </ListItem>
    </React.Fragment>
  );
}
