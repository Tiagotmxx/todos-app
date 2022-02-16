import { combineReducers, createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../api";
import text from "./text";
import todos from "./todos";

export const fetchTodos = createAsyncThunk(
  "todos/fetch",
  async () => async (dispatch) => {
    const todos = await api.fetchAll("todos");
    return todos;
  }
);

export const addTodo = createAsyncThunk(
  "todos/add",
  async (text, { dispatch }) => {
    await api.create("todos", { text });
    dispatch(fetchTodos());
  }
);

export const toggleDone = createAsyncThunk(
  "todos/toggle-done",
  async (id, { dispatch, getState }) => {
    const todos = selectTodos(getState());
    const todo = todos.find((todo) => todo.id === id);
    await api.update("todos", id, { done: !todo.done });
    dispatch(fetchTodos());
  }
);

export const removeTodo = createAsyncThunk(
  "todos/remove",
  async (id, { dispatch }) => {
    await api.remove("todos", id);
    dispatch(fetchTodos());
  }
);

export default combineReducers({ text, todos });

export const selectText = (state) => state.text;
export const selectTodos = (state) => state.todos;
export const selectTodo = (state, id) =>
  state.todos.find((todo) => todo.id === id);
