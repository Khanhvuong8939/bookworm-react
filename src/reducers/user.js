import { USER_LOGGED_IN } from "../constants/types";

const initialState = [

];

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            console.log('12123123?')
            return action.user;
        default: return [...state];
    }
}

export default user