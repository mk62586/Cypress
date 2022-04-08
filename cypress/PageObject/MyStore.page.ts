///<reference types ="Cypress"/>

import { any } from "cypress/types/bluebird"


const email = "[id='email_create']"
const title = '#account-creation_form'
const firstName = '#customer_firstname'
const lastName = '#customer_lastname'
const emailpath =  '#email'
const password = "#passwd"
const months  = '#months'
const years= '#years'
const days = '#days'
const company = '#company'
const addrss = '#address1'
const phone = '#phone'
const address2 ='#address2'
const city = '#city'
const state = '#id_state'
const postcode = '#postcode'
const other = '#other'
const phone_m = '#phone_mobile'
const alias = '#alias'
const submit = '#submitAccount'

 class MyStore {
      create_Account(value : any){
                return  cy.get('[id="email_create"]').type(value),
                cy.get("#SubmitCreate").click()
      }
      title(){
                 return  cy.get(title,{timeout:20000}).contains('Mr').click()
     }
      name(value1:any){
                  return  cy.get(firstName).type(value1)
      }
  lastName(lastN:any){
                       cy.get(lastName).type(lastN)
      }
      email(){
                 return  cy.get(emailpath).click()
      }
      password(password1 :any){
                  return  cy.get(password).type(password1)
      }
      DOB(){
                  return cy.get(months).select('April'),
                   cy.get(years).select('1998'),
                   cy.get(days).select('5')
      }
      company(comp:any){
                 return  cy.get(company).type(comp)
     }
      address(adr:any){
                 return  cy.get(addrss).type(adr)
     }
      address2(adr1:any){
                  return cy.get(address2).type(adr1)
     }
      city(city1:any){
                  return   cy.get(city).type(city1)
     }
     state(Value:any){
                  return  cy.get(state).select(Value)
     }
      postcode(Postcode:any){
                   return  cy.get(postcode).type(Postcode)
     }
      other(Other:any){
                   return  cy.get(other).type(Other)
     }
      phone(Phone:any){
                   return  cy.get(phone).type(Phone)
     }
      phone1(Phone1:any){                
                   return  cy.get(phone_m).type(Phone1)
     }
      alias(Alias:any){
                   return  cy.get(alias).type(Alias)
      }
      submit(){
                   return  cy.get(submit).click()
      }
      clickSubmit(){
                   return cy.get(submit,{timeout:7000}).click(),
                   cy.get("[class='alert alert-danger']>p").contains("There are 8 errors")
     }
     userAccount(){
    return  cy.get(".header_user_info").contains("Avi Gupta")
     }
     failedFirstName(){
           return cy.get("ol>li").contains("firstname is required.")
     }
     filledRegistration(){
      return cy.get("ol>li").contains("passwd  is required.")
     }
     withoutPass_Ph_St_Name(){
           return cy.get("ol>")
     }
  }
    export default MyStore