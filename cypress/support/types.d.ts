export declare global {
    namespace Cypress {
      interface Chainable {
        /**
         * Custom command to select DOM element by data-cy attribute.
         * @example cy.dataCy('greeting')
         */
        openLogin(): Chainable<JQuery<HTMLElement>>
        contactFormMenu(): Chainable<JQuery<HTMLElement>>
        alertMessage(): Chainable<JQuery<HTMLElement>>
        homePage(): Chainable<JQuery<HTMLElement>>
        aboutUS(): Chaineble<JQuery<HTMLElement>>
        login(username:string, password:string): Chainable<JQuery<HTMLElement>>
      }
    }
  }