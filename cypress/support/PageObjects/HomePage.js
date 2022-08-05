
/* eslint-disable no-undef */

class HomePage {
  getGoToHome(url) {
    cy.visit(url);
    return this;
  }
  getHomeButton() {
    cy.get("body").find("button").contains("Inicio").click();
    return this;
  }

  getAdvantagesButton() {
    cy.get("body").find("button").contains("Ventajas").click();
    return this;
  }

  getAboutUsButton() {
    cy.get("body").find("button").contains("Acerca de").click();
    return this;
  }

  getProductsButton() {
    cy.intercept('GET' , '/catalogs/*/categories?order=index,desc').as('load') 
    cy.wait('@load').its('response.statusCode').should('eq', 200)
    cy.get("#sidebar-panelmenu").contains('Products').click({force: true});
    return this;
  }

  getDashboardButton() {
    cy.intercept('GET' , '/catalogs/*/categories?order=index,desc').as('load') 
    cy.wait('@load').its('response.statusCode').should('eq', 200)
    cy.get("#sidebar-panelmenu").contains('Dashboard').click({force: true});
    return this;
  }

}

export default HomePage;
