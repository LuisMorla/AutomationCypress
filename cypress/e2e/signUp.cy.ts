 describe('Sign Up', () => {
    beforeEach(() => {
      cy.startApp()
    })
  
    it('Sign Up success', ()=>{
      cy.signUp(Cypress.env('Credentials').usernameSignUp.usernameExist, Cypress.env('Credentials').usernameSignUp.password)
    })

    it('Sign Up fail', ()=>{
      cy.signUp(Cypress.env('Credentials').usernameSignUp.usernameNotExist, Cypress.env('Credentials').usernameSignUp.password)
    })
 });