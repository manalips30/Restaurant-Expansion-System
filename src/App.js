import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Analysis from './Analysis';
import {BrowserRouter, Router, Switch, Route, NavLink, HashRouter} from 'react-router-dom';
import About from './About';


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
                  <NavLink to="/analysis" activeClassName="navbar__link--active" exact>Analysis</NavLink>
                </li>
                <li>
                    <NavLink to="/about"  activeClassName="navbar__link--active" exact>About</NavLink>
                </li>
            </ul>
            </nav>
            
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/analysis" component={Analysis} exact />
                <Route path="/about" component={About} exact />
              </Switch>
              
        </div>
        
        
      </div>
     
      </BrowserRouter>
    );
  }
}

export default App;