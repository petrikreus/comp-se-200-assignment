# Material

> Assignment moodle page:
> https://moodle.tuni.fi/mod/assign/view.php?id=1602513

> Utility library:
> https://github.com/otula/COMP.SE.200-2022-2023-1

# Cover page

> - Name of the document.
> - Course ID and course name.
> - The names of students as well as the student numbers.

# Definitions, acronyms, abbreviations

> - List of any definitions, acronyms and abbreviations used in the document.

|||
|---------|----------------------------|
| Unit    | A piece of functional code |
| AUT     | Application Under Test     |

# Introduction

> - Short introduction to the contents of the document.
> - What is in the document?
> - What is the purpose of the document?

This document describes a test plan and a test design for the utility library of the front-end of the E-Commerce Store
application. The aim is to give a detailed description of the test strategy, test objectives and test deliverables for
the project.

First, descriptions of end-to-end scenarios are presented. Second, tools for the testing are defined with the actual
tests. Finally, a Virtual Machine setup for the testing environment is illustrated.

# Design

In this section, we describe the general test design and its rationale. First, we define a scope for the test
design. Second, the most important end-to-end scenarios of the application are specified. Third, we present the main
components that we identified based on the scenarios. Finally, a selection of source files to be tested are introduced.

## Scope

The scope of the testing is to test 10 source files of the utility library, which consists of 43 source files in total.
The amount to be tested is limited to 10 due to the time constraints. The test strategies are limited to unit test and
integration tests, mostly since we do not have access to the application or any of its parts aside from the utility
library source files. That means that many testing strategies are left out of the scope, such as usability testing,
system testing and acceptance testing.

Additionally, the specification states that only the top level of the utility library is to be tested, hence the
files under the `.internal/` folder are left out of the testing scope. Due to the nature of the files under test,
the testing concentrates only on functional tests.

To select the source files to be tested, first a few end-to-end scenarios are detected based on the
provided specification of the product. Next, main components of the application are analyzed from the scenarios.
Finally, a prioritization method is used, utilizing the scenarios and components, to figure out the most important
source files that need to be tested.

## Scenarios and components

The testing is designed upon four main end-to-end scenarios identified from the application description. The scenarios
described here are limited to four, since based on our evaluation, those cover the most important features of the
application. Two of them are related to customer functionality and two to producer functionality. Following figures
present these scenarios in a form of sequence diagrams. Figure 1 describes a user logging in, searching for a 
product, adding a product to cart, and finally making a purchase. Figure 2 describes a new user registering an 
account and logging in. Figure 3 describes a producer logging in, adding a new product, and removing a product. 
Figure 4 describes a new producer registering a new account, waiting for it to be approved, and finally logging in 
after an approval. 

**S1: Customer orders products**

1. Customer logs in.
2. Customer searches for a product.
3. Customer adds the product to the shopping cart.
4. Cart updates.
5. Customer chooses to buy products in the shopping cart.
6. Payment is processed.
7. If payment is successful the order is created. Else unsuccessful payment handled.

**S2: New Customer registration**

1. Customer starts the registration process.
2. Customer fills the required user info into a registration form.
3. Customer submits the registration form.
4. Back-end handles registration and informs customer if registration was successful.
5. After successful registration customer can log in.

**S3: Producer adds and removes products**

1. Producer logs in with producer credentials.
2. Producer adds a new product using a form.
3. Producer submits the new product.
4. Back-end handles the added product and informs if addition was successful.
5. Producer removes an outdated product.
6. Back-end handles removal and informs if removal was successful.

**S4: New Producer registration**

1. Producer starts the registration process.
2. Producer fills the required user info into a registration form.
3. Producer submits the registration form.
4. Back-end handles registration and informs customer if registration was successful.
5. Registration is now pending admin approval.
6. Admin approves the producer registration.
7. Producer is able to log in.

