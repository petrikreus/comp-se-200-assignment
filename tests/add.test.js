import add from "software-testing-assignment/src/add.js";

describe('add.js', () => {

  test('Adding 5 + 5 is 10', () => {
    expect(add(5, 5)).toBe(10)
  })

  test('Adding 5 + -5 is 0', () => {
    expect(add(5, -5)).toBe(0)
  })

})