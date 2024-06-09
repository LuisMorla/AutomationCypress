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

  export interface Contact {
    email: string;
    name: string;
    message: string;
  }

  namespace Cypress {
    interface Chainable {
      startApp: (path?: string) => Chainable<JQuery<HTMLElement>>;
      getByFeature: <K extends FEATURES_ELEMENTS>(
        feature: K,
        element: FEATURES_ELEMENTS_KEYS<K>
      ) => Chainable<JQuery<HTMLElement>>;
      contactForm: (contact: Contact) => CHainable<JQuery<HTMLElement>>;
      awaitableCluster: (
        process: Array<() => Chainable<JQuery<HTMLElement>>>,
        wait: number
      ) => Chainable<JQuery<HTMLElement>>;
      openLogin(): Chainable<JQuery<HTMLElement>>;
      contactFormMenu(): Chainable<JQuery<HTMLElement>>;
      alertMessage(): Chainable<JQuery<HTMLElement>>;
      homePage(): Chainable<JQuery<HTMLElement>>;
      aboutUS(): Chainable<JQuery<HTMLElement>>;
      login(username: string, password: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
