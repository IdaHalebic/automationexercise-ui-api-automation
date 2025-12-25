import { BasePage } from './base.page'

export class SignupPage extends BasePage {
  constructor() {
    super('/signup')
  }

  // Function methods

  registerUser = (values: {
    title: string
    name: string
    password: string
    day: number
    month: string
    year: string
    newsletter: boolean
    firstName: string
    lastName: string
    company: string
    address: string
    country: string
    state: string
    city: string
    zipcode: string
    mobileNumber: string
  }) => {
    this.selectGender(values.title)
    this.shouldNameInputHave(values.name)
    this.setPassword(values.password)
    this.setDateOfBirth({
      days: values.day,
      month: values.month,
      year: values.year,
    })
    this.setFirstName(values.firstName)
    this.setLastName(values.lastName)
    this.setCompany(values.company)
    this.setAddress(values.address)
    this.selectCountry(values.country)
    this.setState(values.state)
    this.setCity(values.city)
    this.setZipCode(values.zipcode)
    this.setMobileNumber(values.mobileNumber)
    this.clickCreateAccount()
  }

  selectGender(gender: string) {
    this.genderCheckbox.should('be.visible').check(gender)
  }

  selectGenderV2(gender: string) {
    if (gender === 'Mr') {
      this.maleGenderCheckbox.should('be.visible').check()
    } else this.femaleGenderCheckbox.should('be.visible').check()
  }

  shouldNameInputHave(name: string) {
    this.nameInputField.invoke('val').should('equal', name)
  }

  shouldEmailInputHave(email: string) {
    this.emailInputField.invoke('val').should('equal', email)
  }

  setPassword(password: string) {
    this.passwordInputField.should('be.visible').clear().type(password)
  }

  setDateOfBirth(values: { days: number; month: string; year: string }) {
    this.selectDayOfBirth(values.days)
    this.monthOfBirthSelect.should('be.visible').select(values.month)
    this.yearsOfBirthSelect.should('be.visible').select(values.year)
  }

  selectDayOfBirth(days: number) {
    this.dayOfBirthSelect.should('be.visible').select(days)
  }

  shouldNewsletterCheckboxBe(options: { visible: boolean }) {
    this.newsletterCheckbox.should(options.visible ? 'be.visible' : 'not.exist')
  }

  checkNewsletter(options: { check: boolean }) {
    options.check && this.newsletterCheckbox.check()
    !options.check && this.newsletterCheckbox.uncheck()
  }

  checkTitle() {
    this.titleText.should('be.visible')
  }

  setFirstName(firstName: string) {
    this.firstNameInputField.should('be.visible').clear().type(firstName)
  }

  setLastName(lastName: string) {
    this.lastNameInputField.should('be.visible').clear().type(lastName)
  }

  setCompany(company: string) {
    this.companyInputField.should('be.visible').clear().type(company)
  }

  setAddress(address: string) {
    this.addressInputField.should('be.visible').clear().type(address)
  }

  setAddress2(address2: string) {
    this.address2InputField.should('be.visible').clear().type(address2)
  }

  selectCountry(country: string) {
    this.countrySelect.should('be.visible').select(country, { force: true })
  }

  setState(state: string) {
    this.stateInputField.should('be.visible').clear().type(state)
  }

  setCity(city: string) {
    this.cityInputField.should('be.visible').clear().type(city)
  }

  setZipCode(zipcode: string) {
    this.zipCodeInputField.should('be.visible').clear().type(zipcode)
  }

  setMobileNumber(mobileNumber: string) {
    this.mobileNumberInputField.should('be.visible').clear().type(mobileNumber)
  }

  clickCreateAccount() {
    this.createAccountButton.should('be.visible').click()
  }

  shouldSuccessMessageBe(options: { visible: boolean; withText?: string }) {
    this.successMessage.should(options.visible ? 'be.visible' : 'not.exist')
    if (options.withText) {
      this.isEnglish()
        ? this.successMessage.should('have.text', options.withText)
        : this.successMessage.should(
            options.visible ? 'be.visible' : 'not.exist'
          )
    }
  }

  shouldHaveErrorMessageOnField(options: { field: string; message: string }) {
    cy.get(`[data-qa="${options.field}"]`)
      .should('be.visible')
      .invoke('prop', 'validationMessage')
      .should('eq', options.message)
  }

  // Getters elements

  get genderCheckbox() {
    return cy.get('input[type="radio"]')
  }

  get femaleGenderCheckbox() {
    return cy.get('#id_gender2')
  }

  get maleGenderCheckbox() {
    return cy.get('#id_gender1')
  }

  get nameInputField() {
    return cy.get('[data-qa="name"]')
  }

  get emailInputField() {
    return cy.get('[data-qa="email"]')
  }

  get passwordInputField() {
    return cy.get('[data-qa="password"]')
  }

  get dayOfBirthSelect() {
    return cy.get('[data-qa="days"]')
  }

  get monthOfBirthSelect() {
    return cy.get('[data-qa="months"]')
  }

  get yearsOfBirthSelect() {
    return cy.get('[data-qa="years"]')
  }

  get newsletterCheckbox() {
    return cy.get('#newsletter')
  }

  get optinCheckbox() {
    return cy.get('#optin')
  }

  get titleText() {
    return cy.get('.title.text-center')
  }

  get successMessage() {
    return cy.get('[data-qa="account-created"]')
  }

  get firstNameInputField() {
    return cy.get('[data-qa="first_name"]')
  }

  get lastNameInputField() {
    return cy.get('[data-qa="last_name"]')
  }

  get companyInputField() {
    return cy.get('[data-qa="company"]')
  }

  get addressInputField() {
    return cy.get('[data-qa="address"]')
  }

  get address2InputField() {
    return cy.get('[data-qa="address2"]')
  }

  get countrySelect() {
    return cy.get('[data-qa="country"]')
  }

  get stateInputField() {
    return cy.get('[data-qa="state"]')
  }

  get cityInputField() {
    return cy.get('[data-qa="city"]')
  }

  get zipCodeInputField() {
    return cy.get('[data-qa="zipcode"]')
  }

  get mobileNumberInputField() {
    return cy.get('[data-qa="mobile_number"]')
  }

  get createAccountButton() {
    return cy.get('[data-qa="create-account"]')
  }
}
