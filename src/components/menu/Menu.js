import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './../../actions/auth'
import gravatarUrl from 'gravatar-url'


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
                    <div class="navbar-header">
                        <ul className="nav navbar-nav">
                            {this.showMenus(menus)}
                        </ul>
                    </div>
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
            // <button
            //     type="button"
            //     className="btn btn-danger mt-7 mr-7"
            //     onClick={() => this.logout()}
            // >logout
            // </button>
            this.showLoggout()
            :
            <Link
                to='/login'
                className="btn btn-success mt-7 mr-7"
            >login
                </Link>
    )

    showLoggout = () => (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src={gravatarUrl(this.props.user.email)} className="profile-image img-circle"/> Username <b className="caret" />
            </a>
            <ul className="dropdown-menu">
                <li><a href="#"><i className="fa fa-cog"></i> Account</a></li>
                <li className="divider"></li>
                <li><button onClick={()=>this.logout()}><i className="fa fa-sign-out"></i> Sign-out</button></li>
            </ul>
        </li>
     )


    logout = () => {
        this.props.logout();
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
        isAuthenticated: !!state.user.token
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu)