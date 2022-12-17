# A repository for Tampere University Software Testing course assignment. 

[![Coverage Status](https://coveralls.io/repos/github/petrikreus/comp-se-200-assignment/badge.svg?branch=main)](https://coveralls.io/github/petrikreus/comp-se-200-assignment?branch=main)

The main documents of the project are 

- [Test Plan](./test_plan.pdf)
- [Test Report](./test_report.pdf). 

`diagrams/` folder includes sequence diagrams and possible other diagrams for estimation of how a possible 
application could be used.

`tests/` folder includes all the tests written for the selected files/functions.

## Testing Prerequisites

If you want to run the tests, you should have [node.js](https://nodejs.org) installed (version `> 16.x`).

## Installation & Running the Tests

1. After cloning or updating the repository, use `npm install` to install dependencies.
2. Run `npm test` to test `*.test.js` files in the project
3. Run `npm run test:coverage` to run tests and to create a coverage report and send it to coveralls.io

The course's utility library is installed as a dependency.
