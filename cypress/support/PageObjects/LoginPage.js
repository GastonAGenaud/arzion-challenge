/* eslint-disable no-undef */

class LoginPage {
  getGoToLogin() {
    cy.visit(Cypress.env("loginUrl"));
    return this;
  }
  getEmailTextfield(email) {
    cy.get("#signIn-email").click().type(email);
    return this;
  }

  getPasswordTextfield(password) {
    cy.get("#signIn-password").click().type(password);
    return this;
  }

  getLoginButton() {
    cy.get("body").find("button").contains("INICIAR SESIÓN").click();
    return this;
  }

  getSignInButton() {
    cy.get("body").find("button").contains("Registrarse").click();
    return this;
  }

  getForgotPassword() {
    cy.get("body").find("button").contains("Olvidé mi contraseña").click();
    return this;
  }

  getValidateVisibleTitle(){
    cy.get(".uk-margin-remove-bottom").should("be.visible");
    return this;
  }

  getValidateWrongLoginMessage() {
    cy.get("#snackbar-wrapper > div").should("be.visible");
    return this;
  }

  getValidateSuccessfullLogin() {
    cy.get("#root").find("h6").contains("Welcome QA Team1");
    return this;
  }
}

export default LoginPage;
