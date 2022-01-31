import counter, {
  increment,
  decrement,
  setValue,
  doABarrelRoll,
} from "./complex.counter";

it("should initialize", () => {
  //given
  const beforeState = undefined;
  const action = { type: "ANY_ACTION" };
  const afterState = { value: 0 };

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should increment by some amount", () => {
  //given
  const beforeState = { value: 3 };
  const action = increment(2);
  const afterState = { value: 5 };

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should decrement by some amount", () => {
  //given
  const beforeState = { value: 3 };
  const action = decrement(4);
  const afterState = { value: -1 };

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should set a specific value", () => {
  //given
  const beforeState = { value: 3 };
  const action = setValue(7);
  const afterState = { value: 7 };

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toEqual(afterState);
});

it("should ignore any other action", () => {
  //given
  const beforeState = { value: 3 };
  const action = doABarrelRoll();
  const afterState = { value: 3 };

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toEqual(afterState);
  expect(state).toBe(beforeState);
});
