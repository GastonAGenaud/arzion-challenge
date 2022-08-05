/* eslint-disable no-undef */

class ProductsPage {
  constructor(idProduct) {
    this.idProduct = idProduct;
  }

  getEditLastProduct() {
    cy.get("#table-products > tbody")
      .find("tr")
      .find("td")
      .find('button[data-tip="Edit"]')
      .first()
      .click();
    cy.get("#editProduct-name").type(" Edited");
    cy.get("#editProduct-primary-button").click();
    return this;
  }
  getDeleteMultipleProduct() {
    var token;
    var idSlice;
    cy.wait("@ProductAdded").then(({ request }) => {
      cy.log(request.headers.authorization);
      token = request.headers.authorization;
    });
    cy.get("#table-products > tbody")
    .find("tr")
    .find("td").find('span').contains('Multiple')
      .parent().parent().invoke('attr', 'id')
      .then((id) => {
        cy.log(id)
        idSlice = id.slice(-3);
        cy.log(idSlice);
        cy.deleteProductById(idSlice, token);
      })
    return this;
  }

  getAddButton() {
    cy.get("#add-button").click();
    return this;
  }

  getProductName(name) {
    cy.get("#addProduct-name").type(name);
    return this;
  }

  getProductDescription(description) {
    cy.get("#addProduct-description").type(description);
    return this;
  }

  getProductPrice(price) {
    cy.get("#addProduct-price").type(price);
    return this;
  }
  getLastCategory() {
    try {
      cy.get("#addProduct-category-id").select("340");
    } catch (error) {
      cy.wait(2200);
    }
    return this;
  }
  getFilterByCategory(category) {
    cy.get("#table-products-search").click();
    //    cy.get('#table-products-filter-category-id').select(category);
    cy.get("#table-products-filter-category-id-check-label > span").click();
    cy.get("#table-products-filter-category-id").select("340");
    cy.get("#table-products-filter-primary-button").click();
    return this;
  }
  getAllProducts() {
    cy.wait(4000);
    cy.get("#table-products-footer-page-size").select("100");
    cy.intercept("GET", "/catalogs/*/products?per_page=100&page=1").as(
      "getAllProducts"
    );
    return this;
  }
  getAllProductsForce() {
    cy.wait(4000);
    cy.get("#table-products-footer-page-size").select("100");
    return this;
  }

  getProductUnlimitedStock() {
    cy.get("#addProduct-has-stock-label").contains("Unlimited stock").click();
    return this;
  }

  getPriceLabel(price) {
    cy.get("#root")
      .find("div.form-field.is-group.is-chip")
      .find("div")
      .contains(price)
      .click();
    return this;
  }

  getPriceGroupTitle(text) {
    cy.get("#addProduct-title-group-prices").type(text);
    return this;
  }
  getSaveProductBtn() {
    cy.get("#addProduct-primary-button").click();
    cy.intercept("POST", "/meta/catalogs/*").as("ProductAdded");
    cy.wait("@ProductAdded", { timeout: 30000 })
      .its("response.statusCode")
      .should("eq", 201);

    return this;
  }

  getDiscountCheckbox() {
    cy.get("#addProduct-has-discount").click();
    cy.get("#addProduct-discounted-price").type("10");
    return this;
  }

  getCompleteProductUnit() {
    this.getProductName("Product with Unit Price");
    this.getProductDescription("Product with Unit Price");
    this.getLastCategory();
    this.getPriceLabel("Unit");
    this.getProductPrice("100");
    this.getProductUnlimitedStock();
    this.getSaveProductBtn();
    cy.visit("https://app.myshop4.com/mylocation/dashboard");
    return this;
  }

  getCompleteProductDiscount() {
    this.getProductName("Product with Discount Price");
    this.getProductDescription("Product with Discount Price");
    this.getLastCategory();
    this.getProductUnlimitedStock();
    this.getProductPrice("100");
    this.getPriceLabel("Unit");
    this.getSaveProductBtn();
    cy.wait(5000);
    cy.visit("https://app.myshop4.com/mylocation/dashboard");
    return this;
  }

  getCompleteProductMultiple() {
    this.getProductName("Product with multiple Price");
    this.getProductDescription("Product with Multiple Price");
    this.getLastCategory();
    this.getPriceLabel("Multiple");
    this.getPriceGroupTitle("Multiple Price Group");
    cy.get("#addProduct-presentation-name0").type("Test Multiple");
    cy.get("#addProduct-presentation-price0").type("100");
    cy.get("#addProduct-stock-0").type("100");
    cy.get("#addProduct-presentation-name1").type("Test Multiple");
    cy.get("#addProduct-presentation-price1").type("200");
    cy.get("#addProduct-stock-1").type("100");
    this.getSaveProductBtn();
    cy.visit("https://app.myshop4.com/mylocation/dashboard");
    return this;
  }
  getAddProductByPrice(price) {
    this.getAddButton();
    switch (price) {
      case "Multiple":
        this.getCompleteProductMultiple();
        break;
      case "Unit":
        this.getCompleteProductUnit();
        break;
      case "Discount":
        this.getCompleteProductDiscount();
        break;
      default:
        cy.log('Option to choose "Unit", "Multiple" and "Discount" ');
        throw new Error("unmapped price option");
    }
    return this;
  }

  getCountCategory() {
    cy.get("#table-products > tbody")
      .find("tr")
      .then((products) => {
        const productsCount = Cypress.$(products).length;
        cy.log(`the number of the products was ${productsCount}`);
      });
    return this;
  }
}

export default ProductsPage;
