import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Redirect, Link } from 'react-router-dom';
import RestaurantDetails from './RestaurantDetails'

class Home extends Component {
    render() {
        const listId = ""
        return (

            <div className="container">
                <div className="introduction">
                    <form>
                        <h6>Planning to start an eatery in the city? Confused about it's location? </h6>
                        <h6>Enter the details of the restaurant and</h6>
                        <h6>the prospective areas you have in mind to get a comparison about them </h6>
                        <h6>along with new location suggestions!</h6>
                    </form>

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