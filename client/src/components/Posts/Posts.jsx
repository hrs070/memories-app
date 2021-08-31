import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import SinglePost from './SinglePost/SinglePost.jsx';

import { useSelector } from 'react-redux';
import useStyles from './styles.js';



export default function Posts({ setCurrentId }) {
    const classes = useStyles();
    const posts = useSelector((state) => state.postsReducer);

    console.log(posts)

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <SinglePost post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}