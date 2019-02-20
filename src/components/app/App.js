import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './../../routes';
import Menu from '../menu/Menu';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Menu />
                    <div className="container">
                        {this.showContentMenus(routes)}
                    </div>
                </div>
            </Router>
        );
    }
    showContentMenus = routes => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return <Route path={route.path} exact={route.exact} component={route.main} key={index} />
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
