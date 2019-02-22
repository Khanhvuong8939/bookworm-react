import React, { Component } from 'react'

import { Route, Link } from 'react-router-dom';

const menus = [
    {
        to: '/',
        label: 'HomePage'
    },
    {
        to: '/dashboard',
        label: 'Dashboard'
    },
    {
        to: '/login',
        label: 'Login'
    }

]

const MenuLink = ({ label, to, exact }) => (
    <Route
        path={to}
        exact={exact}
        children={({ match }) => (
            <li className={match ? 'active' : ''}>
                <Link to={to}>{label}</Link>
            </li>
        )}
    />
);


class Menu extends Component {



    render() {
        return (
            <nav className="navbar navbar-inverse">
                <ul className="nav navbar-nav">.
                    {this.showMenus(menus)}
                </ul>
            </nav>
        )
    }

    showMenus = menus => {
        var result = null;
        if (menus.length >= 0) {
            result = menus.map((menu, index) => {
                return <MenuLink to={menu.to} label={menu.label} exact={menu.exact} key={index} />
            })
        }

        return result;
    }
}

export default Menu