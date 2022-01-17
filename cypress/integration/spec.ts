describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('http://localhost:4200');
    cy.get('#mat-input-0').type('btlpj');
    cy.get('.mat-raised-button').click();
  })
})
