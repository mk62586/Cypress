///<reference types="Cypress"/>

const menu = "@menu"
const product = "div>[title='Blouse']"
const detail = "#buy_block"
const checkout = ".button-container"
const container = ".button-container"
const container2 = "div>#center_column"
const checkout1 = "div>#columns"
const checkbox = "[type='checkbox']"
const form ="#form"
const check ="#HOOK_PAYMENT"
const cart = "#cart_navigation"
const sucess = "div>#center_column"
const icon = ".icon-plus"
const gender_forum = "#group_1"
const productColour ="li>[name='White']"
const content = "#content"
const submitMessage = "#submitNewMessage"
const comment_Tittle = "#comment_title"
const advice = ".comments_advices>li"


class HomePage{
    orderProduct(){
    return cy.get('ul').children().as('menu'),
    cy.get(menu).contains("Women")
    }
     clickProduct(){
     return cy.get(product).click()
    }
    detailsProduct(){
   return cy.get(detail).contains("$27.00").should("be.visible"),
    cy.get(detail).contains("Add to cart")
    }
    productContainer(){
   return  cy.get(container,{timeout:5000}).contains("Proceed to checkout").click(),
   cy.get(container2).contains("Proceed to checkout").click(),
   cy.get(checkout1).contains("Proceed to checkout").click(),
   cy.get(checkbox ).click(),
   cy.get(form).contains('Proceed to checkout').click(),
   cy.get(check).contains("Pay by check").click(),
   cy.get(cart).contains("I confirm my order").click(),
   cy.get(sucess ).contains("Your order on My Store is complete.")
  }
   changeProduct(){
   return cy.get(detail).contains("$27.00"),
   cy.get(icon).click(),
   cy.get(gender_forum ).select("M",{timeout : 1000}),
   cy.get(productColour).first().click()
  }
   reviewProduct(){
    return cy.get(advice).click(),
    cy.get(comment_Tittle).type("Execllent"),
    cy.get(content).type("I like the product"),
    cy.get(submitMessage).click()
  }
    sucessfullComment(){
    return cy.get(".fancybox-inner").contains("Your comment has been added and will be available once approved by a moderator",{timeout:9000})
  } 
}
  export default new  HomePage