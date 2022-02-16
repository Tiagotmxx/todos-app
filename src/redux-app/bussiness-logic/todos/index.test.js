import { createStore } from "@reduxjs/toolkit";

import rootReducer, {
  addTodo,
  removeTodo,
  selectTodo,
  setText,
  toggleDone,
} from ".";

it("should initialize", () => {
  //given
  const beforeState = undefined;
  const action = { type: "ANY_ACTION" };
  const afterState = { text: "", todos: [] };

  //when
  const state = rootReducer(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should set new text", () => {
  //given
  const beforeState = {
    text: "Some text",
    todos: [{ id: 1, text: "Some todo", done: true }],
  };
  const action = setText("Some new text");
  const afterState = {
    text: "Some new text",
    todos: [{ id: 1, text: "Some todo", done: true }],
  };

  //when
  const state = rootReducer(beforeState, action);

  //then
  expect(state).toEqual(afterState);
  expect(state.todos).toBe(beforeState.todos);
});

it("should add a new todo", () => {
  //given
  const beforeState = {
    text: "Some text",
    todos: [{ id: 1, text: "Some todo", done: true }],
  };
  const action = addTodo("Some text");
  const afterState = {
    text: "",
    todos: [
      { id: 1, text: "Some todo", done: true },
      {
        id: 2,
        text: "Some text",
      },
    ],
  };

  //when
  const state = rootReducer(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should toggle the 'done' property on a todo", () => {
  //given
  const beforeState = {
    text: "Some text",
    todos: [
      { id: 1, text: "Some todo", done: true },
      {
        id: 2,
        text: "Some text",
      },
    ],
  };
  const action = toggleDone(2);
  const afterState = {
    text: "Some text",
    todos: [
      { id: 1, text: "Some todo", done: true },
      {
        id: 2,
        text: "Some text",
        done: true,
      },
    ],
  };

  //when
  const state = rootReducer(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should remove a todo", () => {
  //given
  const beforeState = {
    text: "Some text",
    todos: [
      { id: 1, text: "Some todo", done: true },
      {
        id: 2,
        text: "Some text",
      },
    ],
  };
  const action = removeTodo(1);
  const afterState = {
    text: "Some text",
    todos: [{ id: 2, text: "Some text" }],
  };

  //when
  const state = rootReducer(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should create a store with subscribers", () => {
  const store = createStore(rootReducer);

  store.dispatch({ type: "ANY_ACTION" });

  store.subscribe(() => {
    const state = store.getState();
    expect(state).toEqual({ text: "", todos: [] });
  });
});

it("should select a todo given its id", () => {
  const state = {
    text: "Some text",
    todos: [
      { id: 1, text: "Learn Redux", done: true },
      { id: 2, text: "Look for a job", done: false },
      { id: 3, text: "Forget everything" },
    ],
  };
  const selectedTodo = { id: 2, text: "Look for a job", done: false };

  const todo = selectTodo(state, 2);

  expect(todo).toEqual(selectedTodo);
});
