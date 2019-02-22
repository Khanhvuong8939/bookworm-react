import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import UserRoute from './../routes/UserRoute'
import GuestRoute from './../routes/GuestRoute'
import routes from './../../routes';
import Menu from '../menu/Menu';


class App extends Component {
    render() {
        return (
            <div>
                <Menu />
                <div className="container">
                    {this.showContentMenus(routes)}
                </div>
                {/* <RouteTest/> */}
            </div>
        );
    }
    showContentMenus = routes => {
        var { location } = this.props;
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                if (route.role === 'guest') { return <GuestRoute localtion={location} path={route.path} exact={route.exact} component={route.main} key={index} /> }
                else if (route.role === 'user') { return <UserRoute localtion={location} path={route.path} exact={route.exact} component={route.main} key={index} /> }
                else return <Route localtion={location} path={route.path} exact={route.exact} component={route.main} key={index} />
            })
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
