describe('Cart Integration', () => {
  beforeEach(() => {
    cy.startApp();
  });
  it('Should navigate into the items', () => {
    cy.awaitableCluster([
      () => cy.getByFeature('HOME', 'ITEMS').should('have.length', 9),
      () => cy.getByFeature('HOME', 'NEXT_ITEMS').click(),
      () => cy.getByFeature('HOME', 'ITEMS').should('have.length', 6),
      () => cy.getByFeature('HOME', 'PREV_ITEMS').click(),
    ], 200);
  });
  it('Should add to cart', () => {
    cy.startApp()
    cy.awaitableCluster([
      () => cy.addToCart('ITEM_1'),
      () => cy.addToCart('ITEM_2'),
      () => cy.addToCart('ITEM_3'),
      () => cy.addToCart('ITEM_3'),
    ], 200)
    cy.startApp('cart.html');
    cy.getByFeature('CART', 'ITEMS').as('items').should('have.length.greaterThan', 3);
  });
  it('Should delete from cart', () => {
    cy.awaitableCluster([
      () => cy.addToCart('ITEM_1'),
      () => cy.addToCart('ITEM_2'),
    ], 200)
    cy.startApp('cart.html');
    cy.deleteFromCart(1);
    cy.getByFeature('CART', 'ITEMS').should('have.length', 1)
  })
  it('Should place an order', () => {
    cy.awaitableCluster([
      () => cy.addToCart('ITEM_1'),
      () => cy.addToCart('ITEM_2'),
    ], 200)
    cy.startApp('cart.html');
    cy.placeOrder({
      name: 'John Doe',
      country: 'United States',
      city: 'New York',
      creditCard: '1234567890123456',
      month: '12',
      year: '2025',
    });
    cy.getByFeature('CART', 'SWEET_ALERT').should('not.exist');
  })
  it('Should be a bad order', () => {
    cy.startApp('cart.html')
    cy.awaitableCluster([
      () => cy.getByFeature('CART', 'PLACE_ORDER').click(),
      () => cy.getByFeature('CART', 'MODAL_ORDER').should('have.class', 'show').should('have.css', 'display', 'block'),
      () => cy.getByFeature('CART', 'PURCHASE').click(),
    ], 100);
    cy.on('window:alert', (text) => {
      expect(text).contains('Please fill out')
      return true
    })
  })
});
