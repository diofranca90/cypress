
import Cadastro from '../support/pages/1 - cadastro/paginaCadastro'

describe('Cadastro correto', () => {

  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
  })

  it('Criando um usuário na pagina de cadastro corretamente', () => {

    // funções importadas para serem executadas
    Cadastro.acessarPaginaDeCadastro()
    Cadastro.preencherFormulario()
    Cadastro.submeterCadastro()

  })

})