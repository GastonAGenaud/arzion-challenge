# QA AUTOMATION CHALLENGE


## MAIN GOAL

```
Replicate the actions of a user on the “MyShop4” site (Admin and Customer) using
the Cypress Automation tool and check that the functionality of the page is the
expected one
```

## TESTS TO BE IMPLEMENTED

### Admin Suite

```
1. Open abrowserand visitmyshop 4 page(urlprovidedabove).Checkthe
page’s title.
2. Try to login with wrong information. Validations should be done.
3. Log in with the data provided above.
4. CATEGORIES: Add a new category. Edit it.
5. PRODUCTS (Product’s category should be the one created in 4 )
a. Add a product with price: Unit.
b. Add a product with price: Multiple.
c. Add a product with a discount.
d. Edit a product.
e. Filter products bythe category createdin 4 .Countthenumberof
results and print it on the console.
f. Delete the product created in b.
g. Count thenumber of products created. Goto MyDashboard and
```

```
check that the Products quantity is the one expected.
6. Goto MyDashboard ,clickon SHARE buttonon “Mycatalog” andsavethe
data into a file (you will need it to test the “Customersuite”).
```
### Customer Suite

```
1. VisittheURLsavedon 6 in“AdminSuite”.Checkthepage’stitle.Itshould
be “QA TEAM”.
2. Check the shop data by clicking on the menu button :
a. Address should be: “ 7 n 539 , La Plata, Buenos Aires,AR.”
b. Email should be: “qa@arzion.com”
c. Open hours :
```
- From Monday to Friday: 9 to 18
- Saturday: 9 to 13
3. Performa search for _“test”_. Count and print on the consolehow many
results appeared.
4. Perform an **order** :
a. Add to **cart** _“Test Plan Template”_.
b. Add to cart **products** created in 5 in _“Admin Suite”_.
c. Click on **View My Cart**.
d. Check the **products** added.
e. Click on **Continue** to checkout.
f. Complete the form.
- Completetheinput **“HOWMUCHYOUWILLPAY?”** withan
amount lower than the total price. Validate the error message.
- Complete the input with a valid value.
g. Click on the **CHECKOUT** button.
h. Validate your data.
i. Send a copy to: “rocio.gartxo@arzion.com”
j. Click on **Back to home**.


## REQUIREMENTS

```
➔ Create a GitHub repository and send us the link so we can see the
progress.
➔ Please, try to commit often and use clear and concisecommit messages.
➔ Include ESLint.
➔ Keep the use of third-party packages to a minimum.
➔ Try to use the latest versions of the packages thatare included.
➔ Add documentation , highlight complex logic.
➔ Code and comments must be inEnglish.
➔ The functions should be modularized for efficiency.
➔ Write test cases for two of the implemented tests.
➔ Optional: using fixtures for saving data.
➔ Optional: using cy.intercept for API requests.
➔ Keepinmindthatwearegoingtoanalyzethecode,lookat goodpractices,
variable names, structures, and so on, good luck!
```

