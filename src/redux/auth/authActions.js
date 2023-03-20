import { LOG_IN, LOG_OUT } from './authTypes';

export function logIn() {
    console.log('action: logIn');
    return {type: LOG_IN};
}

export function logOut() {
    return {type: LOG_OUT};
}

export function asyncLogIn() {
    return function(dispath) {
        setTimeout(() => {
            dispath(logIn());
        }, 5000);
    }
}