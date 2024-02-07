// cy.visit - url de acesso
// cy.contains - retorna só o primeiro elemento encontrado 
// cy.get - captura qualquer elemento pelo id ou data-test
// .type() - para inserir texto na entrada selecionada
// .click() - ação de clicar
// .should() - verificar se o valor da entrada reflete o texto que foi digitado
// .should('be.visible') - tenta até que ALGUNS elementos estejam visíveis

describe('Cadastro incorreto', () => {
    it('Criando um usuário na pagina de cadastro incorretamente', () => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
      cy.contains('a', 'Register now').click()
      cy.contains('button', 'Register').click()
      cy.contains('button', 'Register').click()
      cy.contains('Email is required!').should('be.visible')
      cy.contains('Full name is required!').should('be.visible')
      cy.contains('User name is required!').should('be.visible')
      cy.contains('Password is required!').should('be.visible')
    })
  })