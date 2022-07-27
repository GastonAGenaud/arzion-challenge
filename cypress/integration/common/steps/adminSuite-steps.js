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

When("I login with {} credentials", (user) => {
  cy.fixture("cypress\\fixtures\\credentials.json").then((credentials) => {
    login.getEmailTextfield(credentials[user].email);
    login.getPasswordTextfield(credentials[user].password);
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
    dashboard.getValidateNewCategory();
});

Then("check that the Products quantity is the one expected.", () => {});

Then("save data into a file {}", (arg) => {});

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
    categories.getTypeCategoryName();
});

And("check Available checkbox", () => {
    categories.getAvailableCheckbox();
});

And("select button Add", () => {
    categories.getAddCategoryButton();
});

And("edit the category {}", (arg) => {
    categories.getEditButton
});

And("select Update button", () => {
    categories.getUpdateButton
});

And("Add a product with price {}", (arg) => {});

And("Add a product with discount", () => {});

And("edit the product", () => {
    products.getEditIconButton();
});

And("Filter the products by the category {}", (arg) => {});

And("I show the number of results", () => {});

And("I show the number of results", () => {});

And("Delete the product with price {}", (arg) => {
});

And("I go to My Dashboard", () => {
    dashboard.getGoToDashboard();
});

And("click on share button on Your Catalog", () => {
  dashboard.getShareBtn();
});
