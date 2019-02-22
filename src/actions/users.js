import api from "../api/api";
import { userLoggedIn } from "./auth";

export const signup = data => dispatch =>{ console.log(data); return api.user.signup(data).then(res => dispatch(userLoggedIn(res)))}