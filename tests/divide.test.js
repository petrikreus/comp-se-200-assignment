import divide from "software-testing-assignment/src/divide.js";

describe('divide.js', () => {

  test('Divide 6 by 3 to equal 2', () => {
    expect(divide(6, 3)).toBeCloseTo(2.0)
  })

  test('Dividing a positive number by zero returns Infinity', () => {
    expect(divide(10, 0)).toBeNaN()
  })

  test('Dividing zero by zero returns NaN', () => {
    expect(divide(0, 0)).toBeNaN()
  })

  test('Dividing -10 by 5 returns -2', () => {
    expect(divide(-10, 5)).toBeCloseTo(-2)
  })

})
