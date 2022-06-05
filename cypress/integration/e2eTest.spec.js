import {login} from '../support/login';
import {inventory} from '../support/inventory';
import {cart} from '../support/cart';
import { checkout } from '../support/checkout';
import { checkout2 } from '../support/checkout2';

describe('E2E test', () => {
  

  beforeEach('Logged into products page', () => {
    cy.fixture('userInfo').as('user')
    cy.visit('/');
    login.defaultLogin();

  })

  it(' verify e2e flow', () => {
    // add to cart first product
    inventory.clickFirstProduct();

    // verify cart for a single product added
    inventory.getChart().click().then((label)=>{
      cy.expect(label).to.have.text('1')
    });
    
    //continue shopping
    cart.clickContShop();

    // add to cart the last product
    inventory.clickLastProduct();

    // go to cart page
    inventory.getChart().click();

    // verify two products have been added to the cart

    cart.getAllProducts().should('have.length','2')

    //go to checkout
    cart.clickCheckout();

    // enter user info on checkout page
    
   
      cy.get('@user').then(function(users){
        checkout.typeFirstName(users.first_name)
        checkout.typeLastName(users.last_name)
        checkout.typePostalCode(users.postal_code)
        checkout.clickContinue();
      })
      
  
    // verify products names are correct
    checkout2.getProductName().first().should('have.text','Sauce Labs Backpack')
    checkout2.getProductName().last().should('have.text','Test.allTheThings() T-Shirt (Red)')


    // verify products prices are correct
    checkout2.getProductPrice().first().should('have.text','$29.99')
    checkout2.getProductPrice().last().should('have.text','$15.99')

    // verify item total is correct
    checkout2.getSummarySubTotal().should('contain','$45.98')
    // verify taxt is correct
    checkout2.getSummaryTax().should('contain','$3.68')
    // verify total is correct
    checkout2.getSummaryTotal().should('contain','$49.66')
});
})