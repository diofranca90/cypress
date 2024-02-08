
describe('Cadastro correto', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
  })

  it('Criando um usuário na pagina de cadastro corretamente', () => {
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('diorfranca@email.com.br')
    cy.get('[data-test="fullName"]').type('Diorgenes Franca')
    cy.get('[data-test="registerUserName"]').type('diorfranca')
    cy.get('[data-test="registerPassword"]').type('diorfranca90')
    cy.contains('button', 'Register').click()
  })

})