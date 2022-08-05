# QA AUTOMATION CHALLENGE

  

# HOW TO RUN

**INSTALL DEPENDENCIES**
```
npm install
```
**FOR TEST EXECUTION USE**
```
npm run test
```
**FOR OPEN THE INTERFACE OF CYPRESS USE**
```
npm run interface
```

## STACK

  

**> "cypress-cucumber-preprocessor": "^4.3.1",**

>

**> "cypress-file-upload": "^5.0.8",**

>

**> "eslint": "^8.20.0"****

  
  

> The cypress-cucumber-preprocessor adds support for using feature files

> when testing with Cypress.

> This package adds a custom [Cypress](https://cypress.io/) command that

> allows you to make an abstraction on how exactly you upload files

> through HTML controls and focus on testing user workflows.

  
  

# What is Page Object Model?

Page Object Model is a design pattern where the page objects are separated from the automation test scripts. Automation testing gives us many leverages that benefit us in testing; however, there are some outcomes such as code duplication and an increase in the risk of maintainability as the project grows.

PageObject under the support folder. Under this folder, you can create page object files for any modules.

  

##Example of Cypress and POM

  
  

**Step 1**: Let’s start writing our first test method in **the LoginPage.js** file. We have to first create a class that we will be exporting in our spec file. We will call our class as **LoginPage**

  

class LoginPage {

}

  

Based on our pseudocode, our first step is to navigate to the URL. We will call our method as `**navigate()**`. Inside our navigate method, we shall add the `**cy.visit()**` function from Cypress.

  

navigate() {

cy.visit('https://app.myshop4.com/auth/login?locale=es')

}

  

![](https://lambdageeks.com/wp-content/uploads/2021/08/anysnap-26-aug-2021-at-8-51-29-pm-300x166.png?ezimgfmt=rs:300x166/rscb41/ng:webp/ngcb41)

  

**_navigate method_**

  

**Step 2**: Now, we will have to enter the username in our email field. We will name our method as **enterEmail()**. First, we should get the locator of the email field and access them via `**cy.get()**` command. Then we will clear the field using the `**clear()**` command and add the username using the **`type()`** command. In our method, we pass a parameter **username** to pass the value in the spec file. This way, we are keeping it generic to access this method if a different email id is required.

  

enterEmail(username) {

cy.get('[id=Email]').clear()

cy.get('[id=Email]').type(username);

return this

}

  

Instead of writing the `cy.get()` command twice in the above code, we can simply loop them with the **dot** operator.

  

enterEmail(username) {

cy.get('[id=Email]')

.clear()

.type(username);

return this

}

  

## Stack

i use cucumber preproceessor to integrate Cucumber with Cypress and add the posibility to use in the proyect Gherkin and the BDD pattern

I also use POM for frontend automation tests.

```

"cypress-cucumber-preprocessor": "^4.3.1",

```

  

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

a. Add to **cart**  _“Test Plan Template”_.

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

BY Gaston Alejandro Genaud