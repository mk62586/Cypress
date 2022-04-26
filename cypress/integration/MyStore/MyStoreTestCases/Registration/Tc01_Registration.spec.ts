
///<reference types ="Cypress"/>

import MyStore from '../../../../PageObject/MyStore.page';

describe("Registration in My Store",()=>{
    
 const signup =  new MyStore()
 let m :any ;

    before("fixture",()=>{
    cy.fixture('example').then((user)=>{
      m = user;
        })
    })
    beforeEach("visit to my store",()=>{
      cy.visit(m.url)
    })
   beforeEach("Enter email to create Account ",()=>{
     signup.create_Account().type(m.email1)
     signup.submitcreate().click({timeout:5000})
    })
    it.only("visual test case of login",()=>{
      cy.document().toMatchImageSnapshot();
  })
   it.only("Create an Account",()=>{
     signup.title().click()
     signup.name().type("Avi")
     signup.lastName().type("Gupta")
     signup.email().click()
     signup.password().type("haider5555")
     signup.months().select("April")
     signup.years().select("1998")
     signup.days().select("6")
     signup.company().type("ABC")
     signup.address().type("Greater Noida")
     signup.address2().type("Delhi")
     signup.city().type("Noida")
     signup.state().select("Alaska")
     signup.postcode().type("66768")
     signup.other().type("yes i review")
     signup.phone().type("888777776")
     signup.phone1().type("8666544")
     signup.alias().type("proveit")
     signup.submit().click()
     signup.userAccount().should("be.visible")
   })
   it.skip("User will enter without any field and registration only submit button",()=>{
      signup.clickSubmit().click().should("be.visible")
   })
   it.skip("User will not enter first name and failed Registration",()=>{
    signup.title().click()
    signup.lastName().type("Gupta")
    signup.email().click()
    signup.password().type("haider5555")
    signup.months().select("April")
    signup.years().select("1998")
    signup.days().select("6")
    signup.company().type("ABC")
    signup.address().type("Greator noida")
    signup.address2().type("Delhi")
    signup.city().type("noida")
    signup.state().type("Alaska")
    signup.postcode().type("66678")
    signup.other().type("yes i review")
    signup.phone().type("8877543990")
    signup.phone1().type("87767754")
    signup.alias().type("prove it")
    signup.submit().click()
    signup.failedFirstName().should("be.visible")
})
it.skip("User will registrationt without enter the password failed ",()=>{
  signup.title().click()
  signup.name().type("Avi")
  signup.lastName().type("Gupta")
  signup.email().click()
  signup.months().select("April")
  signup.years().select("1998")
  signup.days().select("6")
  signup.company().type("Abc")
  signup.address().type("Greator noida")
  signup.address2().type("Delhi")
  signup.city().type("Noida")
  signup.state().type("Alaska")
  signup.postcode().type("66678")
  signup.other().type("yes i review")
  signup.phone().type("8866985679")
  signup.phone1().type("8666889")
  signup.alias().type("proveit")
  signup.submit().click()
  signup.failedFirstName().should("be.visible")
  signup.filledRegistration().should("be.visible")
})
it.skip("User will registrationt without enter the DATE Of birth sucessfully ",()=>{
  signup.title().click()
  signup.name().type("Avi")
  signup.lastName().type("Gupta")
  signup.email().click()
  signup.password().type("haider5555")
  signup.company().type("ABC")
  signup.address().type("Greator Noida")
  signup.address2().type("Delhi")
  signup.city().type("Noida")
  signup.state().type("Alaska")
  signup.postcode().type("77789")
  signup.other().type("yes i review")
  signup.phone().type("886665444")
  signup.phone1().type("7744589")
  signup.alias().type("prove it")
  signup.submit().click()
})
it.skip("User will without registration name,phone,state,password ",()=>{
  signup.title().click()
  signup.lastName().type("Gupta")
  signup.email().click()
  signup.company().type("ABC")
  signup.address().type("Greator Noida")
  signup.address2().type("Delhi")
  signup.city().type("Noida")
  signup.postcode().type("66678")
  signup.other().type("yes i review")
  signup.phone1().type("8666544")
  signup.alias().type("prove it")
  signup.submit().click()
  signup.withoutPass_Ph_St_Name().should("be.visible")
})
})
