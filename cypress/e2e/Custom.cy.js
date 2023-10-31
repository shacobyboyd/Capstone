import "../support/Custom.js"
describe('My Test Suite', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/');
  });

  it('should log in', () => {
    cy.login('standard_user', 'secret_sauce');
  });

  it('should verify cart item count', () => {
    cy.verifyCartItemCount();
   
  });
});
