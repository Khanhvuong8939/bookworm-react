import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { userLoggedIn } from './actions/auth';
import decode from 'jwt-decode'
import { createStore, applyMiddleware, compose } from 'redux';
import AppReducer from './reducers/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(AppReducer, composeEnhancer(applyMiddleware(thunk)))

if (localStorage.bookwormJWT) {
    const payload = decode(localStorage.bookwormJWT)
    const user = { 
        token: localStorage.bookwormJWT ,
        email: payload.email,
        confirmed: payload.confirmed
    }
    console.log(user)
    store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <Route component={App} />
        </Provider>
    </Router>
    , document.getElementById('root'));


serviceWorker.unregister();
