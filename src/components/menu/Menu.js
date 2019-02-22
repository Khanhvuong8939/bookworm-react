import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth'


const menus = [
    {
        to: '/',
        label: 'HomePage'
    },
    {
        to: '/dashboard',
        label: 'Dashboard'
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
        var { isAuthenticated } = this.props;
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        {this.showMenus(menus)}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {this.showLoginStatus(isAuthenticated)}
                    </ul>

                </div>
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

    showLoginStatus = isAuthenticated => (
        isAuthenticated ?
            <button
                type="button"
                className="btn btn-danger mt-7 mr-7"
                onClick={() => this.logout()}
            >logout
            </button>
            :
            (<Link
                to='/login'
                className="btn btn-success mt-7 mr-7"
            >login
                </Link>)
            
            (<Link
                to='/signup'
                className="btn btn-success ml-5"
            >Sign up
                </Link>)
    )


    logout = () => {
        this.props.logout();
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: !!state.user.token
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)