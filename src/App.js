import React, { Component } from 'react';
import './App.css';
import TransactionHome from './TransactionHome';
import ServiceRequest from './ServiceRequest';
import {BrowserRouter, Router, Switch, Route, NavLink, HashRouter} from 'react-router-dom';
import TransactionDetail from './TransactionDetail';


class App extends Component {

  changeClass(e){
    console.log(e.target);
  }

  render() {
    return (
      <BrowserRouter>
     
      <div className="App">
        <div className="wrapper">
            <nav id="sidebar">
            <div className="sidebar-header">
                <h3></h3>
            </div>
            <ul className="list">
                <li>
                    <a href="/" >Home</a>
                </li>
                <li>
                  <NavLink to="/serviceRequest" activeClassName="navbar__link--active" exact>Analysis</NavLink>
                </li>
                <li>
                    <NavLink to="/routes"  activeClassName="navbar__link--active" exact>About</NavLink>
                </li>
            </ul>
            </nav>
            
              <Switch>
                <Route path="/" component={TransactionHome} exact/>
                <Route path="/serviceRequest" component={ServiceRequest} exact />
                <Route path="/transactionDetail/:trans" component={TransactionDetail} exact/>
              </Switch>
              
        </div>
        
        
      </div>
     
      </BrowserRouter>
    );
  }
}

export default App;