import LoginPage from '../support/pageObjectModels/loginPage.js'


Cypress.Commands.add('openLogin', ()=>{
    cy.visit(Cypress.env("Application").baseUrl)
})

Cypress.Commands.add('Login', (username, password)=>{
    LoginPage.username().type(username)
    LoginPage.password().type(password)
    LoginPage.accessBtn.click()
})

