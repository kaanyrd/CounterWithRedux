import { createSlice } from "@reduxjs/toolkit";

const initialValues = { theme: true };

const themeSlice = createSlice({
  name: "theme",
  initialState: initialValues,
  reducers: {
    changeTheme(state) {
      state.theme = !state.theme;
    },
  },
});

export const themeActions = themeSlice.actions;
export default themeSlice.reducer;
