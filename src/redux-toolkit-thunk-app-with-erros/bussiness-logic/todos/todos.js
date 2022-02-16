import { createSlice } from "@reduxjs/toolkit";

import { fetchTodos } from ".";

const slice = createSlice({
  name: "todos",

  initialState: [],

  reducers: {},

  extraReducers: {
    [fetchTodos.fulfilled](state, action) {
      state = action.payload;
    },
  },
});

export default slice.reducer;
