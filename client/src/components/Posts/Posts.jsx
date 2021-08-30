import React from 'react';
import SinglePost from './SinglePost/SinglePost';

import useStyles from './styles.js';



export default function Posts() {
    const classes = useStyles();

    return (
        <div>
            Posts
            <SinglePost />
        </div>
    )
}