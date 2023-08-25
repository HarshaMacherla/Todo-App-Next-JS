import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    pending: [],
    completed: [],
  },
  reducers: {
    addNewTodo(state, action) {
      state.pending.push({ ...action.payload, id: state.pending.length + 1 });
    },
    removeTodo(state, action) {
      state.pending = state.pending.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    addCompletedTodo(state, action) {
      state.pending = state.pending.filter(
        (todo) => todo._id !== action.payload._id
      );
      state.completed.push(action.payload);
    },
    loadTodos(state, action) {
      state.pending = action.payload;
    },
    loadCompletedTodos(state, action) {
      state.completed = action.payload;
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice.reducer;
