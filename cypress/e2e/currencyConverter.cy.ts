/// <reference types="cypress" />

describe('currencyConverter', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('Home page should show 9 cards with currency and 2 with stocks', () => {
    cy.get('[data-cy="cards-currency-wrapper"]>[data-cy="currency-card"]').should('have.length', 9);
    cy.get('[data-cy="cards-stocks-wrapper"]>[data-cy="currency-card"]').should('have.length', 2);
  });
  it('should show modal after clicking on currency card and close after clicking on cross', () => {
    cy.get('[data-cy="cards-currency-wrapper"]').children().each(($el) => {
      cy.wrap($el).click();
      cy.get('[data-cy="modal-currency"]').should('exist');
      cy.get('[data-cy="cross-close"]').click();
      cy.get('[data-cy="modal-currency"]').should('not.exist');
    });
  });
  it('should show modal with valid data', () => {
    cy.get('[data-cy="cards-currency-wrapper"]').children().contains('Euro').click();
    cy.get('[data-cy="modal-currency"]').contains('Euro');
    cy.get('[data-cy="cross-close"]').click();
    cy.get('[data-cy="cards-currency-wrapper"]').children().contains('Yuan').click();
    cy.get('[data-cy="modal-currency"]').contains('Yuan');
  });
  it('should show error message after invalid data typing in hide result', () => {
    cy.get('[data-cy="cards-currency-wrapper"]').children().contains('Euro').click();
    cy.get('[data-cy="input-amount"]').should('have.value', 1);
    cy.get('[data-cy="input-amount"]').type('.');
    cy.get('[data-cy="error-message-currency"]').contains('Input should be a number (e.g. 12)');
    cy.get('[data-cy="result-currency"]').should('be.empty');
    cy.get('[data-cy="input-amount"]').type('2');
    cy.get('[data-cy="error-message-currency"]').should('not.exist');
    cy.get('[data-cy="result-currency"]').should('not.be.empty');
    cy.get('[data-cy="input-amount"]').type('df');
    cy.get('[data-cy="error-message-currency"]').contains('Input should be a number (e.g. 12)');
    cy.get('[data-cy="result-currency"]').should('be.empty');
  });
  it('should change currency to convert', () => {
    cy.get('[data-cy="cards-currency-wrapper"]').children().contains('Euro').click();
    cy.get('[data-cy="selected-currency"]').contains('Commercial Dollar');
    cy.get('[data-cy="selected-currency"]').click();
    cy.get('[data-cy="variants-currency"]').children().each(($el) => {
      cy.wrap($el).click();
      cy.get('[data-cy="selected-currency"]').contains($el.get(0).innerText);
      cy.get('[data-cy="selected-currency"]').click();
    });
  });
});
