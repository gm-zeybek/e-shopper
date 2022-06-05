const FIRST_NAME = '#first-name'
const LAST_NAME = '#last-name'
const POSTTAL_CODE = '#postal-code'
const CONTINUE = '#continue'

export const checkout = {

typeFirstName (firstName) {
   cy.get(FIRST_NAME).type(firstName)
},
typeLastName (lastName) {
    cy.get(LAST_NAME).type(lastName);
},
typePostalCode(postalCode) {
    cy.get(POSTTAL_CODE).type(postalCode)

},
clickContinue() {
    cy.get(CONTINUE).click()
}


}