import * as Type from "./action-types";

export default function text(state = "", action) {
  const { type, payload } = action;

  switch (type) {
    case Type.SET_TEXT:
      return payload;

    case Type.ADD_TODO:
      return "";

    default:
      return state;
  }
}
