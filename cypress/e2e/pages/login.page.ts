import { BasePage } from './base.page'

export class LoginPage extends BasePage {
  constructor() {
    super('/login')
  }

  setName(name: string) {
    this.nameInputField.should('be.visible').clear().type(name)
  }

  setSignupEmail(email: string) {
    this.emailInputField.should('be.visible').clear().type(email)
  }

  clickSignupButton() {
    this.signupButton.should('be.visible').click()
  }

  setLoginEmail(email: string) {
    this.loginEmailInputField.should('be.visible').clear().type(email)
  }

  setLoginPassword(password: string) {
    this.loginPasswordInputField.should('be.visible').clear().type(password)
  }

  clickLoginButton() {
    this.loginButton.should('be.visible').click()
  }

  shouldBeLoggedInAs(value: { user: string }) {
    cy.contains(`Logged in as ${value.user}`, { timeout: 10000 })
  }

  get nameInputField() {
    return cy.get('[data-qa="signup-name"]')
  }

  get emailInputField() {
    return cy.get('[data-qa="signup-email"]')
  }

  get signupButton() {
    return cy.get('[data-qa="signup-button"]')
  }

  get loginEmailInputField() {
    return cy.get('[data-qa="login-email"]')
  }

  get loginPasswordInputField() {
    return cy.get('[data-qa="login-password"]')
  }

  get loginButton() {
    return cy.get('[data-qa="login-button"]')
  }
}
