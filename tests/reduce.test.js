import reduce from "software-testing-assignment/src/reduce.js";

const inputArray = [1, 2, 3]

describe('reduce.js', () => {

  test('Calculate the sum of array elements', () => {
    expect(reduce(inputArray, (sum, n) => sum + n)).toBe(6)
  })



})