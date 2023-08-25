import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addNewTodo(state, action) {
      state.todos.push(action.payload);
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(
        (todo) => todo._id !== action.payload._id
      );
    },
    editTodo(state, action) {
      state.todos = state.todos.map((todo) => {
        if (todo._id === action.payload._id) {
          return action.payload;
        } else {
          return todo;
        }
      });
    },
    loadTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const todoActions = TodoSlice.actions;

export default TodoSlice.reducer;
