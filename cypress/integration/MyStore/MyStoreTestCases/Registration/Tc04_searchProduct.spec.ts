
///<reference types="Cypress"/>

import Search from "../../../../PageObject/SearchProduct.page"

describe("My store",()=>{

    beforeEach("Login the mystore ",()=>{
      cy.visit("/")
        cy.login()  
    })
    it("User search the  own product",()=>{
      Search.menu()
      Search.searchProduct()
      Search.submit()
      Search.productContainer().should("be.visible")  
    })
})