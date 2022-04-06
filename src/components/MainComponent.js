import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/home/Home';
import News from './layout/news/News';

const mapStateToProps = (state) => {
    return {
        news: state.news
    }
}

class Main extends Component {

    render() {

        const HomePage = () => {
            return (
                <Home />
            )
        }
    
        const NewsPage = () => {
            return (
                <News news={this.props.news}/>
            )
        }

        return (
            <div>
                <Header />
                    <Switch>
                        <Route exact path='/TheHaflington' component={HomePage} />
                        <Route exact path='/TheHaflington/news' component={NewsPage} />
                        <Redirect to="/TheHaflington" />
                    </Switch>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main)) 