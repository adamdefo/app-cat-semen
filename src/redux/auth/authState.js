import { createSlice } from '@reduxjs/toolkit';
import { setUser } from './authReducer';

export const authState = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    logIn: setUser,
    logOut: (state) => {
      console.log('authState:action --> logOut');
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authState.actions;

export default authState.reducer;
