///<reference types="Cypress"/>

const menu = '#block_top_menu'
const search = "#search_query_top"
const submit = "#searchbox>[type='submit']"
const productContainer = "[class='product-container']"
const short = "Faded Short Sleeve T-shirts"
const timeout :any ={timeot:5000}


class Search{
    menu(){
        return cy.get(menu).contains('Women').click()
    }
    searchProduct(){
       return cy.get(search,timeout).type(short)
    }
    submit(){
       return cy.get(submit).click()
    }
    productContainer(){
       return cy.get(productContainer).contains(short)
   }
}
export default  new Search