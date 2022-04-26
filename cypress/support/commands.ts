
Cypress.Commands.add('login',()=>{
    cy.fixture("example").then((user)=>{  
        cy.get('#email').type(user.email)
        cy.get('#passwd').type(user.pass)
        cy.get('#SubmitLogin').click()
    })
  })

      
 
