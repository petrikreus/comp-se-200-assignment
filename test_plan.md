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

## Users

- Users can search products by category, price, product contents, and producer. 
- Products can be added to a shopping cart. 
- Shopping cart automatically updates and shows the total price.
- Checkout and payment process is handled with a third-party solution.

## Producers 
- The food producers can add their products via a previously created portal, or by using a front-end application.
- The producers can leave some fields blank if they do not want to specify some attributes like category or contents.

# Tools

> - Description of the chosen tools, packages, libraries, etc. including possible links to web sources (tutorials,
    homepages, etc). Why did you select these tools and how did you test them?
> - How would the tools be used to test your end-to-end scenarios?

# Tests

> - What kind of tests are to be performed (unit, integration, …), and what is their importance for the end-to-end
    scenarios you described?
> - What components of the E-commerce store will be tested and what will not be tested, and why?
> - How will the test results be documented?
> - If bugs or issues are found, how are they classified or categorized? Add a template of you bug/issue report if
    needed.
> - When the tests are considered "passed"?
> - How to guarantee adequate code coverage?

The scope of the testing is limited to unit and integration tests, since access is given only to the utility library. 

# Virtual Machine

> - Optionally, the description of your Virtual Machine setup with screenshots (e.g. of a tool test you are running), if
    you want to try your luck in getting the bonus point.

# References

> - List of any and all references used in the document. Add URL links in references (as opposed to inline links within
    > the text).


