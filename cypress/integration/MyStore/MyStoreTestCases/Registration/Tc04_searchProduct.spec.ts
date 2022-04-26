
///<reference types="Cypress"/>

import Search from "../../../../PageObject/SearchProduct.page"

describe("My store",()=>{
    beforeEach("Login the mystore ",()=>{
      cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
      cy.login()  
    })
    it("User search the  own product",()=>{
      Search.menu().click()
      Search.searchProduct().type("Faded Short Sleeve T-shirts")
      Search.submit().click()
      Search.productContainer().should("be.visible")  
    })
})