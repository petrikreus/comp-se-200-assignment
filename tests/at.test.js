import at from "software-testing-assignment/src/at.js";

describe('at.js', () => {

  test('Returns an array with values matching given paths', () => {
    const inputObject = { 'a': [{ 'b': { 'c': 3 } }, 4] }
    const expectedResultArray = [3, 4] 
    const inputPathArray = ['a[0].b.c', 'a[1]']
    expect(at(inputObject, inputPathArray)).toEqual(expect.arrayContaining(expectedResultArray))
  })

  test('Returns an array with undefined values when called integers', () => {
    const expectedResultArray = [undefined] 
    expect(at(5, -5)).toEqual(expect.arrayContaining(expectedResultArray))
  })

})