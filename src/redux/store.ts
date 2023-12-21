import { configureStore } from "@reduxjs/toolkit";
import exampleSlice from "./slice/exampleSlice";

const store = configureStore({
  // import your reducers here
  reducer: {
    example: exampleSlice,
  },
});

export default store;
