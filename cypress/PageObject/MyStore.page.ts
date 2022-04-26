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
      create_Account(){
                  return  cy.get('[id="email_create"]')
       }
       submitcreate(){
                 return  cy.get("#SubmitCreate")
       }
      title(){
                 return  cy.get(title).contains('Mr')
       }
        name(){
                return  cy.get(firstName)
        }
        lastName(){
                return  cy.get(lastName)
        }
        email(){
                 return  cy.get(emailpath)
       }
        password(){
                  return  cy.get(password)
       }
        months(){
                  return cy.get(months)
        }
        years(){
                 return cy.get(years)
        }
        days(){
                  return cy.get(days)
        }
      company(){
                 return  cy.get(company)
     }
      address(){
                 return  cy.get(addrss)
     }
      address2(){
                  return cy.get(address2)
     }
      city(){
                  return   cy.get(city)
     }
     state(){
                  return  cy.get(state)
     }
      postcode(){
                   return  cy.get(postcode)
     }
      other(){
                   return  cy.get(other)
     }
      phone(){
                   return  cy.get(phone)
     }
      phone1(){                
                   return  cy.get(phone_m)
     }
      alias(){
                   return  cy.get(alias)
      }
      submit(){
                   return  cy.get(submit)
      }
      clickSubmit(){
                   return cy.get(submit,{timeout:7000})
      }
      alert_Danger(){
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