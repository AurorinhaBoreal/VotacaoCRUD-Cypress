Cypress.Commands.add("createAgenda", ({category, question, duration, userCpf}) => {
    cy.get('[data-cy="buttonCA"]').click()

    cy.get('.chakra-select__wrapper > select').select(category)

    cy.get('[data-cy="CA-text-Q"]').type(question)

    cy.get('[data-cy="CA-input-D"]').clear()
    cy.get('[data-cy="CA-input-D"]').type(duration)

    cy.get('[data-cy="CA-select-CPF"]').type(userCpf)

    cy.get('[data-cy="CA-button-CA"]').click()
    
    cy.reload()
})

Cypress.Commands.add("endAgenda", (question, cpf) => {
    cy.get('._cardContainer_1ihxh_1 > .chakra-text').contains(question)

    cy.get('[data-cy="inputAA-CPF"]').type(cpf)

    cy.get('[data-cy="buttonAA-EA"]').click()
})

Cypress.Commands.add("deleteAgenda", (question, cpf) => {
    cy.get('[data-cy="Header-EA"]').click()

    cy.get('._question_ya0qt_17').contains(question)

    cy.get('.chakra-input').type(cpf)

    cy.get('[data-cy="EA-button-D"]').click()
})