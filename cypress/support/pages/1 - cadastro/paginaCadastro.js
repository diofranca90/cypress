 
 // chamando os elementos capturados
 const el = require('./elements').ELEMENTS

 // criando a classe com as funções a serem executadas
 class Cadastro{

    // criação da função para acessar a pagina de cadastro
    acessarPaginaDeCadastro(){
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
        cy.get('[data-test="register"]').click()
    }

    // criação da função para preencher o cadastro
    preencherFormulario(){
        cy.get('input[data-test="email"]').type('diorfranca@email.com.br')
        cy.get('input[data-test="fullName"]').type('Diorgenes Franca')
        cy.get('input[data-test="registerUserName"]').type('diorfranca')
        cy.get('input[data-test="registerPassword"]').type('diorfranca90')
    }

    // criação da função para clicar e submeter o cadastro
    submeterCadastro(){
        cy.get('[data-test="btnRegister"]').click()
    }

 }

     // disponibilizando a classe com as funcionalidades criada para exportação
     export default new Cadastro()