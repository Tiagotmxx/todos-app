import { combineReducers } from "@reduxjs/toolkit";

import * as Type from "./action-types";
import text from "./text";
import todos from "./todos";
import * as api from "../../api";

//thunks
export const fetchTodos = () => async (dispatch) => {
  const todos = await api.fetchAll("todos");
  dispatch(setTodos(todos));
};

export const addTodo = (text) => async (dispatch) => {
  await api.create("todos", { text });
  dispatch(fetchTodos());
};

export const toggleDone = (id) => async (dispatch, getState) => {
  const todos = selectTodos(getState());
  const todo = todos.find((todo) => todo.id === id);
  await api.update("todos", id, { done: !todo.done });
  dispatch(fetchTodos());
};

export const removeTodo = (id) => async (dispatch) => {
  await api.remove("todos", id);
  dispatch(fetchTodos());
};

//action creators
export const setText = (text) => ({ type: Type.SET_TEXT, payload: text });
export const setTodos = (todos) => ({ type: Type.SET_TODOS, payload: todos });
// export const addTodo = (text) => ({ type: Type.ADD_TODO, payload: text });
// export const toggleDone = (id) => ({ type: Type.TOGGLE_DONE, payload: id });
// export const removeTodo = (id) => ({ type: Type.REMOVE_TODO, payload: id });

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
