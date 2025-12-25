import {
  accountPage,
  loginPage,
  password,
  signupApi,
  signupPage,
} from '../initialize'

describe('Registration tests', () => {
  let email: string
  let user: any
  before(() => {})

  beforeEach(() => {
    cy.fixture('userDetails').then(($data) => {
      user = $data
    })
    email = `klepo.ida_${Date.now()}@example.com`
    loginPage.navigateToPage()
  })

  afterEach(() => {
    cy.clearAllCookies()
  })

  it('ID-1 Successful registration with user', () => {
    loginPage.setName(user.name)
    loginPage.setSignupEmail(email)
    loginPage.clickSignupButton()
    signupPage.shouldBeOnPage()

    signupPage.selectGender(user.title)

    signupPage.shouldNameInputHave(user.name)

    signupPage.shouldEmailInputHave(email)

    signupPage.setPassword(password)

    signupPage.setDateOfBirth({ days: 4, month: 'November', year: '1993' })

    signupPage.shouldNewsletterCheckboxBe({ visible: true })

    signupPage.checkNewsletter({ check: true })

    signupPage.setFirstName(user.first_name)

    signupPage.setLastName(user.last_name)

    signupPage.setAddress(user.address)

    signupPage.selectCountry(user.country)

    signupPage.setState(user.state)

    signupPage.setCity(user.city)

    signupPage.setZipCode(user.zipcode)

    signupPage.setMobileNumber(user.mobile_number)

    signupPage.clickCreateAccount()

    accountPage.shouldSuccessMessageBe({ visible: true })
    accountPage.shouldSuccessMessageBe({
      visible: true,
      withText: 'Account Created!',
    })
  })

  it('ID-2 Succesful registration with all possible fields', () => {
    loginPage.navigateToPage()
    loginPage.setName(user.name)
    loginPage.setSignupEmail(email)
    loginPage.clickSignupButton()
    signupPage.shouldBeOnPage()

    signupPage.selectGender(user.title)

    signupPage.shouldNameInputHave(user.name)

    signupPage.shouldEmailInputHave(email)

    signupPage.setPassword(password)

    signupPage.setDateOfBirth({ days: 4, month: 'November', year: '1993' })

    signupPage.shouldNewsletterCheckboxBe({ visible: true })

    signupPage.checkNewsletter({ check: true })

    signupPage.setFirstName(user.first_name)

    signupPage.setLastName(user.last_name)

    signupPage.setCompany(user.company)
    signupPage.setAddress(user.address)

    signupPage.selectCountry(user.country)

    signupPage.setState(user.state)
    signupPage.setCity(user.city)

    signupPage.setZipCode(user.zipcode)

    signupPage.setMobileNumber(user.mobile_number)

    signupPage.clickCreateAccount()

    accountPage.shouldSuccessMessageBe({
      visible: true,
      withText: 'Account Created!',
    })
  })

  it('ID-3 Try to register user with blank password - should see error message', () => {
    loginPage.setName(user.name)
    loginPage.setSignupEmail(email)
    loginPage.clickSignupButton()
    signupPage.shouldBeOnPage()

    signupPage.selectGender(user.title)

    signupPage.shouldNameInputHave(user.name)

    signupPage.shouldEmailInputHave(email)

    signupPage.setDateOfBirth({ days: 4, month: 'November', year: '1993' })

    signupPage.checkNewsletter({ check: true })

    signupPage.setFirstName(user.first_name)

    signupPage.setLastName(user.last_name)

    signupPage.setCompany(user.company)
    signupPage.setAddress(user.address)

    signupPage.selectCountry(user.country)

    signupPage.setState(user.state)

    signupPage.setCity(user.city)

    signupPage.setZipCode(user.zipcode)
    signupPage.setMobileNumber(user.mobile_number)

    signupPage.clickCreateAccount()

    signupPage.shouldHaveErrorMessageOnField({
      field: 'password',
      message: 'Please fill out this field.',
    })

    signupPage.shouldBeOnPage()

    signupPage.shouldSuccessMessageBe({ visible: false })
  })

  it('ID-4 Registration with one function', () => {
    loginPage.navigateToPage()

    loginPage.setName(user.name)

    loginPage.setSignupEmail(email)

    loginPage.clickSignupButton()

    signupPage.registerUser({
      title: user.title,
      name: user.name,
      password,
      day: 4,
      month: 'November',
      year: '1993',
      newsletter: true,
      firstName: user.first_name,
      lastName: user.last_name,
      company: user.company,
      address: user.address,
      country: user.country,
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
      mobileNumber: user.mobile_number,
    })

    accountPage.shouldSuccessMessageBe({
      visible: true,
      withText: 'Account Created!',
    })
  })

  it('ID-5 Signup with user from United states of America', () => {
    loginPage.navigateToPage()

    loginPage.setName(user.name)

    loginPage.setSignupEmail(email)

    loginPage.clickSignupButton()

    signupPage.registerUser({
      title: user.title,
      name: user.name,
      password,
      day: 4,
      month: 'November',
      year: '1993',
      newsletter: true,
      firstName: user.first_name,
      lastName: user.last_name,
      company: user.company,
      address: user.address,
      country: 'United States',
      state: user.state,
      city: user.city,
      zipcode: user.zipcode,
      mobileNumber: user.mobile_number,
    })

    accountPage.shouldSuccessMessageBe({
      visible: true,
      withText: 'Account Created!',
    })
  })

  it('ID-6 Successfull signup with api', () => {
    signupApi.registerUser({ email }).then(($response) => {
      cy.wrap($response).its('status').should('eq', 200)
    })

    loginPage.navigateToPage()
    loginPage.setLoginEmail(email)
    loginPage.setLoginPassword(password)
    loginPage.clickLoginButton()

    loginPage.shouldBeLoggedInAs({ user: user.name })
  })
})
