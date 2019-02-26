import api from "../api/api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch => api.user.signup(data).then(user => {
    console.log(user)
    localStorage.bookwormJWT = user.token
    dispatch(userLoggedIn(user))
})