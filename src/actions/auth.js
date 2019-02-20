import { USER_LOGGED_IN } from './../constants/types';
import api from '../api/api';

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        localStorage.setItem('bookwormJWT', user.token)
        dispatch(userLoggedIn(user))
    });
