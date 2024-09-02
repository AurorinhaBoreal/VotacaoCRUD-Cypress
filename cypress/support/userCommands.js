Cypress.Commands.add("createUser", ({firstName, surname, cpf}) => {
    cy.get('[data-cy="inputSignUp-FN"]').type(firstName)
    cy.get('[data-cy="inputSignUp-S"]').type(surname)
    cy.get('[data-cy="inputSignUp-CPF"]').type(cpf)

    cy.get('.chakra-select__wrapper > select').select('Administrator')
    cy.get('[data-cy="buttonSignUp"]').click()
})

Cypress.Commands.add("deleteUser", (cpf) => {
    cy.request('DELETE', `http://localhost:8080/user/${cpf}`)
})

Cypress.Commands.add("validateUser", (cpf) => {
    cy.get('[data-cy="Header-U"]').click()

    cy.get('[data-cy="title-V"]')
      .should("have.text", "Validation")
      .and("be.visible")

    cy.get('[data-cy="inputUV-CPF"]').type(cpf)
    cy.get('[data-cy="buttonVal-U"]').click()
})