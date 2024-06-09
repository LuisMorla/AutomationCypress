import { Dashboard } from '../pageObjectModels';

const dashboard = new Dashboard();

export const dashboardCommands = Cypress.Commands.addAll({
  contactFormMenu: () => {
    dashboard.menuPageBtn().eq(1).click();
    dashboard.contactEmail().type(Cypress.env('Application').contactEmail);
    dashboard.contactName().type(Cypress.env('Application').contactName);
    dashboard.contactMessage().type(Cypress.env('Application').contactMessage);
    dashboard.sendMessage().click();
  },
  alertMessage: () => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).contains('Thanks for the message!!');
      return true;
    });
  },
  homePage: () => {
    dashboard.menuPageBtn().eq(0).click();
    dashboard.categories().should('be.visible');
  },
  aboutUS: () => {
    dashboard.menuPageBtn().eq(2).click();
    cy.get('div.modal-content').should('be.visible');
  },
  login: (username: string, password: string) => {
    dashboard.menuPageBtn().eq(4).click();
    dashboard.username().type(username);
    cy.wait(1000);
    dashboard.password().type(password);
    dashboard.loginButton().click();
    dashboard
      .menuPageBtn()
      .eq(6)
      .should('contain.text', 'Welcome ' + username);
  },
});