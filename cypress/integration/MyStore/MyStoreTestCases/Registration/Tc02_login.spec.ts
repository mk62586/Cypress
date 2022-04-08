
///<reference types ="Cypress"/>
import MyStore from '../../../../PageObject/login.page';

describe("Login the page",()=>{

    let m :any

    beforeEach("fixture",()=>{
      cy.visit("/")
       cy.fixture("example").then((user)=>{
 m = user
       })
    })
    it.only("Login with password",()=>{
      MyStore.email(m.email)
      MyStore.password(m.pass)
      MyStore.submit()
    })
   it.skip("Login  without email and password",()=>{
      MyStore.submit()
      MyStore.login1().should("be.visible")
    })
    it.skip("Login with  right email and wrong password",()=>{
      MyStore.email(m.email)
      MyStore.password(m.pass3)
      MyStore.submit()   
      MyStore.login2().should("be.visible")     
  })
  it("Login with wrong email and right password",()=>{
    MyStore.email(m.email3)
    MyStore.password(m.pass)
    MyStore.submit()
    MyStore.login2().should("be.visible")
 })
})
