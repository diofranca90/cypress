
describe('Login incorreto', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
  })

  it('Verifica mensagens dos campos obrigatórios', () => {
    cy.contains('User name is required!').should('be.visible')
    cy.contains('Password is required!').should('be.visible')
  })

})