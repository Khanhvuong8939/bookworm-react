import {USER_LOGGED_IN} from './../constants/types';
import api from '../api/api';

export const login = credentials => {
    return dispatch => {
        api.user.login(credentials)
            .then(user => dispatch(userLoggedIn(user)))
    }
}

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
})