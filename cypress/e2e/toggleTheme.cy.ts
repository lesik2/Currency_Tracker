describe('ToggleTheme Component', () => {
  it('change state of checkbox(check/uncheck)', () => {
    cy.visit('/');
    cy.get('[type="checkbox"]').uncheck({ force: true });
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[type="checkbox"]').check({ force: true });
  });
  it('changes background color', () => {
    cy.visit('/');
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('body').should('have.css', 'background-color', 'rgb(242, 242, 242)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('body').should('have.css', 'background-color', 'rgb(3, 3, 4)');
  });
  it('move bowl of toggleTheme after clicking', () => {
    cy.visit('/');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="bowl-theme"]').should('have.css', 'transform', 'matrix(1, 0, 0, 1, 25, 0)');
    cy.get('[type="checkbox"]').click({ force: true });
    cy.get('[data-cy="bowl-theme"]').should('have.css', 'transform', 'none');
  });
});
