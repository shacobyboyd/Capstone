# Saucedemo Automated Test Suite

This repository contains automated test cases for the Saucedemo website's standard_user login functionality using Cypress.io.

## Test Cases

### Test Case 1: Valid Login

- **Description:** This test case verifies that standard users can log in successfully with valid credentials.
- **Steps:**
  1. Navigate to the [Saucedemo login page](https://www.saucedemo.com/).
  2. Enter the standard_user's username.
  3. Enter the standard_user's password.
  4. Click the "Login" button.
- **Expected Results:** The user should be logged in and directed to the Saucedemo product page.
- **Test Data:** Username: standard_user, Password: secret_sauce

### Test Case 2: Invalid Username

- **Description:** This test case confirms that entering an invalid username prevents login.
- **Steps:**
  1. Navigate to the Saucedemo login page.
  2. Enter an invalid username (e.g., "invaliduser").
  3. Enter a valid password.
  4. Click the "Login" button.
- **Expected Results:** The system should display an error message indicating an unsuccessful login attempt.
- **Test Data:** Username: invaliduser, Password: secret_sauce

### Test Case 3: Invalid Password

- **Description:** This test case verifies that an invalid password prevents login.
- **Steps:**
  1. Navigate to the Saucedemo login page.
  2. Enter the standard_user's username.
  3. Enter an invalid password (e.g., "incorrectpass").
  4. Click the "Login" button.
- **Expected Results:** The system should display an error message indicating an unsuccessful login attempt.
- **Test Data:** Username: standard_user, Password: incorrectpass

### Test Case 4: Add Items to the Cart

- **Description:** This test case confirms that users can add items to the shopping cart.
- **Steps:**
  1. Log in to the Saucedemo website using valid credentials (standard_user).
  2. Navigate to the product page (e.g., [Product Page](https://www.saucedemo.com/inventory.html)).
  3. Add one or more products to the shopping cart by clicking the "Add to Cart" button for each product.
- **Expected Results:** The selected products should be added to the shopping cart, and the cart icon should indicate the number of items added.
- **Test Data:** None

### Test Case 5: Logout

- **Description:** This test case confirms that a user can successfully log out.
- **Steps:**
  1. Log in to the Saucedemo website using valid credentials (standard_user).
  2. Click the "Menu" icon (usually represented as three horizontal lines).
  3. Click the "Logout" option.
- **Expected Results:** The user should be logged out and redirected to the login page.
- **Test Data:** Username: standard_user, Password: secret_sauce

## Running the Tests

To run these automated tests, follow these steps:

1. Clone this repository to your local machine.

2. Ensure you have [Node.js](https://nodejs.org/) installed.

3. Install Cypress by running the following command in your project directory:

   ```shell
   npm install cypress
