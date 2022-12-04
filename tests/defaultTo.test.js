import defaultTo from "software-testing-assignment/src/defaultTo.js";

describe('defaulTo.js', () => {

  test('Returns a given default value when value is null', () => {
    expect(defaultTo(null, "I'm a default value :)")).toBe("I'm a default value :)")
  })

  test('Returns a given default value when value is undefined', () => {
    expect(defaultTo(undefined, "I'm a default value :)")).toBe("I'm a default value :)")
  })

  test('Returns a value value when value is given', () => {
    expect(defaultTo('value', 'defaulValue')).toBe('value')
  })

})