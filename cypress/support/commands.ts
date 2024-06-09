Cypress.Commands.addAll({
  startApp: (path?: string) => cy.visit(`${Cypress.env('Application').baseUrl}${path ?`/${path}` : ''}`),
  getByFeature: <
    T extends KeyOf<FEATURES>,
    K extends KeyOf<FEATURES[T]>
  >(
    feature: T,
    element: K
  ) => cy.get(Cypress.env('FEATURES')[feature][element]),
  awaitableCluster: (process: Array<() => Cypress.Chainer<JQuery<HTMLElement>>>, wait: number) => {
    let chain = cy.wrap(null);
    process.forEach((steps) => {
      chain = chain.then(() => steps()).then(() => cy.wait(wait)) && chain;
    })
    return chain;
  },
});