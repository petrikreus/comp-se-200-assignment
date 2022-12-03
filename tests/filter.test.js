import filter from 'software-testing-assignment/src/filter'

const inputArray = [{ id: 3 }, { id: 5 }, { id: 7 }, { id: 5 }]

describe('filter.js', () => {

  test('Filter returns an array of objects where object property id equals 5', () => {
    const expectedResultArray = [{ id: 5 }, { id: 5 }]
    expect(filter(inputArray, ( {id} ) => id === 5)).toEqual(expect.arrayContaining(expectedResultArray))
  })

  test('Filter returns an empty array with object.id === 9', () => {
    const expectedResultArray = []
    expect(filter(inputArray, ( {id} ) => id === 9)).toEqual(expect.arrayContaining(expectedResultArray))
  })

})
