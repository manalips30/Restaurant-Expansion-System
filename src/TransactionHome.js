import React, { Component } from 'react';
import {BrowserRouter as Router, Route, NavLink, Redirect, Link} from 'react-router-dom';
import OpenServiceRequest from './OpenServiceRequest';
import TransactionInProgress from './TransactionInProgress';
import TransactionResolved from './TransactionResolved';
import TransactionDetail from './TransactionDetail';

class TransactionHome extends Component {
    render() {
        const listId=""
      return (
          
            <div className="container">
                <Router>
                <nav className="navbar navbar-expand-lg navbar-light  navbar-default navbar-fixed-top">
                    <div>
                        <ul className="navbar-nav">
                            <li  id="open">
                                <NavLink to="/home" activeClassName="navbar2_li--active">Restaurant Expansion System</NavLink>
                            </li>
                        </ul>  
                    </div>
                </nav>

                <Route path="/" component={OpenServiceRequest} exact/>
                <Route path="/home" component={OpenServiceRequest} exact/>
                                
                </Router>
            </div>
            
      )
    }
}

export default TransactionHome;