import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';

class Biography extends React.Component {
    constructor(props) {
        super(props)
        console.log('loading biography page')
    }

    render() {
        return (
            <React.Fragment>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt="Olivia Moses" src="/public/me.png" />
                    </ListItemAvatar>
                    <ListItemText>Olivia Moses</ListItemText>
                </ListItem>
            </React.Fragment>
        )
    }
}