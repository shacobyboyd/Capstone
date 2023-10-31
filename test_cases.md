# Test Cases for www.saucedemo.com Standard User Login

## Test Case 1: Valid Login

**Title:** Verify that a standard user can log in with valid credentials.

**Description:** This test case aims to ensure that standard users can successfully log in to the Saucedemo website using their valid credentials.

**Steps to Execute:**
1. Navigate to the Saucedemo login page (https://www.saucedemo.com/).
2. Enter the standard_user's username.
3. Enter the standard_user's password.
4. Click the "Login" button.

**Expected Results:** The user should be logged in and directed to the Saucedemo product page.

**Test Data:**
- Username: standard_user
- Password: secret_sauce

---

## Test Case 2: Invalid Username

**Title:** Confirm that an invalid username prevents login.

**Description:** This test case verifies that entering an invalid username results in a failed login attempt.

**Steps to Execute:**
1. Navigate to the Saucedemo login page.
2. Enter an invalid username (e.g., "invaliduser").
3. Enter a valid password.
4. Click the "Login" button.

**Expected Results:** The system should display an error message indicating an unsuccessful login attempt.

**Test Data:**
- Username: invaliduser
- Password: secret_sauce

---

## Test Case 3: Invalid Password

**Title:** Verify that an invalid password prevents login.

**Description:** This test case checks if entering an invalid password leads to a failed login.

**Steps to Execute:**
1. Navigate to the Saucedemo login page.
2. Enter the standard_user's username.
3. Enter an invalid password (e.g., "incorrectpass").
4. Click the "Login" button.

**Expected Results:** The system should display an error message indicating an unsuccessful login attempt.

**Test Data:**
- Username: standard_user
- Password: incorrectpass

---

# Test Case 4: Add Items to the Cart

**Title:** Confirm that users can add items to the shopping cart.

**Description:** This test case checks if users can add products to their shopping cart successfully.

**Steps to Execute:**
1. Log in to the Saucedemo website using valid credentials (standard_user).
2. Navigate to the product page (e.g., https://www.saucedemo.com/inventory.html).
3. Add one or more products to the shopping cart by clicking the "Add to Cart" button for each product.

**Expected Results:** The selected products should be added to the shopping cart, and the cart icon should indicate the number of items added.

**Test Data:** None
---

## Test Case 5: Logout

**Title:** Confirm that a user can successfully log out.

**Description:** This test case verifies that the logout functionality works as expected.

**Steps to Execute:**
1. Log in to the Saucedemo website using valid credentials (standard_user).
2. Click the "Menu" icon (usually represented as three horizontal lines).
3. Click the "Logout" option.

**Expected Results:** The user should be logged out and redirected to the login page.

**Test Data:**
- Username: standard_user
- Password: secret_sauce
