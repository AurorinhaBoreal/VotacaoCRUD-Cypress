describe('Agenda Tests', () => {
  const userInfo = {
    firstName: "Mariana", 
    surname: "Pereira", 
    cpf: "66597034627"
  }

  const agendaInfo = {
    category: "Technology",
    question: "Do you preffer Headphones or Headsets?",
    duration: "10",
    userCpf: userInfo.cpf
  }

  beforeEach(() => {
    cy.visit('/')
  })

  it('Create Agenda', () => {
    cy.createUser(userInfo)

    cy.get('[data-cy="buttonCA"]').click()

    cy.get('.chakra-select__wrapper > select').select(agendaInfo.category)

    cy.get('[data-cy="CA-text-Q"]').type(agendaInfo.question)

    cy.get('[data-cy="CA-input-D"]').clear()
    cy.get('[data-cy="CA-input-D"]').type(agendaInfo.duration)

    cy.get('[data-cy="CA-select-CPF"]').type(agendaInfo.userCpf)

    cy.get('[data-cy="CA-button-CA"]').click()
    
    cy.reload()

    cy.endAgenda(agendaInfo.question, agendaInfo.userCpf)
    cy.deleteAgenda(agendaInfo.question, agendaInfo.userCpf)
    cy.deleteUser(userInfo.cpf)
  })

  it("End Agenda", () => {
    cy.createUser(userInfo)
    cy.createAgenda(agendaInfo)

    cy.get('._cardContainer_1ihxh_1 > .chakra-text').contains(agendaInfo.question)

    cy.get('[data-cy="inputAA-CPF"]').type(agendaInfo.userCpf)

    cy.get('[data-cy="buttonAA-EA"]').click()

    cy.deleteAgenda(agendaInfo.question, agendaInfo.userCpf)
    cy.deleteUser(userInfo.cpf)
  })

  it.only("Remove Agenda", () => {
    cy.createUser(userInfo)
    cy.createAgenda(agendaInfo)

    cy.endAgenda(agendaInfo.question, agendaInfo.userCpf)

    cy.get('[data-cy="Header-EA"]').click()

    cy.get('._question_ya0qt_17').contains(agendaInfo.question)

    cy.get('.chakra-input').type(agendaInfo.userCpf)

    cy.get('[data-cy="EA-button-D"]').click()
    
    cy.deleteUser(userInfo.cpf)
  })
})