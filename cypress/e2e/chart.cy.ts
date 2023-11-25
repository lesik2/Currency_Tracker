/// <reference types="cypress" />
describe('chart', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-name="Timeline"]').click();
  });
  it('should open modal with 31 inputs after clicking on button', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.get('[data-cy="chart-model"]').should('exist');
    cy.get('[data-cy="bar-input"]').should('have.length', '124');
    cy.get('[data-cy="cross-close"]').click();
    cy.get('[data-cy="chart-modal"]').should('not.exist');
  });
  it('should fill every input with valid random value after clicking on button "get random data"', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.contains('Get random data').click();
    cy.get('[data-cy="bar-input"]').each(($el) => {
      cy.wrap($el).invoke('val').then((value) => {
        const numericValue = parseFloat(value as string);
        expect(numericValue).to.be.greaterThan(0);
      });
    });
  });
  it('should close modal and show snackBar after clicking on button "create chart"', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.contains('Get random data').click();
    cy.contains('Create chart').click();
    cy.get('[data-cy="chart-modal"]').should('not.exist');
    cy.get('[data-cy="snack-bar"]').should('exist');
  });
  it('should save input value after closing modal', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.get('[data-cy="bar-input"]').first().type('198');
    cy.get('[data-cy="cross-close"]').click();
    cy.get('[data-cy="button-chart"]').click();
    cy.get('[data-cy="bar-input"]').first().invoke('val').should('eq', '198');
  });
  it('should show error message and focus input after invalid input', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.get('[data-cy="bar-input"]').first().type('dres23');
    cy.get('[data-cy="bar-input"]').first().should('have.css', 'border-color', 'rgb(255, 0, 0)');
    // cy.get('[data-cy="chart-modal"]').contains('The coordinates should be numbers l(min) h(max)');
  });
  it('should disable "create chart" button when exist inputs without value', () => {
    cy.get('[data-cy="button-chart"]').click();
    cy.contains('Create chart').should('have.attr', 'disabled');
  });
});
