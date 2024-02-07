// cy.visit - url de acesso
// cy.contains - retorna só o primeiro elemento encontrado 
// cy.get - captura qualquer elemento pelo id ou data-test
// .type() - para inserir texto na entrada selecionada
// .click() - ação de clicar
// .should() - verificar se o valor da entrada reflete o texto que foi digitado
// .should('be.visible') - tenta até que ALGUNS elementos estejam visíveis

describe('Cadastro correto', () => {
  it('Criando um usuário na pagina de cadastro corretamente', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
    cy.contains('a', 'Register now').click()
    cy.get('[data-test="email"]').type('diorfranca@email.com.br')
    cy.get('[data-test="fullName"]').type('Diorgenes Franca')
    cy.get('[data-test="registerUserName"]').type('diorfranca')
    cy.get('[data-test="registerPassword"]').type('diorfranca90')
    cy.contains('button', 'Register').click()
  })
})