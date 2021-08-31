import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import Input from './Input.jsx';
import useStyles from './styles.js';

import { useDispatch } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';


export default function Auth() {
    const classes = useStyles();

    const [showPassword, setShowPassword] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    function handleSubmit(e) {
        e.preventDefault();
    }
    function handleChange() {

    }
    function handleShowPassword() {
        setShowPassword((prev) => !prev);
    }
    function switchMode() {
        setIsSignUp((prev) => !prev);
        setShowPassword(false);
    }
    async function googleSucces(res) {
        const result = res?.profileObj;
        const token = res?.tokenId;
        try {
            dispatch({ type: 'AUTH', data: { result, token } });
            history.push('/')
        } catch (error) {
            console.log(error);
        }

    }
    function googleFailure() {
        console.log('Google Sign In failed');
    }

    return (
        <Container component='main' maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}><LockOutlineIcon /></Avatar>
                <Typography variant="h5">{isSignUp ? "Sign Up" : "Sign In"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                        {isSignUp && <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange} type="password" />}
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </Button>
                    <GoogleLogin
                        clientId="306983694791-3ck51cc4c1ug6rgvn905gfdcaiu2vbbo.apps.googleusercontent.com"
                        render={(renderProps) => (
                            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained" >
                                Google Sign In
                            </Button>
                        )} onSuccess={googleSucces} onFailure={googleFailure} cookiePolicy="single_host_origin"
                    />

                    <Grid item>
                        <Button onClick={switchMode} fullWidth variant="contained">
                            {isSignUp ? "Already have an account ? Sign In" : "Don't have an acoount ? Sign Up"}
                        </Button>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}