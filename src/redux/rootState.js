import { createSlice } from '@reduxjs/toolkit';

export const RootState = createSlice({
  name: 'root',
  initialState: {
    appVersion: '0.0.1',
  },
  reducers: {
    setAppVersion: (state) => {
      console.log('rootState:action --> getAppVersion');
    },
  },
})

export const { setAppVersion } = RootState.actions;

export default RootState.reducer;
