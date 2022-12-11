import words from 'software-testing-assignment/src/words'

describe('words.js', () => {

  test('Returns an array of individual words', () => {
    const inputString = 'one two three'
    const expectedResult = ['one', 'two', 'three']
    expect(words(inputString)).toEqual(expectedResult)
  })

  test('Returns an array containing the first found match, based on given matcher string', () => {
    const inputString = 'one two three'
    const matcher = 'two'
    const expectedResult = ['two']
    expect(words(inputString, matcher)).toEqual(expectedResult)
  })

  test('Returns an array of individual words, based on given global regexp', () => {
    const inputString = 'one, two, & three'
    const regexp = /[^, ]+/g // Negated set: match any character not included in the set
    const expectedResult = ['one', 'two', '&', 'three']
    expect(words(inputString, regexp)).toEqual(expectedResult)
  })

  test('Returns an empty array if no matches are found', () => {
    const inputString = 'one two three'
    const matcher = 'four'
    expect(words(inputString, matcher)).toEqual([])
  })

})
