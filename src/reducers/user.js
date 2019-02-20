import { USER_LOGGED_IN } from "../constants/types";

const initialState = [

];

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            console.log('123')
            console.log(action)
            return [];
        default: return [...state];
    }
}

export default user