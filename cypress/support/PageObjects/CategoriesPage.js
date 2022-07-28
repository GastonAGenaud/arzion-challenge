/* eslint-disable no-undef */

class CategoriesPage {
  getValidateNewCategory() {
    cy.intercept('/catalogs/*/categories/*').as("getCategoryEdited");
    cy.wait('@getCategoryEdited').its("response.statusCode").should("eq", 200);
    return this;
  }

  getCategoryImage() {
    cy.get("input[type=file]")
      .invoke("removeClass", "file_input_hidden")
      .attachFile("image.png");
  }

  getAddButton() {
    cy.get("#button-add-category").click();
    cy.wait("@getAccount");
    return this;
  }
  getTypeCategoryName(text) {
    cy.get("#category-name").click().clear().type(text);
    return this;
  }

  getAvailableCheckbox() {
    cy.get("#category-is-active-label > span").click();
    return this;
  }
  getAddCategoryButton() {
    cy.get("#category-add").click({ force: true });
    cy.intercept("/locations/*/categories").as("getCategory");
    cy.wait("@getCategory").its("response.statusCode").should("eq", 201);
    cy.wait(3000);
    return this;
  }

  getEditButton() {
    cy.get("#\\33 33-dropdown-ul > li:nth-child(2)").click({force: true});
    return this;
  }

  getThreeDotsButton() {
    cy.get('#root > div > div.main-wrapper > div.main-content-wrapper > div > div > div.main-content-data > div:nth-child(2)').find('button').first().click({force:true});
    return this;
  }

  getUpdateButton() {
    cy.get("body").find("button").contains("Update").click();
    return this;
  }

  getCategoriesButton() {
    cy.intercept("/*").as("getAccount");
    cy.wait("@getAccount");
    cy.get("#sidebar-categories").click({ force: true });
    return this;
  }
  getConfirmCategoryImage() {
    cy.get("#modal-close-button").click();
    return this;
  }
  getSearchCategory(search){
    cy.get("#search-mobile").type(search);
    cy.wait(2000)
    return this;
  }
}

export default CategoriesPage;
