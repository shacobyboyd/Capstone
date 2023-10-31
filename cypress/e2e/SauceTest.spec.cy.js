const validUsername ='standard_user';
const validPassword ='secret_sauce';
const invalidPassword = 'invalid_password';
describe('Valid Login', () => {
  it('should allow a standard user to log in', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('#user-name').type('standard_user'); 
    cy.get('#password').type('secret_sauce');    
    cy.get('#login-button').click();
    cy.get('.inventory_list').should('be.visible'); 
  });
});
describe("Invalid Password", () => {
  it("should show an error for invalid login", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[name="user-name"]').type('standard_user');
    cy.get('input[name="password"]').type('invalid_password');
    cy.get('input[type="submit"]').click();
    cy.get('.error-message').should('be.visible');
    cy.get('.error-message').should('contain.text', 'Username and password do not match any user in this service');
  });
});
 describe('Invalid Username', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
  });
  it('should display an error message with an invalid username', () => {
    cy.get('input[name="username"]').type('Tomesmith');
    cy.get('input[name="password"]').type('secret_sauce');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Username and password do not match any user in this service');
  });
});
describe('Shopping Cart Functionality', () => {
  it('should add multiple items to the cart', () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[name="user-name"]').type('standard_user'); 
    cy.get('input[name="password"]').type('secret_sauce'); 
    cy.get('.btn_action').click();
    cy.get('.inventory_item').each(($item, index) => {
      if (index < 2) { 
        cy.wrap($item).find('.btn_inventory').click();
      }
    });
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item').should('have.length', 2); 
  });
});
describe('Logout', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('input[name="user-name"]').type('standard_user'); // Replace with a valid username
    cy.get('input[name="password"]').type('secret_sauce'); // Replace with a valid password
    cy.get('.btn_action').click();
  });
  it('should allow the user to log out', () => {
    cy.get('.bm-burger-button').click();
    cy.get('#logout_sidebar_link').click();
    cy.url().should('eq', 'https://www.saucedemo.com/');
  });
});
