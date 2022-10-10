import divide from "software-testing-assignment/src/divide.js";
import map from "software-testing-assignment/src/map.js";
import capitalize from "software-testing-assignment/src/capitalize.js"
import reduce from "software-testing-assignment/src/reduce.js"
import isEmpty from "software-testing-assignment/src/isEmpty.js"
import defaultTo from "software-testing-assignment/src/defaultTo.js"
import filter from "software-testing-assignment/src/filter.js"
import words from "software-testing-assignment/src/words.js"
import toNumber from "software-testing-assignment/src/toNumber.js"
import slice from "software-testing-assignment/src/slice.js"

const DUMMY_ARRAY = [1, 2, 3, 4, 5]
const DUMMY_OBJECT = {
  name: "Product 1",
  description: "this is A DESCRIPTION of a Product",
  price: 14.99,
  noPrice: null,
}
const DUMMY_OBJECT_ARRAY = [{'user': 'barney', 'active': true}, {'user': 'fred', 'active': false}]

// Just figuring out how the functions are supposed to be used
console.log("divide(6, 4)", divide(6, 4))
console.log("map(^2)", map(DUMMY_ARRAY, (num) => num * num))
console.log("capitalize('testi1')", capitalize("testi1"))
console.log("reduce(+)", reduce(DUMMY_ARRAY, (sum, n) => sum + n, 0))
console.log("isEmpty(DUMMY_ARRAY)", isEmpty(DUMMY_ARRAY))
console.log("isEmpty('')", isEmpty(''))
console.log("defaultTo(isEmpty(DUMMY_OBJECT.noPrice))", defaultTo(DUMMY_OBJECT.noPrice, 'There is no price defined!'))
console.log("defaultTo(isEmpty(DUMMY_OBJECT.price))", defaultTo(DUMMY_OBJECT.price, 'There is no price defined!'))
console.log("filter(object.active)", filter(DUMMY_OBJECT_ARRAY, (obj) => obj.active))
console.log("words('here are many words: and some special characters ☠️ too!')", words('here are many words: and some special characters ☠️ too!'))
console.log("toNumber('-5.5')", toNumber('-5.5'))
console.log("slice(tail)", slice(DUMMY_ARRAY, DUMMY_ARRAY.length - 1))
console.log("slice(rest)", slice(DUMMY_ARRAY, 1))

// Producer saves a product name
const productNameString = "Tämä on HYVÄ TuOtE! ☠️"
let productNameWordsArray = words(productNameString.toLowerCase())
productNameWordsArray = map(productNameWordsArray, (wrd) => capitalize(wrd))
console.log(productNameWordsArray)
const newProductNameString = productNameWordsArray.join(" ")
console.log(newProductNameString)
