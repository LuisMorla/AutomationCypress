import LoginPage from './pageObjectModels/loginPage'
import ContactPage from './pageObjectModels/dashboardPage'

const login = new LoginPage()
const contact = new ContactPage()


Cypress.Commands.add('openLogin', ()=>{
    cy.visit(Cypress.env("Application").baseUrl)
})



Cypress.Commands.add('contactFormMenu', ()=>{
    contact.contactNav().click()
    contact.contactEmail().type(Cypress.env("Application").contactEmail)
    contact.contactName().type(Cypress.env("Application").contactName)
    contact.contactMessage().type(Cypress.env("Application").contactMessage)
    contact.sendMessage().click()
})



Cypress.Commands.add('alertMessage', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).contains('Thanks for the message!!')
        return true
    })
})
