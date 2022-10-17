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
| Another | And its description        |

# Introduction

> - Short introduction to the contents of the document.
> - What is in the document?
> - What is the purpose of the document?

This document describes a test plan for the E-Commerce Store application. The aim is to give a detailed description
of the test strategy, test objectives and test deliverables for the project.

First, descriptions of end-to-end scenarios are presented. Second, tools for the testing are defined with the actual
tests. Finally, a Virtual Machine setup for the testing environment is illustrated.

# Scenarios

> - The descriptions of your end-to-end scenarios.
> - What components of the E-commerce store will be tested, how and why?
> - What tools will be used for the testing (if you can think of any based on the provided documentation)?
> - A (UML) diagram of your scenario. The diagram can be, for example, an activity or sequence diagram, whatever feels
    most natural. The diagram can be high-level (abstract). If you know which tools are should to be used, describe how
    they are used in relation to your diagram.
> - List the source code files you selected for your unit tests from the provided utility library. Use a prioritization
    method to validate your file selections. Remember your end-to-end scenarios.

We identified multiple end-to-end scenarios from the application description. The scenarios described here are limited
to four, since based on our evaluation, those cover the most important features of the application. Two of them are
related to customer functionality and two to producer functionality. Following figures (Figure 1–4) present these
scenarios in a form of sequence diagrams.

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

**S5: Producer handles a received order (backup scenario option)**

**Components to be tested**

- Product list
- Shopping cart
- Search
- Log in / Registration
- Product Add Form

**What is not tested**

- TODO

**Source Files**

1. capitalize.js
    - used when producer saves a new product (S3)
2. reduce.js
    - Used when displaying cart prices (S1)
3. isEmpty.js
    - Used when checking validity of form fields (S1, S2, S3, S4)
4. divide.js
    - Has a critical error in syntax
    - Maybe used when displaying prices per Kg or similar (S1)
5. defaultTo.js
    - Can be used when displaying information that may not have been input (S1, S3)
6. filter.js
    - Used when displaying product lists (S1)
7. words.js
    - Used when searching products (S1)
8. toNumber.js
    - Can be used when saving numeric data from input fields which give string values by default
9. slice.js
    - Can be used when removing products from cart
10. map.js
    - Can be used when mapping array item (products) into React components (S1)

# Tools

> - Description of the chosen tools, packages, libraries, etc. including possible links to web sources (tutorials,
    homepages, etc). Why did you select these tools and how did you test them?
> - How would the tools be used to test your end-to-end scenarios?

- Jest
- React Testing Library

We picked [Jest](https://jestjs.io/), a JavaScript testing framework, for unit and integration testing. Since the
testable file/function count is low, Jest will work well. It works without much additional configuration and is easy to
use. If the testable amount was higher, a deeper consideration and comparison should be conducted.

The Jest framework was tested by creating a simple test case for the divide function of the provided utility library.

If we had access to the React application, we suggest that React Testing Library was to be used. It is a...

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

# Virtual Machine

> - Optionally, the description of your Virtual Machine setup with screenshots (e.g. of a tool test you are running), if
    you want to try your luck in getting the bonus point.

# References

> - List of any and all references used in the document. Add URL links in references (as opposed to inline links within
    the text).


