import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Link } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails'

class Home extends Component {
    render() {
        const listId = ""
        return (

            <div className="container">
                <div className="introduction">
                        <div className="info">Planning to start an eatery in the city? Confused about it's location? </div>
                        <div>Enter the details of the restaurant and
                        the prospective areas you have in mind to get a comparison about them
                        along with new location suggestions!</div>

                </div>
                <Router>
                    <Route path="/" component={RestaurantDetails} exact />
                    <Route path="/home" component={RestaurantDetails} exact />
                </Router>
            </div>

        )
    }
}

export default Home;