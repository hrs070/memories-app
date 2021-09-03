import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Navbar/Navbar.jsx';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './Home/Home.jsx';
import Auth from './Auth/Auth.jsx';

export default function App() {

    return (
        <HashRouter>
            <Container maxWidth="lg">
                <Navbar />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/auth' component={Auth} />
                </Switch>
            </Container >
        </HashRouter>
    )
}