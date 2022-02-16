/* 
0 => increment(amount) => 0 + amount
0 => decrement(amount) => 0 - amount
0 => setValue(value) => value
*/

const arr = [1, 2, 3, 4, 5];

/* let sum = 0;
for (const item of arr) {
  sum += item;
}
console.log(sum); */

/* const sum = (a, b) => a + b;

const sumOfItems = arr.reduce(sum); */

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

export default function counter(state = 0, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return state + payload;

    case DECREMENT:
      return state - payload;

    case SET_VALUE:
      return payload;

    default:
      return state;
  }
}

// let state = 0;
// state = counter(state, increment(2));
// state = counter(state, decrement(3));
// state = counter(state, setValue(5));

/* const counter = {
  value: 0,

  increment(amount) {
    this.value += amount;
  },

  decrement(amount) {
    this.value -= amount;
  },

  setValue(value) {
    this.value = value;
  },
}; */
