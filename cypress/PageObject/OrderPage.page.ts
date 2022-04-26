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
     return cy.get(product)
    }
    detailsProduct(){
   return cy.get(detail).contains("$27.00")
    }
   addCart(){
    return cy.get(detail).contains("Add to cart")
    }
    productContainer(){
   return  cy.get(container,{timeout:5000}).contains("Proceed to checkout")
    }
   container2(){
    return cy.get(container2).contains("Proceed to checkout")
   }
   checkOut1(){
    return cy.get(checkout1).contains("Proceed to checkout")
   }
   checkbox(){
   return cy.get(checkbox )
   }
   form(){
   return cy.get(form).contains('Proceed to checkout')
   }
   check(){
   return cy.get(check).contains("Pay by check")
   }
   cart(){
   return cy.get(cart).contains("I confirm my order")
   }
   sucess(){
  return cy.get(sucess ).contains("Your order on My Store is complete.")
  }
   reviewProduct(){
    return cy.get(advice)
   }
    comment_Title(){
   return cy.get(comment_Tittle)
    }
    content(){
    return cy.get(content)
    }
    submitMessage(){
   return cy.get(submitMessage)
    }
    sucessfullComment(){
    return cy.get(".fancybox-inner").contains("Your comment has been added and will be available once approved by a moderator",{timeout:9000})
  } 
}
  export default new  HomePage