describe('template spec', () => {
  it('passes', () => {
    cy.request({
      method : 'POST',
      url : 'https://reqres.in/api/users',
      body : {
        "name" : "Riski",
        "job" : "SQA"
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.body).have.property("name" , "Riski")
    })
  })
})