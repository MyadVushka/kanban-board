import { createSlice } from "@reduxjs/toolkit";
import { TaskSettings } from "../../types/general-types";
import { RootState } from "../store";

const taskSlice = createSlice({
  name: "taskSlice",
  initialState: {
    todo: [] as TaskSettings[],
    inProgress: [] as TaskSettings[],
    complete: [] as TaskSettings[],
    toRefactor: [] as TaskSettings[],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todo.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todo = state.todo.filter(
        (task: TaskSettings) => task.id !== action.payload
      );
    },
    addInProgress: (state, action) => {
      state.inProgress.push(action.payload);
    },
    removeInProgress: (state, action) => {
      state.inProgress = state.inProgress.filter(
        (task: TaskSettings) => task.id !== action.payload
      );
    },
    addComplete: (state, action) => {
      state.complete.push(action.payload);
    },
    removeComplete: (state, action) => {
      state.complete = state.complete.filter(
        (task: TaskSettings) => task.id !== action.payload
      );
    },
    addToRefactor: (state, action) => {
      state.toRefactor.push(action.payload);
    },
    removeToRefactor: (state, action) => {
      state.toRefactor = state.toRefactor.filter(
        (task: TaskSettings) => task.id !== action.payload
      );
    },
  },
});

export const {
  addTodo,
  removeTodo,
  addInProgress,
  removeInProgress,
  addComplete,
  removeComplete,
  addToRefactor,
  removeToRefactor,
} = taskSlice.actions;

export const selectTodo = (state: RootState) => state.taskSlice.todo;
export const selectInProgress = (state: RootState) =>
  state.taskSlice.inProgress;
export const selectComplete = (state: RootState) => state.taskSlice.complete;
export const selectToRefactor = (state: RootState) =>
  state.taskSlice.toRefactor;

export default taskSlice.reducer;
