///<reference types="Cypress"/>

 import HomePage from  "../../../../PageObject/HomePage.page"
 

describe("Home page Scenario",()=>{
    beforeEach("User Login in my store",()=>{
        cy.visit("/")
        cy.login()
    })
    it.only("User can order the product",()=>{
     HomePage.orderProduct().should("be.visible").click()
     HomePage.clickProduct()
     HomePage.detailsProduct().should('be.visible').should("be.visible").click()
     HomePage.productContainer().should("be.visible")
    })
    it.skip("user can change the product",()=>{
     HomePage.orderProduct().should("be.visible").click()
     HomePage.clickProduct()
    HomePage.changeTheProduct().should('be.visible')
    })
    it.skip("user can Review the product",()=>{
     HomePage.orderProduct().should("be.visible").click()
     HomePage.clickProduct()
     HomePage.reviewProduct().should("be.visible")
     HomePage.sucessfullComment().should("be.visible")
    })
})
