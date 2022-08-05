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
    cy.get("body").find("button").contains("Iniciar sesión").click();
    return this;
  }

  getSignInButton() {
    cy.get("body").find("a").contains("Login").click({force: true});
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
    cy.get("#snackbar-wrapper").find("div.alert-content-wrapper").should("be.visible");
    cy.get("#snackbar-system-alert-content").should("have.text", "Credenciales inválidas")
    return this;
  }

  getValidateSuccessfullLogin() {
    cy.get("body").find("h6").should("include.text", "Welcome QA Team1");
    return this;
  }
}

export default LoginPage;
