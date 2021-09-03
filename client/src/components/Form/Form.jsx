import React, { useState, useEffect } from 'react';
import FileBase from 'react-file-base64';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles.js';

import { useDispatch, useSelector } from 'react-redux';
import { createPosts, updatePosts } from '../../context/actions/postsAction.js';

export default function Form({ currentId, setCurrentId }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [postData, setPostData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const user = JSON.parse(localStorage.getItem('profile'));

    const post = useSelector((state) => currentId ? state.postsReducer.find((post) => post._id === currentId) : null)
    useEffect(() => {
        if (post) setPostData(post);
        console.log(post);
    }, [post])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (currentId) {
            dispatch(updatePosts(currentId, { ...postData, name: user?.result?.name }));
        } else {
            dispatch(createPosts({ ...postData, name: user?.result?.name }));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ title: '', message: '', tags: '', selectedFile: '' })
    }

    return (

        <Paper className={classes.paper}>

            {
                (!user?.result?.name) ?
                    <Typography variant="h6" align="center">Please Sign In</Typography>
                    :
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Memory</Typography>
                        {/* <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
                        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
                        <div className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        </div>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                    </form>
            }
        </Paper>
    )
}