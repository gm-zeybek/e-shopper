# saucedemo-cypress

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
https://www.saucedemo.com/ is a demonstration e-commerce web application that will be
used during this assignment. It has basic functionality including a login page, product list
and cart.
Your assignment is to
1. Plan out the manual tests that you would write to cover this website
2. Decide which ones are good candidates for End-to-End test automation
3. Implement those tests
§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
1   PLANNED TEST FOR MANUAL AND AUTOMATED TESTS

Login page tests
-	login with valid credentials 						§-	automated
-	login with void or invalid credentials 				§-	automated
-   login with users other than standard-user           §-  manual

product lists page tests
-   product page visual test                            §-  manual
-	hamburger menu visual test upper left menu			§-	manual
-   product sort menu visual test                       §-  manual
-	log out test 										§-	manual
-	shopping cart icon visual test						§-	manual
-	About link test 									§-	automated
-	twitter link 										§-	automated
-	facebook link 										§-	automated
-	linkedin link 										§-	automated
-	sort product A to Z 								§-	automated
-	sort product Z to Z 								§-	automated
-	sort product price low to high 						§-	automated
-	sort product price high to low 						§-	automated
-	add to cart/ remove products 						§-	automated

cart page tests
-   verify product info
-	remove product from cart 							§-	automated
-	increase/decrease product quantity 					§-	automated
-	continue shopping  									§-	automated
-	remove product from product page 					§-	automated

end to end flow
-	checkout2 product & summary verification            §-	automated

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
2   TO RUN THE TESTS IN TEST RUNNER ON LOCAL
-   Please ensure that node is installed in your system
-   after that please go to project directory on any command line tool like
-   and plesase write 
```
npm install --save-dev 
```
and click enter and please wait for packages will be downloaded
and lastly please write
```
npx cypress open
```
and after test runner have been openned click any of test to run

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
3   TO RUN TESTS IN HEADLESS MODE ON LOCAL
please write below code instead 'npx cypress open' 
```
npx cypress run
```

Thanks and Regards,
Murat Zeybek

§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§§
