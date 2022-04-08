///<reference types ="Cypress"/>

const emailId = '#email'
const password  = '#passwd'
const submit   = '#SubmitLogin'

class MyStore {       
 email(value :any){
   return cy.get(emailId).type(value)
 }
   password( value1:any){
    return cy.get(password).type(value1)
 }
   submit(){
  return  cy.get(submit).click()
 }
 login1(){
    return cy.get("ol>li").contains("An email address required.")
 }
 login2(){
    return  cy.get("ol>li").contains("Authentication failed.")
  }
}
export default  new MyStore