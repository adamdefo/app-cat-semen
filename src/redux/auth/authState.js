import { createSlice } from '@reduxjs/toolkit';

export const authState = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  reducers: {
    logIn: (state, action) => {
      console.log('authState:action --> logIn', action.payload);
      state.user = action.payload;
    },
    logOut: (state) => {
      console.log('authState:action --> logOut');
      state.user = null;
    },
  },
});

export const { logIn, logOut } = authState.actions;

export default authState.reducer;
