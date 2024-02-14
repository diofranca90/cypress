describe('Teste API Alurapic', () => {

    it('Dados da API login', () => {
        cy.request({
            method: 'POST',
            url: 'https://alurapic-api.onrender.com/user/login',
            body: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.not.empty
            expect(res.body).to.have.property('id')
            expect(res.body.id).to.be.equal(123)
        })
   
    })
  
  })