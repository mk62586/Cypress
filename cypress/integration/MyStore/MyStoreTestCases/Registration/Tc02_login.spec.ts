
///<reference types ="Cypress"/>
import MyStore from '../../../../PageObject/login.page';

describe("Login the page",()=>{
    let m :any
    beforeEach("fixture",()=>{
      cy.fixture("example").then((user)=>{
      m = user
       })
    })
    beforeEach("visit to my store",()=>{
      cy.visit(m.url)
    })
    it.only("Login with password",()=>{
      MyStore.email().type(m.email)
      MyStore.password().type(m.pass)
      MyStore.submit().click()
    })
    it.only("visual test case of login",()=>{
      cy.document().toMatchImageSnapshot();
  })
   it.skip("Login  without email and password",()=>{
      MyStore.submit().click()
      MyStore.login1().should("be.visible")
    })
    it.skip("Login with  right email and wrong password",()=>{
      MyStore.email().type(m.email)
      MyStore.password().type(m.pass3)
      MyStore.submit().click()  
      MyStore.login2().should("be.visible")     
  })
  it("Login with wrong email and right password",()=>{
      MyStore.email().type(m.email3)
      MyStore.password().type(m.pass)
      MyStore.submit().click()
      MyStore.login2().should("be.visible")
 })
})
