/**
 * {
 * text: 'New Todo',
 *  * todos: [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Seek for a job", done: false },
    { id: 3, text: "Forget everthing" },
  ]
  }
 */

//action types
const SET_TEXT = "SET_TEXT";

const ADD_TODO = "ADD_TODO";
const TOGGLE_DONE = "TOGGLE_DONE";
const REMOVE_TODO = "REMOVE_TODO";

//action creators
export const setText = (text) => ({ type: SET_TEXT, payload: text });
export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const toggleDone = (id) => ({ type: TOGGLE_DONE, payload: id });
export const removeTodo = (id) => ({ type: REMOVE_TODO, payload: id });

//reducer
function todos(state = { text: "", todos: [] }, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_TEXT:
      return { ...state, text: payload };

    case ADD_TODO:
      const maxId = state.todos.length
        ? state.todos[state.todos.length - 1].id
        : 0;
      return {
        ...state,
        text: "",
        todos: [...state.todos, { id: maxId + 1, text: payload }],
      };

    case TOGGLE_DONE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === payload ? { ...todo, done: !todo.done } : todo
        ),
      };

    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== payload),
      };

    default:
      return state;
  }
}
