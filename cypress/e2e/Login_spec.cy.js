describe('Launchapplication', () => {
    it('should open site', () => {
        cy.visit('https://demo.applitools.com/')
      
    })
}) 
describe('enterUsername(', () => {
    const validUsername = 'YourValidUsername';
    it('should display a login form',() => {
        cy.visit('https://demo.applitools.com/')
    })
})
describe('enterPassword', () => {
    const validUserPassword = 'YourValidpassword';
    it('should display validpassword', () => {
        cy.visit('https://demo.applitools.com/')
})
    })
describe('clickloginbutton', () => {
    it('should open siteshould locate login button on page and click it', () => {
        cy.visit('https://demo.applitools.com/')

    })
})
describe('verifyLoginSuccess', () => {
    it('should assert user has login success', () => {
        cy.visit('https://demo.applitools.com/')
    })
})
