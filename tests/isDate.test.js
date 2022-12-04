import isDate from "software-testing-assignment/src/isDate.js";

describe('isDate.js', () => {

    test('Returns true when argument is a Date object', () => {
      expect(isDate(new Date)).toBe(true)
    })
  
    test('Returns false when argument is not a Date object', () => {
      expect(isDate('Mon April 23 2012')).toBe(false)
    })
  
  })