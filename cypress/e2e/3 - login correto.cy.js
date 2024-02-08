
describe('Login correto', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
  })

  it('Acessando com o login correto', () => {
    cy.login('diorfranca', 'diorfranca90')
  })

})