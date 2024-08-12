import { createSlice } from '@reduxjs/toolkit';

export const RootState = createSlice({
  name: 'root',
  initialState: {
    appVersion: '0.0.1',
    theme: sessionStorage.getItem('THEME') || 'dark',
  },
  reducers: {
    getAppVersion: (state) => {
      console.log('rootState:appVersion', state.appVersion);
    },
    setTheme: (state, action) => {
      console.log('rootState:setTheme', action);
      sessionStorage.setItem('THEME', action.payload);
      state.theme = action.payload;
    },
  },
})

export const { getAppVersion, setTheme } = RootState.actions;

export default RootState.reducer;
