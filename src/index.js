import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { userLoggedIn } from './actions/auth';

import { createStore, applyMiddleware, compose } from 'redux';
import AppReducer from './reducers/index';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(AppReducer, composeEnhancer(applyMiddleware(thunk)))

if (localStorage.bookwormJWT) {
    const user = {token: localStorage.bookwormJWT}
    store.dispatch(userLoggedIn(user))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


serviceWorker.unregister();
