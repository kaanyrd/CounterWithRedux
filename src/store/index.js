import { configureStore } from "@reduxjs/toolkit";
import counterActions from "./counter";
import themeActions from "./theme";

const store = configureStore({
  reducer: { counter: counterActions.reducer, theme: themeActions.reducer },
});

export default store;
