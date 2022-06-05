const USERNAME = '#user-name'
const PASSWORD = '#password'
const LOGIN_BUTTON = '#login-button'
const ERROR_MESSAGE = 'form h3'


export const login = {

  // login method with parameter username
    login(username) {
      cy.get(USERNAME).type(username);
      cy.get(PASSWORD).type('secret_sauce');
      cy.get(LOGIN_BUTTON).click();

  },

  // default login
  defaultLogin() {
    cy.get(USERNAME).type('standard_user');
    cy.get(PASSWORD).type('secret_sauce');
    cy.get(LOGIN_BUTTON).click();

  },

  // get error messages
  getErrorMessage(){
    return cy.get(ERROR_MESSAGE)
  }







}