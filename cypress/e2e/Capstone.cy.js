
const email = 'shacobyboyd2@gmail.com';
const userPassword = 'Jujumario2!';
const loginUrl = 'https://thinking-tester-contact-list.herokuapp.com/login';
const Token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTgxYmM4MmJkZDdhYjAwMTM3MTVmOTUiLCJpYXQiOjE3MDMwMDEyMTh9.ujyu7EXlj-UeDEOfIJ7qhQyCEHrCK2Mz5WEyegstsOk';
describe('Login User', () => {
    it('should log in successfully', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/login');
       cy.get('input[placeholder="Email"]').type(email);
      cy.get('input[placeholder="Password"]').type(userPassword)
      cy.get('#submit').should('exist').click();
    });
});
describe('Add Contact', () => {
    it('should add a new contact', () => {
        cy.visit('https://thinking-tester-contact-list.herokuapp.com/addContact');
        cy.get('#firstName').type('John');
        cy.get('#lastName').type('Doe');
        cy.get('#birthdate').type('1990-01-01');
        cy.get('#email').type('john.doe@example.com');
        cy.get('#phone').type('8005551234');
        cy.get('#street1').type('123 happy lane');
        cy.get('#street2').type('apt a');
        cy.get('#city').type('City');
        cy.get('#stateProvince').type('NC');
        cy.get('#postalCode').type('12345');
        cy.get('#country').type('Country');
        cy.get('button[type="submit"]').click();
    });
});
describe('Get Contacts List', () => {
  it('should retrieve and display a list of contacts', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactList');
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTgxYmM4MmJkZDdhYjAwMTM3MTVmOTUiLCJpYXQiOjE3MDMwMDEyMTh9.ujyu7EXlj-UeDEOfIJ7qhQyCEHrCK2Mz5WEyegstsOk';
    cy.request({
      method: 'GET',
      url: 'https://thinking-tester-contact-list.herokuapp.com/contactList',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  });
});
describe('Get Contact Details', () => {
  it('should retrieve and display details of a specific contact', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactDetails');
    cy.get('#edit-contact').click(); 
    cy.get('#firstName').type('Mike');
    cy.get('#lastName').type('Doe');
    cy.get('#birthdate').type('1987-04-06');
    cy.get('#email').type('555e@gmail.com');
    cy.get('#phone').type('987654323');
    cy.get('#street1').type('123 peace way');
    cy.get('#city').type('Charlotte');
    cy.get('#stateProvince').type('NC');
    cy.get('#postalCode').type('2222');
    cy.get('#country').type('United States');
    cy.get('#submit').click();
  });
});
describe('Update Contact', () => {
  it('should update an existing contact', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/contactDetails');
    cy.get('#edit-contact').click(); 
    cy.get('#firstName').clear().type('Updated Mike');
    cy.get('#lastName').clear().type('Updated Doe');
    cy.get('#birthdate').clear().type('1990-01-01');
    cy.get('#email').clear().type('updated.mike.doe@example.com');
    cy.get('#phone').clear().type('1234567890');
    cy.get('#street1').clear().type('456 New Street');
    cy.get('#city').clear().type('New City');
    cy.get('#stateProvince').clear().type('New State');
    cy.get('#postalCode').clear().type('54321');
    cy.get('#country').clear().type('New Country');
    cy.get('#submit').click(); 
  });
});
describe('Add User', () => {
  it('should add a new user', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/addUser');
    cy.get('#firstName').type('John');
    cy.get('#lastName').type('Doe');
    cy.get('#email').type('john.doeddd@gmail.com');
    cy.get('#password').type('password123');
    cy.get('button[type="submit"]').click();
  });
});
describe('Logout User', () => {
  it('should log out the user', () => {
    cy.visit('https://thinking-tester-contact-list.herokuapp.com/dashboard');
    cy.get('#logout').click();
  });
});
