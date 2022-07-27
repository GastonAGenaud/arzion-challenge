/* eslint-disable no-undef */

class ProductsPage {
  getAddButton() {
    cy.get("body").find("button").contains("Add").click();
    return this;
  }

  getUnitButton() {
    "body".find("button").contains("Unit").click();
    return this;
  }

  getMultipleButton() {
    cy.get("body").find("button").contains("Multiple").click();
    return this;
  }

  getDiscountCheckbox() {
    cy.get("body").find("button").contains("Has discount").click();
    return this;
  }

  getEditIconButton() {
    cy.get("#table-products-628-actions-edit").click();
  }

  getFilterByButton() {
    cy.get("body").find("button").contains("Filter by").click();
    return this;
  }

  getCategoryCheckbox() {
    cy.get("body").find("button").contains("Category").click();
    return this;
  }

  getTabInCategory() {
    cy.get("#table-products-filter-category-id").click();
  }

  getQAAutomation() {
    cy.get("body").find("button").contains("QA Automation").click();
    return this;
  }
}

export default ProductsPage;