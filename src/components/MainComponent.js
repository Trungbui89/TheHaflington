import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';

function Main() {

    const HomePage = () => {
        return (
            <Home />
        )
    }

    return (
        <div>
            <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
            <Footer />
        </div>
    )
}

export default Main