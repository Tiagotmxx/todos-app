import { combineReducers } from "@reduxjs/toolkit";

import text from "./text";
import todos from "./todos";

export default combineReducers({ text, todos });

export const selectText = (state) => state.text;
export const selectTodos = (state) => state.todos;
export const selectTodo = (state, id) =>
  state.todos.find((todo) => todo.id === id);
