//behavior-driven development

it("should add two numbers", () => {
  //given

  const a = 2;
  const b = 3;

  function sum(x, y) {
    return x + y;
  }

  //when

  const result = sum(a, b);

  //then

  expect(result).toBe(5);
});
