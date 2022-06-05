const CHECKOUT_BUTTON = '#checkout';
const CONTINUE_SHOPPING = '#continue-shopping';
const PRODUCTS = '.cart_item';


export const cart = {
  clickCheckout() {
    cy.get(CHECKOUT_BUTTON).click();
  },
  clickContShop() {
    cy.get(CONTINUE_SHOPPING).click();
  },
  getAllProducts() {
    return cy.get(PRODUCTS)
  }
}