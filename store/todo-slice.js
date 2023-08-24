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
        (todo) => todo.id !== action.payload.id // Change === to !==
      );
    },
    completedTodo(state, action) {
      state.pending = state.pending.filter(
        (todo) => todo.id !== action.payload.id // Change === to !==
      );
      state.completed.push(action.payload);
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice.reducer;
