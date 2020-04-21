import React from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect,useParams} from 'react-router-dom';

class TransactionDetail extends React.Component {
    
    render() {
        return(
            <div className="about">
            <blockquote class="blockquote text-center">
                <h5>Planning to start an eatery in the city? Confused about it's location? </h5>
                <h5>Confused about it's location? Enter the details of the restaurant and</h5>
                <h5>the perspective areas you have in mind to get a comparison about them </h5>
                <h5>along with new location suggestions!</h5>
                </blockquote>
            </div>    
        )
    }
}

export default TransactionDetail;