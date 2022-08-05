Cypress.Commands.add("deleteProductById", (id, token) => {
    return cy.request({
      method: 'DELETE',
      url: `https://api.myshop4.com/catalogs/50/products/` + id,
      headers: {
        'content-type': 'application/json',
        'Authorization':  token
      },
      failOnStatusCode: false
    }).then(response => {
      return response
    })
  })