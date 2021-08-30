import React from 'react';
import { AppBar, Container, Grid, Grow, Typography } from '@material-ui/core';
import memories from './images/memories.png';
import Posts from './Posts/Posts.jsx';
import Form from './Form/Form.jsx';

import useStyles from './styles.js';

export default function App() {

    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                <img className={classes.image} src={memories} alt="memories" height="60" />
            </AppBar>

            <Grow in>
                <Container>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>

        </Container>
    )
}