import type ENV from './cypress.env.json';

export declare global {
  export type FEATURES = typeof ENV.FEATURES;

  type KeyOf<T> = {
    [K in keyof T]: T[K] extends any ? K : never;
  }[keyof T];

  type NestedKeys<T> = T extends object
    ? {
        [K in keyof T]: K extends string
          ? T[K] extends string
            ? K
            : NestedKeys<T[K]>
          : never;
      }[keyof T]
    : never;

  export type FEATURES_ELEMENTS = KeyOf<FEATURES>;
  export type FEATURES_ELEMENTS_KEYS<K extends FEATURES_ELEMENTS> = NestedKeys<
    FEATURES[K]
  >;
    
  export type ITEMS = KeyOf<Pick<FEATURES['HOME'], 'ITEM_1' | 'ITEM_2' | 'ITEM_3'>>

  export type PLACE_ORDER = {
    name: string;
    country: string;
    city: string;
    creditCard: string;
    month: string;
    year: string;
  }
  namespace Cypress {
    interface Chainable {
      startApp: (path?: string) => Chainable<JQuery<HTMLElement>>;
      /**
       * Get the element by feature and element, the feature must be a key of FEATURES and the element must be a key of the feature
       * to configure the features go to cypress.env.json
       * @param feature
       * @param element
       * @returns
       * @example
       * cy.getByFeature('HOME', 'ITEMS')
       * cy.getByFeature('HOME', 'NAVIGATE')
       * cy.getByFeature('HOME', 'NEXT_ITEMS')
       * 
       */
      getByFeature: <K extends FEATURES_ELEMENTS>(
        feature: K,
        element: FEATURES_ELEMENTS_KEYS<K>
      ) => Chainable<JQuery<HTMLElement>>;
      /**
       * This function will execute a list of functions in a chain and wait for a specific time to make most of the process more stable and natural
       * @fires YOU MUST BE CAREFUL WITH THE WAIT TIME, IF YOU PUT A BIGGER TIME THAN THE PROCESS NEEDS, THE TEST WILL BE SLOWER AND REMOVE THE MOST  FUNCTION YOU HAVE THE MOST TIME YOU WILL WAIT
       * @param process 
       * @param wait 
       * @returns 
       */
      awaitableCluster: (
        process: Array<() => Chainable<any>>,
        wait: number
      ) => Chainable<JQuery<HTMLElement>>;
      openLogin(): Chainable<JQuery<HTMLElement>>;
      contactFormMenu(): Chainable<JQuery<HTMLElement>>;
      alertMessage(): Chainable<JQuery<HTMLElement>>;
      homePage(): Chainable<JQuery<HTMLElement>>;
      aboutUS(): Chainable<JQuery<HTMLElement>>;
      login(username: string, password: string): Chainable<JQuery<HTMLElement>>;
      addToCart(item: ITEMS): Chainable<JQuery<HTMLElement>>;
      deleteFromCart(child: number): Chainable<JQuery<HTMLElement>>;
      placeOrder(order: PLACE_ORDER): Chainable<JQuery<HTMLElement>>;
    }
  }
}
