Feature: Admin Suite

    As QA Automation I have to validate the acceptance criteria provided for the "Admin Suite" test suite.

    Scenario: Open a browser and visit myshop4 page (url provided above). Check the page's title.
        Given I go to Myshop4 Page
        When I validate that the title is visible
        And I validate that the title is "Bienvenido/a"

    Scenario: Try to login with wrong information. Validations should be done.
        Given I go to Myshop4 Page
        When I login with "invalid" credentials
        Then i validate the wrong login message

    Scenario: Log in with the data provided above
        Given I go to Myshop4 Page
        When I login with "valid" credentials
        Then i validate successfull login

    Scenario: CATEGORIES: Add a new category and Edit it.
        Given I go to Myshop4 Page
        When I login with "valid" credentials
        And select Categories section
        And click the Add button
        And write "Test automation"
        And select an image
        And check Available checkbox
        And select button Add
        And edit the category Test Automation
        And select Update button
        Then I validate add new category and edit it

    Scenario: PRODUCTS (Product's category should be the one created in 4)
        Given I go to Myshop4 Page
        When I login with "valid" credentials
        And Add a product with price "Unit"
        And Add a product with price "Multiple"
        And Add a product with price "Discount"
        And edit the product
        And Filter the products by the category "Test Automation"
        And I show the number of results
        And Delete the product with price "Multiple"
        Then check that the Products quantity is the one expected.

    Scenario: Go to My Dashboard and save the data into a file
        Given I go to Myshop4 Page
        When I login with "valid" credentials
        And I go to My Dashboard
        And click on share button on Your Catalog
        Then save data into a file "admin-suite-catalog"
