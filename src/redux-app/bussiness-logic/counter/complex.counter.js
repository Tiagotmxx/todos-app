//action types

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET_VALUE = "SET_VALUE";
const DO_A_BARREL_ROLL = "DO_A_BARREL_ROLL";

//action creators

export const increment = (amount) => ({ type: INCREMENT, payload: amount });
export const decrement = (amount) => ({ type: DECREMENT, payload: amount });
export const setValue = (value) => ({ type: SET_VALUE, payload: value });
export const doABarrelRoll = () => ({ type: DO_A_BARREL_ROLL });

//reducer

export default function counter(state = { value: 0 }, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return { ...state, value: state.value + payload };

    case DECREMENT:
      return { ...state, value: state.value - payload };

    case SET_VALUE:
      return { ...state, value: payload };

    default:
      return state;
  }
}
