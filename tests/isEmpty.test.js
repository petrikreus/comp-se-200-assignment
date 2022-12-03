import staIsEmpty from 'software-testing-assignment/src/isEmpty'

describe('isEmpty.js', () => {

  test('Empty object {} returns true', () => {
    const inputParameter = {}
    expect(staIsEmpty(inputParameter)).toBeTruthy()
  })

  test('Empty array [] returns true', () => {
    const inputParameter = []
    expect(staIsEmpty(inputParameter)).toBeTruthy()
  })

  test('Non-empty object returns false', () => {
    const inputParameter = { productId: 1, description: 'Eggs' }
    expect(staIsEmpty(inputParameter)).toBeFalsy()
  })

  test('Non-empty array returns false', () => {
    const inputParameter = [1, 2, 3]
    expect(staIsEmpty(inputParameter)).toBeFalsy()
  })



})
