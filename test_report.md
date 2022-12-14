# Cover page

- Name of the document,
- course ID and course name,
- the names of students as well as the student numbers,
- and the URL to the GitHub repository.

# Definitions, acronyms and abbrevations

- List of any definitions, acronyms and abbrevations used in the document.

# Introduction

- Short introduction to the contents of the document.
- What is in the document?
- What is the purpose of the document?

This documents contains a report of the testing process for the utility library of the front-end of the E-Commerce
Store application. The aim of this document is to give a thorough description of what was tested, how the tests were
run and what were the results.

The report begins with a description of the target of the testing and a list of issue categorization in Section 2.
Next, section 3 gives an overview of the tests and the GitHub Actions workflow, in addition to instructions of how
to run the tests. Finally, section 4 provides our findings and conclusion of the testing process.

# Definition of done

The target of the testing was to test the most critical parts of the utility library. The files chosen for the tests 
are estimated as essential for the front end application using the utility library, which is why all tests must pass, 
until the testing can be deemed passed as a whole.

The following severity rating of the bugs is utilized, listed from the least critical to the most critical:

- minor
- medium
- major.

# Tests & CI pipeline

- Add a description of your tests and GitHub Actions workflow.
- Include instructions on how to run your unit tests and generate coverage report locally.

This section describes the testing process. First the files under testing are listed. Second, a guide is provided
for running the tests and creating a coverage report locally. Third, the used CI pipeline and overalls integration
is explained. Finally, a list of bugs are reported.

## Description of the tests

Unit test were made using **Jest** JavaScript Testing Framework. Jest was selected because it is easy to use and there
is little or no need for configuration. It is also easy to generate code coverage reports with the --coverage flag. The
ten selected utility function files from the provided library were the following:

- add.js
- at.js
- defaultTo.js
- divide.js
- filter.js
- isDate.js
- isEmpty.js
- map.js
- reduce.js
- words.js

More in-depth reasoning for these selections can be found from the test_plan.md file. The tests consist of ten test
suites corresponding to each of the selected files. Total amount of unit tests written was 25. Tests can be found from
the **tests** folder in the project root. Tests are named using the convention: filename.test.js, where the filename is
the utility library file under testing. The individual tests are pretty straightforward in of themselves. The functions
are given predefined inputs (test_plan.md) and the function outputs are compared to the expected output. If output
matches the expected output the test passes. If the function returns something unexpeted or there are errors the test
fails.

A few changes are made to the tests since the test plan. Regarding the utility library file words.js, there were a
few misunderstandings of how the function should work. A comparison of the original test and the updated tests can
be viewed below.

- List the new tests

## Running the tests locally

The tests can be run locally from a terminal by navigating to the project root folder. First install required
dependencies by running the command:

```
$   npm install
```

You can run the unit tests without coverage in the terminal with the command:

```
$   npm test
```

You can run the tests with coverage report using the command:

```
$   npm run test:coverage
```

When locally running tests with coverage, the coverage report can be found from a folder named **coverage** from the
project root folder. Path to the summary report is the following:

```
.\coverage\lcov-report\index.html
```

## CI pipeline and coveralls

Node.js starter workflow template (By GitHub Actions) was used as the base for the continuous integration and testing
workflow for this project. The workflow will do a clean installation of node dependencies, cache/restore them and run
tests across different versions of node. Build of the source code was obviously omitted since the actual web store
application is not implemented in the scope of this assignment.

The workflow will be triggered on push events and pull requests to the main branch of the repository. The jobs to run on
Linux, using the GitHub-hosted ubuntu-latest runners.

The starter workflow includes a matrix strategy that builds and tests the code with different Node.js versions. Our
workflow uses Node versions 16.x and 18.x. The 'x' matches the latest minor and patch release available for a version.
The jobs of the workflow are run on each of the specified Node versions separately. We had issues with Node version 14
when running our tests and not enough time to debug and fix the issue, so Node version 14 was dropped from the workflow.

The workflow runs the following commands:

```
$   npm ci
```

which does a clean installation of the applications dependencies and

```
$   npm run test:coverage
```

which runs the Jest unit tests with coverage and coveralls. Then the work flow posts the test suite's LCOV coverage data
to coveralls.io.

The picture below shows GitHub Actions workflow running the tests on push event.

![GitHub Actions](/github_actions.png)

From the [Coveralls report](https://coveralls.io/github/petrikreus/comp-se-200-assignment?branch=main) you can view the
test coverage information.

## Bug report template

|                       |                                                                                  |
|-----------------------|----------------------------------------------------------------------------------|
| ID                    | Unique ID                                                                        |
| Title                 | Descriptive report title                                                         |
| Description           | Description of the issue / error / failure                                       |
| Reported by           | Person who created the bug report                                                |
| Reported Date         | When was the report created                                                      |
| Name of the Program   | Name of the program under testing                                                |
| Testing configuration | Information on testing configuration                                             |
| Report type           | Programming error, design error, conflict with documentation, proposal, question |
| Failure repeatable    | Yes, No, Sometimes, Unknown                                                      |
| Seriousness           | Major, Medium, Minor                                                             |
| How to repeat         | Instructions how to repeat / re-produce the issue                                |
| Recommended fix       | Suggestion for fixing the issue                                                  |
| Assigned to           | Person responsible for reviewing and fixing the bug                              |
| Status                | New, Assigned, Fixed, Verified, Re-open, Won't Fix, Closed                       |
| Comments              | Free-form comments.                                                              |

# Findings and conclusions

- Make reports of any bugs or issues you happen to find (if any).
    - Excel file with reports in repo.
- Estimate on the overall quality of the tested library. Did it pass your tests? Is it ready for production? Should
  it be used with the E-Commerce application? Is the E-Commerce application ready for production?
- Estimate the test coverage. Was the library "fully tested"? How about the E-Commerce application? Is there a need
  for further tests?

The tests show that two files out of the total of ten have bugs in them. One bug which is major and one which is
minor. Based on these findings, the testing did not pass our criteria, which was a 100% pass rate. The proposed fixes
are estimated to require only minor effort, however. The major bug is most likely due to a programming error and the 
minor bug is more of a conceptual error which should be defined unambiguously.

The application and the utility library are not fully tested. Our tests covered only a fraction of the utility 
library. Moreover, this testing did not include any integration, system or acceptance tests. Since bugs were already 
found at the unit level suggests that additional higher level tests would most likely reveal additional problems.

In conclusion, the overall quality of the utility library is difficult to estimate, since the tests covered only a 
fraction of the whole library. However, based on our findings, our best estimation is that the library has bugs in 
20% of its code base, and 10% of the code base may include major bugs. Building on this estimation, we posit that 
found bugs should be fixed and further testing should be considered before using the utility library in production.

# References

- List of any and all references used in the document. Add URL links in references (as opposed to inline links within
  the text).

[Building and testing Node.js](https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs)

[Coveralls GitHub Action](https://github.com/marketplace/actions/coveralls-github-action)

[Jest](https://jestjs.io/docs/getting-started)

