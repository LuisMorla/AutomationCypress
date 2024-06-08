import Contactpage from '../support/pageObjectModels/dashboardPage.js'


const contact = new Contactpage()

describe("Contacto", () => {
  beforeEach(() => {
    cy.openLogin()
    const path = cy.openLogin()
    console.log(path)
  })

    it('Haciendo click', ()=>{
      contact.contactNav().click()
    })
});