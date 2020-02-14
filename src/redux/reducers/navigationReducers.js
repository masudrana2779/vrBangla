import {NAVIGATION} from "../actions";


export const navigationReducer = (state = [], action) => {
    switch (action.type) {
        case NAVIGATION:
            return action.payload;
        default:
            return state
    }
};