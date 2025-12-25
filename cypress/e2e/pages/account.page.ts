import { BasePage } from './base.page'

export class AccountPage extends BasePage {
  constructor() {
    super('/account')
  }

  shouldSuccessMessageBe(options: { visible: boolean; withText?: string }) {
    this.successMessage.should(options.visible ? 'be.visible' : 'not.exist')
    if (options.withText) {
      this.isEnglish()
        ? this.successMessage.should('have.text', options.withText)
        : this.successMessage.should(
            options.visible ? '.be.visible' : 'not.exist'
          )
    }
  }

  clickContinueButton() {
    this.continueButton.should('be.visible').click()
  }

  clickLogOutButton() {
    this.logOutButton.should('be.visible').click()
  }

  get successMessage() {
    return cy.get('[data-qa="account-created"]')
  }

  get continueButton() {
    return cy.get('[data-qa="continue-button"]')
  }

  get logOutButton() {
    return cy.get('a[href="/logout"]')
  }
}
