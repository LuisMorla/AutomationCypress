describe("Dashboard Menu", () => {
  beforeEach(() => {
    cy.openLogin()
  })

    it('Contact menu Button', ()=>{
      cy.contactFormMenu()
      cy.alertMessage()
    })

    it('Home page menu Button', ()=>{
      cy.homePage()
    })

    it('About us menu Button', ()=>{
      cy.aboutUS()
    })

    it('Login success', ()=>{
      cy.login(Cypress.env('Credentials').username, Cypress.env('Credentials').password)
    })
});