const CHART_IMAGE = '#shopping_cart_container';
const HAMBURGUER_BUTTON = '#react-burger-menu-btn';
const HAMBURGUER_CLOSE_BUTTON = '#react-burger-cross-btn';
const FIRST_PRODUCT = '.inventory_item:nth-child(1)'
const ALL_PRODUCTS = '.inventory_item'
const TITLE = '.title'

export const inventory = {
  getTitle(){
    return cy.get(TITLE);
  },

  getChart() {
    return cy.get(CHART_IMAGE);
  },

  clickOnHamburguer() {
    cy.get(HAMBURGUER_BUTTON).click(); 
  },

  clickOnCloseHamburguer() {
    cy.get(HAMBURGUER_CLOSE_BUTTON).click({"force":true});
  },

  clickOnBackPack() {
    cy.get(BACKPACK_BUTTON).click();
  },

  clickFirstProduct() {
    cy.get(FIRST_PRODUCT).find('button[id*="add-to-cart"]').click()
  },

  clickLastProduct(){
    cy.get(ALL_PRODUCTS).last().find('button[id*="add-to-cart"]').click()
  }
}