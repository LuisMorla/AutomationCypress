
export const cartCommands = Cypress.Commands.addAll({
  addToCart: (items: ITEMS) => {
    cy.awaitableCluster([
      () => cy.getByFeature('HOME', items).click(),
      () => cy.url().should('include', `idp_=${items.split('_')[1]}`),
      () => cy.getByFeature('PRODUCT', "ADD_TO_CART").click(),
      () => cy.startApp(),
    ], 200);
    cy.on('window:alert', (alertText) => {
      expect(alertText).contains('Product added');
      return true;
    })
  },
  deleteFromCart: (child: number) => {
    cy.getByFeature('CART', 'ITEMS').eq(child).find('a').click();
    return cy
  },
  placeOrder: (order: PLACE_ORDER) => {
    const { name, country, city, creditCard, month, year } = order;
    cy.awaitableCluster([
      () => cy.getByFeature('CART', 'PLACE_ORDER').click(),
      () => cy.getByFeature('CART', 'MODAL_ORDER').should('have.class', 'show').should('have.css', 'display', 'block'),
      () => cy.getByFeature('CART', 'TOTAL_MODAL').should('have.text', 'Total: 1180'),
      () => cy.getByFeature('CART', 'NAME').type(name),
      () => cy.getByFeature('CART', 'COUNTRY').type(country),
      () => cy.getByFeature('CART', 'CITY').type(city),
      () => cy.getByFeature('CART', 'CREDIT_CARD').type(creditCard),
      () => cy.getByFeature('CART', 'MONTH').type(month),
      () => cy.getByFeature('CART', 'YEAR').type(year),
      () => cy.getByFeature('CART', 'PURCHASE').click(),
      () => cy.getByFeature('CART', 'SWEET_ALERT').should('have.class', 'visible').should('have.css', 'display', 'block'),
      () => cy.getByFeature('CART', 'SWEET_BUTTON').click(),
    ], 300);
  }
});