
describe('Cadastro com massa de dados', () => {

    beforeEach(() => {
      cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')
    })
  
     // Chamando a massa de dados criada
     const usuarios = require('../fixtures/usuarios.json')
     usuarios.forEach(usuario => {
  
      it('Criando usuários com massa de dados', () => {
        cy.contains('a', 'Register now').click()
        cy.get('[data-test="email"]').type(usuario.email)
        cy.get('[data-test="fullName"]').type(usuario.fullName)
        cy.get('[data-test="registerUserName"]').type(usuario.userName)
        cy.get('[data-test="registerPassword"]').type(usuario.password)
        cy.contains('button', 'Register').click()
      }) 
       
     }) 
  
  })