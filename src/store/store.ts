import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/taskSlice";

export const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
