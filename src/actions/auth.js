import { USER_LOGGED_IN } from './../constants/types';
import api from '../api/api';

// export const login = credentials => {
//     return dispatch => {
//         return api.user.login(credentials)
//             .then(user => dispatch(userLoggedIn(user)))
//     };
// }

// export const userLoggedIn = user => {
//     return {
//         type: USER_LOGGED_IN,
//         user
//     }
// }

export const userLoggedIn = user => ({
    type: USER_LOGGED_IN,
    user
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user => {
        dispatch(userLoggedIn(user))
    });
