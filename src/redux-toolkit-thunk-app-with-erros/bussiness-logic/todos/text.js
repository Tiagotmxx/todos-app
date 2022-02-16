import { createSlice } from "@reduxjs/toolkit";

import { addTodo } from "./todos";

const slice = createSlice({
  name: "text",
  initialState: "",
  reducers: {
    setText(state, action) {
      return action.payload;
    },

    extraReducers: {
      [addTodo](state, action) {
        return "";
      },
    },
  },
});

export default slice.reducer;

export const { setText } = slice.actions;
