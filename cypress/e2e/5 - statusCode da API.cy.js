
describe('Duble de teste com API', () => {

    beforeEach(() => {
        cy.visit('https://3076-cypress-alurapic-front.vercel.app/.')

        cy.intercept('POST', 'https://alurapic-api.onrender.com/user/login', {
            statusCode: 400
        }).as('stubPost')

    })

    it('Verifica as mensagens dos campos obrigatórios', () => {
        cy.contains('User name is required!').should('be.visible')
        cy.contains('Password is required!').should('be.visible')
    })

    it('Definindo o statusCode para ser retornado pela API', () => {
        cy.login('diorfranca', 'diorfranca90')
        cy.wait('@stubPost') // Chama o statusCode 400 mesmo com usuário e senha correto
    })

})