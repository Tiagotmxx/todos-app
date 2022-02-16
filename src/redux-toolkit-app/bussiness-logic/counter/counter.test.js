import counter, {
  increment,
  decrement,
  setValue,
  doABarrelRoll,
} from "./counter";

it("should initialize", () => {
  //given
  const beforeState = undefined;
  const action = { type: "ANY_ACTION" };
  const afterState = 0;

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toBe(afterState);
});

it("should increment by some amount", () => {
  //given
  const beforeState = 3;
  const action = increment(2);
  const afterState = 5;

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toBe(afterState);
});

it("should decrement by some amount", () => {
  //given
  const beforeState = 3;
  const action = decrement(4);
  const afterState = -1;

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toBe(afterState);
});

it("should set a specific value", () => {
  //given
  const beforeState = 3;
  const action = setValue(7);
  const afterState = 7;

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toBe(afterState);
});

it("should ignore any other action", () => {
  //given
  const beforeState = 3;
  const action = doABarrelRoll();
  const afterState = 3;

  //when
  const state = counter(beforeState, action);

  //then
  expect(state).toBe(afterState);
});
