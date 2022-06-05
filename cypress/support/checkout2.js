const PRODUCTS = '.cart_item'
const ITEM_NAME = '.inventory_item_name'
const ITEM_PRICE = '.inventory_item_price'
const SUMMARY_SUBTOTAL = '.summary_subtotal_label'
const SUMMARY_TAX = '.summary_tax_label'
const SUMMARY_TOTAL = '.summary_total_label'


export const checkout2 = {

    getProductName(){
         return cy.get(PRODUCTS).find(ITEM_NAME)
         
    },

    getProductPrice(){
        return cy.get(PRODUCTS).find(ITEM_PRICE)
    },

    getSummarySubTotal(){
        return cy.get(SUMMARY_SUBTOTAL)
    },

    getSummaryTax(){
        return cy.get(SUMMARY_TAX)
    },

    getSummaryTotal(){
        return cy.get(SUMMARY_TOTAL)
    }
    

}