import words from 'software-testing-assignment/src/words'

describe('words.js', () => {

  test('Input string is divided into individual search words', () => {
    const inputString = 'one two three'
    const delimiter = ' '
    const expectedResult = ['one', 'two', 'three']
    expect(words(inputString, delimiter)).toEqual(expect.arrayContaining(expectedResult))
  })

})
