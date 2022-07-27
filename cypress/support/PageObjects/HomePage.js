
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
    cy.get("body").find("button").contains("Productos").click();
    return this;
  }

  getFaqsButton() {
    cy.get("body").find("button").contains("FAQs").click();
    return this;
  }

  getSignUpButton() {
    cy.get("body").find("a").contains("Registrarme").click();
    return this;
  }

  getLogInButton() {
    cy.get("body").find("button").contains("Login").click();
    return this;
  }

  getRegistrerButton() {
    cy.get("body").find(".uk-dark").contains("Registrarme").click();
    return this;
  }

  getGastronomicMenuButton() {
    cy.get("body").find("button").contains("Menú Gastronómico").click();
    return this;
  }

  getOnlineShop() {
    cy.get("body").find("button").contains("Tienda Online").click();
    return this;
  }

  getSeeDemoButton() {
    cy.get("body").find("button").contains("Ver demo").click();
    return this;
  }
}

export default HomePage;