[//]: # (**S5: Producer handles a received order &#40;backup scenario option&#41;**)

Based on these scenarios, we recognized five main functional components of the application. These components are

- Log in / Registration (Customer & Producer)
- Product list (Customer & Producer)
- Shopping cart (Customer)
- Search (Customer)
- Product management (Producer).

## Selected Source Files

With the scenarios and components identified, we first used the MoSCoW method to prioritize the source files. Due to
the strict time limitations, the prioritization were conducted on a highly critical manner, and most of the files
ended up under the Won't test category from the start. In the end, we narrowed the source files down to the 10 Must
test files, and all other files were moved under Won't test category.

The source files included in the testing are displayed in the following table (Table 1).

| Source File  | Rationale for selection / Example use case                                                                                  | Related Scenario(s) |
|--------------|-----------------------------------------------------------------------------------------------------------------------------|---------------------|
| add.js       | Basic math function, may be used in multiple situations.                                                                    | S1, S3              |
| at.js        | May be used in many situations when getting data from an object.                                                            | S1, S2, S3, S4      |
| defaultTo.js | May be used when displaying and saving information.                                                                         | S1, S3              |
| divide.js    | Basic math function, may be used when displaying prices and in other calculations. Has a critical error in syntax.          | S1, S3              |
| filter.js    | May be used when displaying product lists.                                                                                  | S1                  |
| isDate.js    | May be used when displaying dates in product pages. Working with dates is a well known challenge in JavaScript development. | S1, S3              |
| isEmpty.js   | May be used when checking validity of form fields.                                                                          | S1, S2, S3, S4      |
| map.js       | May be used when converting array data into React components.                                                               | S1, S3              |
| reduce.js    | May be used when displaying prices in cart.                                                                                 | S1                  |
| words.js     | May be used in parsing search parameters in product search.                                                                 | S1                  |

# Tools

> - Description of the chosen tools, packages, libraries, etc. including possible links to web sources (tutorials,
    homepages, etc). Why did you select these tools and how did you test them?
> - How would the tools be used to test your end-to-end scenarios?

To get the most out the testing, the production environment and the testing environment should be
as similar as possible. However, the specification of the E-Commerce application does not describe the environment,
aside from that its front-end uses React with the utility library provided. Thus, we will give our best guess, based
on our research and experience, to describe a working environment for the basis of our tool selection. The environment
description will concentrate only on the front-end React application and tools relating to the functional tests,
which are specified in the next section.

## General environment

As the front-end of the application is built with React, and the utility library has a `package.json` file, it will
most likely run on Node.js. Node.js is an open-source JavaScript runtime. It is a widely used base for various
JavaScript applications. Node.js provides a useful package manager, Node Package Manager (npm), although other package 
managers could be used as well, such as pnpm or Yarn. With the npm, installing dependencies to the project is 
effortless, and controlling the versions of the dependencies is relatively easy.

The utility library provided will supposedly be installed to the production application with the npm, or similar.  

## Testing tools

We picked [Jest](https://jestjs.io/), a JavaScript testing framework, for unit and integration testing. Since the
testable file/function count is low, Jest will work well. It works without much additional configuration and is easy to
use. If the testable amount was higher, a deeper consideration and comparison of various testing libraries should be 
conducted.

The Jest framework was tested by creating a simple test case for the divide function of the provided utility library.

If we had access to the React application, we suggest
that [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) was to be used. It is a
light-weight solution for testing React components. It provides utility functions with react-dom and
react-dom/test-utils. React testing library is not a test runner or framework. Even though the library isn't specific to
any framework it is recommended that React testing library would be used with Jest.

# Tests

> - What kind of tests are to be performed (unit, integration, …), and what is their importance for the end-to-end
    scenarios you described?
> - What components of the E-commerce store will be tested and what will not be tested, and why?
> - How will the test results be documented?
> - If bugs or issues are found, how are they classified or categorized? Add a template of you bug/issue report if
    needed.
> - When the tests are considered "passed"?
> - How to guarantee adequate code coverage?

- unit tests
- integration tests

# Test Cases

The following are short descriptions of designed test cases for the selected functionality.

### Test cases for divide.js

Test cases are selected using a mix of **Equivalence partition method** and **limit value analysis**. The **divide**
function should perform a simple mathematical division operation and the expected behavior of the operation with given
inputs should be quite straightforward.

|                  |                                                                                                                                    |
|------------------|------------------------------------------------------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                                                              |
| Name             | 6 divided by 3 is 2                                                                                                                |
| File             | division.js                                                                                                                        |
| Type             | Functional test, Positive test                                                                                                     |
| Purpose          | To test that the application display product's price per unit of sale correctly when user is searching for products (Scenario: S1) |
| Preconditions    | division.js imported, dividend and divisor variables defined                                                                       |
| Inputs           | Positive dividend 6 and positive divisor  3                                                                                        |
| Expected Results | 2                                                                                                                                  |
| After-conditions | Correct result of division is given                                                                                                |

---

|                  |                                                               |
|------------------|---------------------------------------------------------------|
| ID               | TCXXX                                                         |
| Name             | Dividing a positive number by zero returns Infinity           |
| File             | division.js                                                   |
| Type             | Functional test, Negative test                                |
| Purpose          | To test that the application handles illegal division by zero |
| Preconditions    | division.js imported, dividend and divisor variables defined  |
| Inputs           | Positive dividend 10 and 0 as divisor                         |
| Expected Results | The result of the division operation is not a number          |
| After-conditions | Operation result is Infinity                                  |

---

|                  |                                                               |
|------------------|---------------------------------------------------------------|
| ID               | TCXXX                                                         |
| Name             | Dividing zero by zero returns NaN                             |
| File             | division.js                                                   |
| Type             | Functional test, Negative test                                |
| Purpose          | To test that the application handles illegal division by zero |
| Preconditions    | division.js imported, dividend and divisor variables defined  |
| Inputs           | Positive dividend 0 and 0 as divisor                          |
| Expected Results | The result of the division operation is not a number          |
| After-conditions | Operation result is NaN                                       |

---

|                  |                                                               |
|------------------|---------------------------------------------------------------|
| ID               | TCXXX                                                         |
| Name             | Dividing -10 by 5 returns -2                                  |
| File             | division.js                                                   |
| Type             | Functional test, Positive test                                |
| Purpose          | To test that the application handles illegal division by zero |
| Preconditions    | division.js imported, dividend and divisor variables defined  |
| Inputs           | Positive dividend -10 and 5s divisor                          |
| Expected Results | -2                                                            |
| After-conditions | Operation result is -2                                        |


### Test cases for filter.js

|                  |                                                                                                             |
|------------------|-------------------------------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                                       |
| Name             | Filter returns a list with only objects mathching search criteria                                           |
| File             | filter.js                                                                                                   |
| Type             | functional test, positive test                                                                              |
| Purpose          | To test that the user is able to find products by a search term provided by the user (Scenario: S1)         |
| Preconditions    | List of products and a search string to filter the results                                                  |
| Inputs           | A list of product objects, a search string                                                                  |
| Expected Results | A new list only with items matching the search string                                                       |
| After-conditions | User is able to browse the filtered list and select products for purchase                                   |

---

|                  |                                                                                                            |
|------------------|------------------------------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                                      |
| Name             | Product search works when no results are found                                                             |
| File             | filter.js                                                                                                  |
| Type             | functional test, positive test                                                                             |
| Purpose          | To test that the application functions when a given search term returns no matching results (Scenario: S1) |
| Preconditions    | User sees a list of products and gives the application a search string to filter the results               |
| Inputs           | A list of products, a search string                                                                        |
| Expected Results | Empty array i.e. no matching search results                                                                |
| After-conditions | User is prompted with a notification for "No results"                                                      |

### Test cases for words.js

|                  |                                                                                                                       |
|------------------|-----------------------------------------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                                                 |
| Name             | Search input string is divided into individual search words                                                           |
| File             | words.js                                                                                                              |
| Type             | functional test, positive test                                                                                        |
| Purpose          | To test that the search input string given by a user is divided into search words for poduct filtering (Scenario: S1) |
| Preconditions    | User sees a list of products and gives the application a search string to filter the results                          |
| Inputs           | A search string, delimiter pattern                                                                                    |
| Expected Results | Array of substrings from the given search input                                                                       |
| After-conditions | Products list is filtered based on invdividual search words                                                           |

### Test cases for map.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Map lists all product objects from an array of products                               |
| File             | map.js                                                                                |
| Type             | functional test, positive test                                                        |
| Purpose          | To test that products are listed correctly (Scenario: S1)                             |
| Preconditions    | User navigates to available products page and is displayed a filterable list of items |
| Inputs           | Array of products                                                                     |
| Expected Results | The Function goes through the array of products and maps the items as a list          |
| After-conditions | Products list is presented to the user                                                |

### Test cases for isEmpty.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Empty object {} returns true                                                          |
| File             | isEmpty.js                                                                            |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to check if back-end returns empty lists or objects                       |
| Preconditions    | isEmpty imported                                                                      |
| Inputs           | Empty object {}                                                                       |
| Expected Results | true                                                                                  |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Empty array [] returns true                                                           |
| File             | isEmpty.js                                                                            |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to check if back-end returns empty lists or objects                       |
| Preconditions    | isEmpty imported                                                                      |
| Inputs           | Empty array   []                                                                      |
| Expected Results | true                                                                                  |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Non-empty object returns false                                                        |
| File             | isEmpty.js                                                                            |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to check if back-end returns empty lists or objects                       |
| Preconditions    | isEmpty imported                                                                      |
| Inputs           | Non-empty object {productid: 1, descriptiom: "Eggs"}                                  |
| Expected Results | false                                                                                 |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Non-empty array returns false                                                         |
| File             | isEmpty.js                                                                            |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to check if back-end returns empty lists or objects                       |
| Preconditions    | isEmpty imported                                                                      |
| Inputs           | Non-empty array   [1,2,3]                                                             |
| Expected Results | false                                                                                 |
| After-conditions | -                                                                                     |

### Test cases for add.js
|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | 5 + 5 is 10                                                                           |
| File             | add.js                                                                                |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to add quantities and prices                                              |
| Preconditions    | add imported                                                                          |
| Inputs           | Addends 5 and 5                                                                       |
| Expected Results | result of addition is 10                                                              |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | 5 + -5 is 0                                                                           |
| File             | add.js                                                                                |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to add quantities and prices                                              |
| Preconditions    | add imported                                                                          |
| Inputs           | Addends 5 and -5                                                                      |
| Expected Results | result of addition is 0                                                               |
| After-conditions | -                                                                                     |

String addition is not tested because there is no usecase for it.

### Test cases for at.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns an array with values matching given paths                                     |
| File             | at.js                                                                                 |
| Type             | functional test, positive test                                                        |
| Purpose          | Can be used to get values of object properties                                        |
| Preconditions    | at imported                                                                           |
| Inputs           | object = { 'a': [{ 'b': { 'c': 3 } }, 4] } and array of paths ['a[0].b.c', 'a[1]']    |
| Expected Results | [3, 4]                                                                                |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns an array with undefined values when called integers                           |
| File             | at.js                                                                                 |
| Type             | functional test, negative test                                                        |
| Purpose          | Can be used to get values of object properties                                        |
| Preconditions    | at imported                                                                           |
| Inputs           | two integers: 1 and 2                                                                 |
| Expected Results | [ undefined ]                                                                         |
| After-conditions | -                                                                                     |

### Test cases for defaultTo.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns a default value when value is null                                            |
| File             | defaultTo.js                                                                          |
| Type             | functional test, positive test                                                        |
| Purpose          | May be used when displaying and saving information.                                   |
| Preconditions    | defaultTo imported                                                                    |
| Inputs           | value: null and default value: "I'm a default value :)"                               |
| Expected Results | "I'm a default value :)"                                                              |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns a default value when value is undefined                                       |
| File             | defaultTo.js                                                                          |
| Type             | functional test, positive test                                                        |
| Purpose          | May be used when displaying and saving information.                                   |
| Preconditions    | defaultTo imported                                                                    |
| Inputs           | value: undefined and default value: "I'm a default value :)"                          |
| Expected Results | "I'm a default value :)"                                                              |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns a value value when value is given                                             |
| File             | defaultTo.js                                                                          |
| Type             | functional test, positive test                                                        |
| Purpose          | May be used when displaying and saving information.                                   |
| Preconditions    | defaultTo imported                                                                    |
| Inputs           | value: "I'm valuable XD" and default value: "I'm a default value :)"                  |
| Expected Results | "I'm valuable XD"                                                                     |
| After-conditions | -                                                                                     |

### Test cases for reduce.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Calculating the sum of array elements                                                 |
| File             | reduce.js                                                                             |
| Type             | functional test, positive test                                                        |
| Purpose          | May be used when displaying prices in cart.                                           |
| Preconditions    | reduce imported                                                                       |
| Inputs           | Collection: [1, 2, 3], iteratee: (sum, n) => sum + n) and inital accumulator value 0. |
| Expected Results | 6                                                                                     |
| After-conditions | -                                                                                     |

### Test cases for isDate.js

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns true when argument is a Date object                                           |
| File             | isDate.js                                                                             |
| Type             | functional test, positive test                                                        |
| Purpose          | Working with dates is a well known challenge in JavaScript development.               |
| Preconditions    | isDate imported                                                                       |
| Inputs           | new Date                                                                              |
| Expected Results | true                                                                                  |
| After-conditions | -                                                                                     |

---

|                  |                                                                                       |
|------------------|---------------------------------------------------------------------------------------|
| ID               | TCXXX                                                                                 |
| Name             | Returns false when argument is not a Date object                                      |
| File             | isDate.js                                                                             |
| Type             | functional test, positive test                                                        |
| Purpose          | Working with dates is a well known challenge in JavaScript development.               |
| Preconditions    | isDate imported                                                                       |
| Inputs           | 'Mon April 23 2012'                                                                   |
| Expected Results | false                                                                                 |
| After-conditions | -                                                                                     |

# Virtual Machine

> - Optionally, the description of your Virtual Machine setup with screenshots (e.g. of a tool test you are running), if
    you want to try your luck in getting the bonus point.

# References

> - List of any and all references used in the document. Add URL links in references (as opposed to inline links within
    the text).


