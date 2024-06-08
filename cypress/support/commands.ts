import LoginPage from './pageObjectModels/loginPage'
import Dashboard from './pageObjectModels/dashboardPage'

const login = new LoginPage()
const dashboard = new Dashboard()


Cypress.Commands.add('openLogin', ()=>{
    cy.visit(Cypress.env("Application").baseUrl)
})



Cypress.Commands.add('contactFormMenu', ()=>{
    dashboard.menuPageBtn().eq(1).click()
    dashboard.contactEmail().type(Cypress.env("Application").contactEmail)
    dashboard.contactName().type(Cypress.env("Application").contactName)
    dashboard.contactMessage().type(Cypress.env("Application").contactMessage)
    dashboard.sendMessage().click()
})



Cypress.Commands.add('alertMessage', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).contains('Thanks for the message!!')
        return true
    })
})


Cypress.Commands.add('homePage', ()=>{
    dashboard.menuPageBtn().eq(0).click()
    dashboard.categories().should('be.visible')
})

Cypress.Commands.add('aboutUS', ()=>{
    dashboard.menuPageBtn().eq(2).click()
    cy.get('div.modal-content').should('be.visible')
})

Cypress.Commands.add('login', (username:string, password:string) => {
    dashboard.menuPageBtn().eq(4).click()
    dashboard.username().type(username)
    cy.wait(1000)
    dashboard.password().type(password)
    dashboard.loginButton().click()
    dashboard.menuPageBtn().eq(6).should('contain.text', 'Welcome ' + username)
})