/// <reference types="cypress" />



describe('MyApp', () => {
  it('should have a title', () => {
    cy.visit("http://localhost:3000");
    cy.contains('Learn React').should('be.visible');
  });
})