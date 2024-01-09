import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export default appStore;
