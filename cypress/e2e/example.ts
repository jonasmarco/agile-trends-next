/// <reference path="../support/index.d.ts" />

describe('Cypress TS', () => {
  it('should go to Google', () => {
    cy.google()

    cy.findByRole('button', { name: /Pesquisa Google/i }).should('exist')
  })
})
