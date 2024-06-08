import Contactpage from '../support/pageObjectModels/dashboardPage'


const contact = new Contactpage()

describe("Dashboard Menu", () => {
  beforeEach(() => {
    cy.openLogin()
  })

    it('Fill out form correctly', ()=>{
      cy.contactFormMenu()
      cy.alertMessage()
    })
});