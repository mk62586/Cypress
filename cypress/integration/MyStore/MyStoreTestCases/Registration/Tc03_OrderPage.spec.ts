///<reference types="Cypress"/>

 import HomePage from  "../../../../PageObject/OrderPage.page"
 

describe("Home page Scenario",()=>{
    beforeEach("User Login in my store",()=>{
        cy.visit("http://automationpractice.com/index.php?controller=authentication&back=my-account")
        cy.login()
    })
    it.only("User can order the product",()=>{
     HomePage.orderProduct().should("be.visible").click()
     HomePage.clickProduct().click()
     cy.document().toMatchImageSnapshot()
     HomePage.detailsProduct().should('be.visible').click()
     HomePage.addCart().should("be.visible").click()
     HomePage.productContainer().click().should("be.visible")
     HomePage.container2().click()
     HomePage.checkOut1().click()
     HomePage.checkbox().click()
     HomePage.form().click()
     HomePage.check().click()
     HomePage.cart().click()
     HomePage.sucess().should("be.visible")

   })
    it.skip("user can change the product",()=>{
     HomePage.orderProduct().click().should("be.visible")
     HomePage.clickProduct().click()
   })
    it.skip("user can Review the product",()=>{
     HomePage.orderProduct().should("be.visible").click()
     HomePage.clickProduct().click()
     HomePage.reviewProduct().click()
     HomePage.comment_Title().type("Execllent").should("be.visible")
     HomePage.content().type("I like the product").should("be.visible")
     HomePage.submitMessage().click()
     HomePage.sucessfullComment().should("be.visible")
    })
})
