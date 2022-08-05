/* eslint-disable no-undef */

class DashboardPage {

  getGoToDashboard() {
    cy.visit('https://app.myshop4.com/mylocation/dashboard');
    return this;
  }
  getShareBtn() {
    cy.wait(2000)
    cy.get("button.button:nth-child(2)").click();
    cy.get(".type-text > input:nth-child(2)").invoke('attr', 'value')
    .then((value) => {
      cy.visit(value)
    })
    cy.get('html:root').eq(0).invoke('prop', 'innerHTML').then((doc) => {
      cy.writeFile('pageMarkup.html', doc);
    });

    return this;
  }

  getOrdersButton() {
    cy.get("body").find("a").contains("Orders").click();
    return this;
  }

  getProductsButton() {
    cy.get("body").find("a").contains("Products").click();
    return this;
  }

  getMyLocationButton() {
    cy.get("body").find("a").contains("My Location").click();
    return this;
  }

  getCategoriesButton() {
    cy.get("body").find("a").contains("Categories").click();
    return this;
  }

  getTagsButton() {
    cy.get("body").find("a").contains("Tags").click();
    return this;
  }

  getCustomizationButton() {
    cy.get("body").find("a").contains("Customization").click();
    return this;
  }

  getDownloadQRbutton() {
    cy.get("body").find("button").contains("Download QR").click();
    return this;
  }

  getEditButton() {
    cy.get("body").find("button").contains("Edit").click();
    return this;
  }

  getViewDetailsButton() {
    cy.get("body").find("button").contains("View Details").click();
    return this;
  }

  getArzionQAurl() {
    cy.get("body").find("button").contains("www.arzionQA.com.ar").click();
    return this;
  }

  getEmailQA() {
    cy.get("body").find("button").contains("qa@arzion.com").click();
    return this;
  }

  getProfileButton() {
    cy.get("body").find("button").contains("QA Team1").click();
    return this;
  }

  getHelp() {
    cy.get("body").find("button").contains("Help").click();
    return this;
  }

  getLogout() {
    cy.get("body").find("button").contains("Logout").click();
    return this;
  }
  

}

export default DashboardPage;
