describe('User Tests', () => {
  const userInfo = {
    firstName: "Fernanda", 
    surname: "Manoela", 
    cpf: "58518301076"
  }
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('Create User', () => {
    cy.get('[data-cy="inputSignUp-FN"]').type(userInfo.firstName)
    cy.get('[data-cy="inputSignUp-S"]').type(userInfo.surname)
    cy.get('[data-cy="inputSignUp-CPF"]').type(userInfo.cpf)

    cy.get('.chakra-select__wrapper > select').select('Administrator')
    cy.get('[data-cy="buttonSignUp"]').click()
    cy.deleteUser(userInfo.cpf)
  });

  it("Validate User", () => {
    cy.createUser(userInfo)

    cy.get('[data-cy="Header-U"]').click()

    cy.get('[data-cy="title-V"]')
      .should("have.text", "Validation")
      .and("be.visible")

    cy.get('[data-cy="inputUV-CPF"]').type(userInfo.   cpf)
    cy.get('[data-cy="buttonVal-U"]').click()

    cy.get('[data-cy="title-U"]')
      .should("be.visible")

    cy.deleteUser(userInfo.cpf)
  })

  it("Delete User", () => {
    cy.createUser(userInfo)
    cy.validateUser(userInfo.cpf)

    cy.get('[data-cy="UserName-U"]')
      .contains(`${userInfo.firstName} ${userInfo.surname}`)
    
    cy.get('[data-cy="buttonDel-U"]').click()
  })
})