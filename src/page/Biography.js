import { Avatar, Grid, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';

class Biography extends React.Component {
    constructor(props) {
        super(props)
        console.log('loading biography page')
    }

    render() {
        return (
            <React.Fragment>
                <Grid container spacing={4}>
                    <Grid item xs={4}>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar alt="Olivia Moses" variant='rounded'
                                    src={`${process.env.PUBLIC_URL}/me.png`} />
                            </ListItemAvatar>
                            <ListItemText>Olivia Moses</ListItemText>
                        </ListItem>
                    </Grid>
                </Grid>
            </React.Fragment>
        )
    }
}

export default Biography;
