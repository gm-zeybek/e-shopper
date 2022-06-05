import {login} from '../support/login';
import {inventory} from '../support/inventory';

describe('Base Page (Common) Tests', () => {
  

  beforeEach('visit Login page', () => {
    cy.visit('/');
    login.defaultLogin();

  })
  it('verify hamburger menu', () => {
   
    // open menu
    inventory.clickOnHamburguer();
    // close menu
    inventory.clickOnCloseHamburguer();

  })

})