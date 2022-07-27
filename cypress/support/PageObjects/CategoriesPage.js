/* eslint-disable no-undef */

class CategoriesPage {
  getValidateNewCategory() {
    cy.get("#root").find(h4).contains("Categories");
    return this;
  }

  getCategoryImage() {
    cy.get("input[type=file]")
      .invoke("removeClass", "file_input_hidden")
      .attachFile("image.png");
  }

  getAddButton() {
    cy.get("body").find("button").contains("Add").click();
    return this;
  }
  getTypeCategoryName(text) {
    cy.get("#category-name").click().type(text);
    return this;
  }

  getAvailableCheckbox() {
    cy.get("body").find("button").contains("Available").click();
    return this;
  }

  getAddCategoryButton() {
    cy.get("#category-add").find("button").contains("Add").click();
  }

  getEditButton() {
    cy.get("body").find("button").contains("Edit").click();
  }

  getThreeDotsButton() {
    cy.get("#\\31 51-dropdown").click();
  }

  getUpdateButton() {
    cy.get("body").find("button").contains("Update").click();
  }
}

export default CategoriesPage;
