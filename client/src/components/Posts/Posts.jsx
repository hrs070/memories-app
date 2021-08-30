import React from 'react';
import SinglePost from './SinglePost/SinglePost.jsx';

import { useSelector } from 'react-redux';
import useStyles from './styles.js';



export default function Posts() {
    const classes = useStyles();
    const posts = useSelector((state) => state.postsReducer);

    console.log(posts)

    return (
        <div>
            Posts
            <SinglePost />
        </div>
    )
}