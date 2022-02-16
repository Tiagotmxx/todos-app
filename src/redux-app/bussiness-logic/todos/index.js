import { combineReducers } from "@reduxjs/toolkit";

import * as Type from "./action-types";
import text from "./text";
import todos from "./todos";

//action creators
export const setText = (text) => ({ type: Type.SET_TEXT, payload: text });
export const addTodo = (text) => ({ type: Type.ADD_TODO, payload: text });
export const toggleDone = (id) => ({ type: Type.TOGGLE_DONE, payload: id });
export const removeTodo = (id) => ({ type: Type.REMOVE_TODO, payload: id });

export default combineReducers({ text, todos });
//reducer
// export default function rootReducer(state = { text: "", todos: [] }, action) {
//   return {
//     text: text(state.text, action),
//     todos: todos(state.todos, action),
//   };
// }

export const selectText = (state) => state.text;
export const selectTodos = (state) => state.todos;
export const selectTodo = (state, id) =>
  state.todos.find((todo) => todo.id === id);
