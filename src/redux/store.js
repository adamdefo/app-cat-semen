import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootState';
import authReducer from './auth/authState';

export default configureStore({
    reducer: {
        root: rootReducer,
        auth: authReducer,
    },
});
