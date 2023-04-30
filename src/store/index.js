import { configureStore } from "@reduxjs/toolkit";
import counterActions from "./counter";
import themeActions from "./theme";

const store = configureStore({
  reducer: { counter: counterActions, toggle: themeActions },
});

export default store;
