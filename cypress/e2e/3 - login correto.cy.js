// cy.visit - url de acesso
// cy.contains - retorna só o primeiro elemento encontrado 
// cy.get - captura qualquer elemento pelo id ou data-test
// .type() - para inserir texto na entrada selecionada
// .click() - ação de clicar
// .should() - verificar se o valor da entrada reflete o texto que foi digitado
// .should('be.visible') - tenta até que ALGUNS elementos estejam visíveis

describe('Login correto', () => {
    it('Acessando com o login correto', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
      cy.get('[data-test="loginUserName"]').type('diorfranca')
      cy.get('[data-test="loginPassword"]').type('diorfranca90')
      cy.contains('button', 'login').click()
    })
  })