import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './layout/home/Home';
import News from './layout/news/News';
import NewDetail from './layout/news/NewsDetail';

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

        const NewsInfo = ({match}) => {
            return (
                <NewDetail 
                    newsInfo={this.props.news.news.filter((info) => {
                        return (info.id === parseInt(match.params.newsId,10))
                    })[0]}
                />
            )
        }

        return (
            <div>
                <Header />
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames='page' timeout={600}>
                        <Switch>
                            <Route exact path='/TheHaflington' component={HomePage} />
                            <Route exact path='/TheHaflington/news' component={NewsPage} />
                            <Route path='/TheHaflington/news/:newsId' component={NewsInfo} />
                            <Redirect to="/TheHaflington" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main)) 