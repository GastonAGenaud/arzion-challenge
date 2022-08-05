Feature: Customer Suite

Scenario: Visit the URL saved on 6 in “Admin Suite”. Check the page's title. It should be “QA TEAM”.
Given I go to Myshop4.com/qa.team
When I see the "QA TEAM" title
Then I validate title 

Scenario: Check the shop data by clicking on the menu button
Given I go to Myshop4.com/qa.team
And select the menu button
And validate “7 n 539, La Plata, Buenos Aires, AR.” Address
And validate email "qa@arzion.com"
And select OPEN HOURS section
And validate  Monday to Friday 9 to 18 hours
When validate Saturday 9 to 13 hours
Then validate Shop data 

Scenario:  Perform a search for “test”. Count and print on the console how many results appeared.
Given I go to Myshop4.com
And select Products 
And I search "Test" 
When 7 results are counted with the word "Test"
Then I validate all 7 results with the word test

Scenario: Perform an order
Given I go to Myshop4.com
And select Products section
And I search for the product "Test Plan Template"
And Add product "Test Plan Template" to cart
And I add to the cart products created in 5 in "Admin Suite".
And click "View My Cart"
And I check the products added
And click on Continue to checkout button
And I complete the input “HOW MUCH YOU WILL PAY?” with an amount lower than the total price
And I validate the error message
And complete the input with a valid value
And click on the Checkout button
And I validate the data
When send a copy to “rocio.gartxo@arzion.com”
And click on "Back to home"
Then I validate Perform an order