/// <reference types="cypress" />
describe('navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('default page is home and active link is home', () => {
    cy.get('[data-cy="home-page"]').should('exist');
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(3, 3, 4)');
  });
  it('change page after clicking on link', () => {
    cy.get('[data-name="Timeline"]').click();
    cy.url().should('include', '/timeline');
    cy.get('[data-cy="timeline"]').should('exist');
    cy.get('[data-name="Bank card"]').click();
    cy.url().should('include', '/bankcard');
    cy.get('[data-cy="bankcard"]').should('exist');
    cy.get('[data-name="Contato"]').click();
    cy.url().should('include', '/contact');
    cy.get('[data-cy="contact"]').should('exist');
  });
  it('change style of clicking link', () => {
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(3, 3, 4)');
    cy.get('[data-name="Timeline"]').click();
    cy.get('[data-name="Timeline"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Timeline"]').should('have.css', 'color', 'rgb(3, 3, 4)');
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
