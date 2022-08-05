import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../support/pageObjects/LoginPage";
import Dashboard from "../../../support/pageObjects/DashboardPage";
import Home from "../../../support/pageObjects/HomePage";
import Categories from "../../../support/pageObjects/CategoriesPage";
import ProductsPage from "../../../support/pageObjects/ProductsPage";

// the classes created using the pom pattern are declared
const login = new Login();
const dashboard = new Dashboard();
const home = new Home();
const categories = new Categories();
const products = new ProductsPage();

Given("I go to Myshop4 Page", () => {
  home.getGoToHome('https://www.myshop4.com/');
});

// When section
When("I validate that the title is visible", () => {
  login.getValidateVisibleTitle();
});

When("I login with {string} credentials", (user) => {
  var email = null;
  var password = null;
  cy.fixture("credentials.json").then((credentials) => {
    switch (user) {
      case "valid":
        email = credentials.valid.email;
        password = credentials.valid.password;
        break;
  
      default:
        email = credentials.invalid.email;
        password = credentials.invalid.password;
        break;
    }
    login.getSignInButton();
    login.getEmailTextfield(email);
    login.getPasswordTextfield(password);
    login.getLoginButton();

  });
});

// Then section
Then("i validate the wrong login message", () => {
  login.getValidateWrongLoginMessage();
});

Then("i validate successfull login", () => {
  login.getValidateSuccessfullLogin();
});

Then("I validate add new category and edit it", () => {
    categories.getTypeCategoryName('edited by Gaston');
    categories.getUpdateButton();
    categories.getValidateNewCategory();
    
});

Then("check that the Products quantity is the one expected.", () => {
  products.getAllProductsForce();
  products.getAllProducts();
  products.getCountCategory();
});

Then("save data into a file {}", (fileName) => {
  cy.get('html:root').eq(0).invoke('prop', 'innerHTML').then((doc) => {
  cy.writeFile(`${fileName}.html`, doc);
  });
});

// And section
And("I validate that the title is {}", (arg) => {
    login.getValidateVisibleTitle();
});

And("select Categories section", () => {
    categories.getCategoriesButton();
});

And("click the Add button", () => {
    categories.getAddButton();
});
And("write {}", (text) => {
    categories.getTypeCategoryName(text)
});

And("select an image", () => {
    categories.getCategoryImage();
    categories.getConfirmCategoryImage();
});

And("check Available checkbox", () => {
    categories.getAvailableCheckbox();
    categories.getAvailableCheckbox();
});

And("select button Add", () => {
    categories.getAddCategoryButton();
});

And("edit the category {}", (category) => {
  categories.getSearchCategory(category);
    categories.getThreeDotsButton();
    categories.getEditButton();

});

And("select Update button", () => {
    categories.getUpdateButton()
});

And("Add a product with price {}", (price) => {
  home.getProductsButton();
  products.getAddProductByPrice(price);
});

And("Add a product with discount", () => {});

And("edit the product", () => {
  home.getProductsButton();
  products.getEditLastProduct();
});

And("Filter the products by the category {}", (category) => {
  products.getFilterByCategory(category);
});

And("I show the number of results", () => {
  products.getAllProducts();
  products.getAllProducts();
  products.getCountCategory();
});

And("Delete the product with price {}", (arg) => {

  products.getDeleteMultipleProduct();
});



And("click on share button on Your Catalog", () => {
  dashboard.getShareBtn();
  
});
