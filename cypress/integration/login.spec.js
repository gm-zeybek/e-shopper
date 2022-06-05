import { inventory } from '../support/inventory';
import { login } from '../support/login'



describe('Login Page tests', () => {

  beforeEach('visit Login page', () => {

    
    cy.visit('/')
    cy.fixture('usernames').as('users')
    cy.fixture('errorMessages').as('errors')
   
  })

  it('Verify standard user login and land to product page', function(){

    // login with standard user credentials
        cy.get('@users').then((user)=>{
            login.login(user.standard_usr);
        })
  
    // verify page title should be products
          inventory.getTitle().should('have.text','Products')
       
    })

  it('Verify locked user get an error message', function(){

  // login with locked out user credentials
      cy.get('@users').then(function(user){
      
          login.login(user.locked_usr);
      })

  // verify error message is appeared
      cy.get('@errors').then((errors)=>{
        login.getErrorMessage().should('have.text',errors.locked_usr_msg)
      })

  })

});