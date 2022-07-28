import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../support/pageObjects/LoginPage";
import Dashboard from "../../support/pageObjects/DashboardPage";

const login = new Login();
const dashboard = new Dashboard();
const home = new Home();

Given("I go to Myshop4.com/qa.team", () => {});

And("validate “7 n 539, La Plata, Buenos Aires, AR.” Address", () => {});

And("validate email {}", (text) => {
});

And("select OPEN HOURS section", () => {});

And("validate  Monday to Friday 9 to 18 hours", () => {});

When("validate Saturday 9 to 13 hours", () => {});

Then("validate Shop data ", () => {});

And("select Products", () => {});

And("I search {}", (text) => {});

When(" 7 results are counted with the word {} ", (text) => {});

Then("I validate all 7 results with the word test", () =>{});

And("select Products section", () => {});

And("I search for the product {}", (text) => {});

And("Add product {} to cart", (text) => {});

And("I add to the cart products created in 5 in {}.", (text) => {});

And("click {}", (text) => {});

And("click on Continue to checkout button", () => {});

And("I complete the input “HOW MUCH YOU WILL PAY?” with an amount lower than the total price", () => {});

And("I validate the error messaged", () => {});

And("complete the input with a valid value", () => {});

And("click on the Checkout button", () => {});

And("I validate the data", () => {});

And("send a copy to “rocio.gartxo@arzion.com”", () => {});

And("click on {} ", (text) => {});

Then("Then i validate Perform an order", () => {});
