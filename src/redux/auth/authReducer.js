import { LOG_IN, LOG_OUT } from './authTypes';

export function setUser(state, action) {
    console.log('authState:action --> logIn', action.payload);
    sessionStorage.setItem('USER', JSON.stringify(action.payload));
    state.user = action.payload;
}
