import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {
    addTodo(state, action) {
      const maxId = state.length ? state[state.length - 1].id : 0;
      state.push({ id: maxId + 1, text: action.payload });
    },

    toggleDone(state, action) {
      state.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.done = !todo.done;
        }
      });
    },

    removeTodo(state, action) {
      const index = state.findIndex((todo) => todo.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export default slice.reducer;

export const { addTodo, toggleDone, removeTodo } = slice.actions;
