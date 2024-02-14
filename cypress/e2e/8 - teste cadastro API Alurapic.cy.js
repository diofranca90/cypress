describe('Teste API Alurapic', () => {

    it('Dados da API fotos', () => {
        cy.request({
            method: 'GET',
            url: 'https://alurapic-api.onrender.com/diorfranca/photos',
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).to.not.empty
            expect(res.body[0]).to.have.property('description')
            expect(res.body[0].description).to.be.equal('venom')
        })
   
    })
  
  })