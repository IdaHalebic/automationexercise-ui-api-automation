import { BasePage } from './base.page'

export class ContactPage extends BasePage {
  constructor() {
    super('contact_us')
  }

  populateFieldsInContactForm(options: {
    name: string
    email: string
    subject: string
    message: string
  }) {
    this.nameInput.should('be.visible').clear().type(options.name)
    this.emailInput.should('be.visible').clear().type(options.email)
    this.subjectInput.should('be.visible').clear().type(options.subject)
    this.messageInput.should('be.visible').clear().type(options.message)
  }

  clickSubmitButton() {
    this.submitButton.should('be.visible').and('be.enabled').click()
  }

  messageShouldBeSent() {
    this.successMessage.should('be.visible')
  }

  get nameInput() {
    return cy.get('[data-qa="name"]')
  }

  get emailInput() {
    return cy.get('[data-qa="email"]')
  }

  get messageInput() {
    return cy.get('[data-qa="message"]')
  }

  get subjectInput() {
    return cy.get('[data-qa="subject"]')
  }

  get submitButton() {
    return cy.get('[data-qa="submit-button"]')
  }

  get successMessage() {
    return cy.get('.alert-success')
  }
}
