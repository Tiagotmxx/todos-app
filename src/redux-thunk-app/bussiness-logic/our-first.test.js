import { sum } from "./calculator";

//behavior-driven development

describe("Calculator", () => {
  it("should add two numbers", () => {
    //given

    const a = 2;
    const b = 3;

    //when

    const result = sum(a, b);

    //then

    expect(result).toBe(5);
  });
});
