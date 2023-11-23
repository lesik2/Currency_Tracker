describe('ToggleTheme Component', () => {
  it('default page is home and active link is home', () => {
    cy.visit('/');
    cy.get('[data-cy="home-page"]').should('exist');
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(3, 3, 4)');
  });
  it('change page after clicking on link', () => {
    cy.visit('/');
    cy.get('[data-name="Timeline"]').click();
    cy.get('[data-cy="timeline"]').should('exist');
    cy.get('[data-name="Bank card"]').click();
    cy.get('[data-cy="bankcard"]').should('exist');
    cy.get('[data-name="Contato"]').click();
    cy.get('[data-cy="contact"]').should('exist');
  });
  it('change style of clicking link', () => {
    cy.visit('/');
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(3, 3, 4)');
    cy.get('[data-name="Timeline"]').click();
    cy.get('[data-name="Timeline"]').should('have.css', 'background-color', 'rgb(217, 217, 217)');
    cy.get('[data-name="Timeline"]').should('have.css', 'color', 'rgb(3, 3, 4)');
    cy.get('[data-name="Home"]').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)');
    cy.get('[data-name="Home"]').should('have.css', 'color', 'rgb(255, 255, 255)');
  });
});
