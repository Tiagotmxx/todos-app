import * as Type from "./action-types";

export default function todos(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case Type.ADD_TODO:
      const maxId = state.length ? state[state.length - 1].id : 0;
      return [...state, { id: maxId + 1, text: payload }];

    case Type.TOGGLE_DONE:
      return state.map((todo) =>
        todo.id === payload ? { ...todo, done: !todo.done } : todo
      );

    case Type.REMOVE_TODO:
      return state.filter((todo) => todo.id !== payload);

    case Type.SET_TODOS:
      return payload;

    default:
      return state;
  }
}
