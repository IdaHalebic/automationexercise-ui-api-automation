import { BasePage } from './base.page'
export class PaymentPage extends BasePage {
  constructor() {
    super('/payment')
  }

  setNameOnCard(name: string) {
    this.nameOnCardInput.clear().type(name)
  }

  setCardNumber(cardNumber: string) {
    this.cardNumberInput.clear().type(cardNumber)
  }

  setCVC(cvc: string) {
    this.cvcInput.clear().type(cvc)
  }

  setExpiryMonth(expiryMonth: string) {
    this.expiryMonthInput.clear().type(expiryMonth)
  }

  setExpiryYear(expiryYear: string) {
    this.expiryYearInput.clear().type(expiryYear)
  }

  clickPayButton() {
    this.payButton.click()
  }

  completePayment() {
    this.orderPlacedMessage.should('be.visible')
  }

  get nameOnCardInput() {
    return cy.get('[data-qa="name-on-card"]')
  }

  get cardNumberInput() {
    return cy.get('[data-qa="card-number"]')
  }

  get cvcInput() {
    return cy.get('[data-qa="cvc"]')
  }

  get expiryMonthInput() {
    return cy.get('[data-qa="expiry-month"]')
  }

  get expiryYearInput() {
    return cy.get('[data-qa="expiry-year"]')
  }

  get payButton() {
    return cy.get('[data-qa="pay-button"]')
  }

  get orderPlacedMessage() {
    return cy.get('[data-qa="order-placed"]')
  }
}
