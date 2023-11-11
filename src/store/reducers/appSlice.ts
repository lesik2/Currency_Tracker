/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Times } from '../../constants/index.ts';

export interface AppState {
  isDarkTheme: boolean;
  timeOfUpdate: string;
}
const initialState: AppState = {
  isDarkTheme: JSON.parse(localStorage.getItem('theme') ?? 'false'),
  timeOfUpdate: '',
};
export const themeSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.isDarkTheme = !state.isDarkTheme;
      localStorage.setItem('theme', JSON.stringify(state.isDarkTheme));
    },
    setTimeOfUpdate: (state, action: PayloadAction<string>) => {
      const date = new Date(action.payload);
      const hours = date.getUTCHours();
      const minutes = date.getMinutes();
      let time: string;
      if (hours >= Times.change) {
        time = Times.evening;
      } else {
        time = Times.morning;
      }
      state.timeOfUpdate = `${hours % 12}:${minutes} ${time}`;
    },
  },
});
export const { changeTheme, setTimeOfUpdate } = themeSlice.actions;
export default themeSlice.reducer;
