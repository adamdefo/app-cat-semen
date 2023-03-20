import { LOG_IN, LOG_OUT } from './authTypes';

export function authReducer(state, action) {
    console.log(state, action);
    if (action.type === LOG_IN) {
        return ++state;
    } else if (action.type === LOG_OUT) {
        return --state;
    }

    return state;
}
