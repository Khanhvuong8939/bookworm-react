import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage'
import LoginPage from './components/pages/LoginPage'
import NotFoundPage from './components/pages/NotFoundPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <nav className="navbar navbar-inverse">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          <div className="container">
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/login' exact component={LoginPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
