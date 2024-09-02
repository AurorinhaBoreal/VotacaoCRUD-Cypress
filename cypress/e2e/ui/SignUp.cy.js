describe('Verify SignUp Main Structure', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('"Verify Main Info', () => {
    cy.get('._logo_kkoux_48').should("be.visible")
    cy.get('.chakra-text').should("be.visible")
      .and("have.text", "Sign Up")
    
    cy.get('._description_kkoux_62').should("be.visible")
      .and("have.text", "To vote, you first need to register yourself on our database")
  });
})