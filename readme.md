Contact List App Test Plan
Introduction/Overview
This test plan aims to ensure the quality and reliability of the Contact List App hosted at https://thinking-tester-contact-list.herokuapp.com/. The purpose is to identify and rectify any defects, security vulnerabilities, or usability issues within the system. The stakeholders involved include developers, QA team members, and project managers.

Test Objectives
Validate Functionality:

Ensure the Contact List App functions in accordance with specified requirements.
Security Assessment:

Identify and address security vulnerabilities within the application.
Usability Evaluation:

Assess the usability and user interface of the Contact List App.
API Endpoint Testing:

Ensure API endpoints function as expected and handle data securely.
Test Strategy
The testing approach includes functional testing, API testing, security testing, and usability testing. Both manual and automated testing methodologies will be employed for comprehensive coverage. Testing will be conducted across multiple environments, including development, testing, and production.

Test Deliverables
Test Plan Document:

Word, text, or markdown file documenting the test plan.
API and UI Test Cases:

Spreadsheet file containing test cases with clear objectives, titles, descriptions, preconditions, test data, test steps, and expected results.
Defect Logging in Jira:

Each defect discovered during manual testing will be logged into the Jira account with a detailed description, steps to reproduce, observed behavior, and impact on the system.
Test Schedule
The testing activities will be executed following the outlined schedule, including milestones and dependencies. While the schedule may not be perfect, it serves to partition work over work cycles and sprints.

Test Case Creation
API Test Cases:

Develop 12 API test cases, one for each endpoint.
Functional UI Test Cases:

Develop 10 functional UI test cases.
Non-functional Test Cases:

Develop 4 non-functional test cases.
Non-invasive Security Tests:

Develop 4 non-invasive security tests focusing on scenarios like XSS scripts.
Manual Testing
Execute the test plan created, following the steps outlined in each test case, and verify the results against the expected outcomes. Take note of any deviations, unexpected behavior, or defects during manual testing.

Defect Logging
Log into Jira account.
Log each defect discovered during manual testing.
Provide a detailed description of the defect.
Include steps to reproduce, observed behavior, and impact on the system.
Assign a severity level to each defect based on its impact.
Automated Testing
Confirm automated test suite functionality.
Add the link to your GitHub repository for evaluation in the README.
Ensure repository includes automated tests, GitHub Actions workflow file, and necessary configuration files.
