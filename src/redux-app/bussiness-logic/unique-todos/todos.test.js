import todos, { addTodo, removeTodo, setText, toggleDone } from "./todos";

it("should initialize", () => {
  //given
  const beforeState = undefined;
  const action = { type: "ANY_ACTION" };
  const afterState = { text: "", todos: [] };

  //when
  const state = todos(beforeState, action);

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
  const state = todos(beforeState, action);

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
  const state = todos(beforeState, action);

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
  const state = todos(beforeState, action);

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
  const state = todos(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});
