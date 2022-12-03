import staMap from 'software-testing-assignment/src/map'

describe('map.js', () => {

  test('Square the numbers in array', () => {
    const inputArray = [1, 2, 3, 4, 5]
    const squareFunction = (x) => x*x
    const expectedResult = [1, 4, 9, 16, 25]

    expect(staMap(inputArray, squareFunction)).toEqual(expect.arrayContaining(expectedResult))
  })

})
