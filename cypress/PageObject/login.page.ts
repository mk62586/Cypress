///<reference types ="Cypress"/>

const emailId = '#email'
const password  = '#passwd'
const submit   = '#SubmitLogin'

class MyStore {       
 email(){
   return cy.get(emailId)
 }
   password(){
    return cy.get(password)
 }
   submit(){
  return  cy.get(submit)
 }
 login1(){
    return cy.get("ol>li").contains("An email address required.")
 }
 login2(){
    return  cy.get("ol>li").contains("Authentication failed.")
  }
}
export default  new MyStore