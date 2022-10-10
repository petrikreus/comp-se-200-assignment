import divide from "software-testing-assignment/src/divide.js";

test('Divide 6 by 4 to equal 1.5', () => {
  expect(divide(6, 4)).toBeCloseTo(1.5)
})
