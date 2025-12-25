import { accountPage, loginPage, signupPage } from '../initialize'
import { password } from '../initialize'

describe('Login Tests', () => {
  const user = {
    name: '',
    titile: '',
    first_name: '',
    days: '',
    months: '',
    years: '',
    last_name: '',
    adress: '',
    country: '',
    state: '',
    city: '',
    zipcode: '',
    mobile_number: '',
    adress2: '',
    company: '',
  }

  let email: string

  beforeEach(() => {
    cy.fixture('userDetails').then(($data) => {
      user.name = $data.name
      user.first_name = $data.first_name
      user.last_name = $data.last_name
      user.adress = $data.address
      user.adress2 = $data.address2
      user.country = $data.country
      user.state = $data.state
      user.city = $data.city
      user.zipcode = $data.zipcode
      user.mobile_number = $data.mobile_number
    })

    email = `klepo.ida_${Date.now()}@example.com`
    cy.visit('/')
  })

  it('Navigate to login', () => {
    loginPage.navigateToPage()
    loginPage.setName(user.name)
    loginPage.setSignupEmail(email)
    loginPage.clickSignupButton()
    signupPage.shouldBeOnPage()
    signupPage.selectGender('Mrs')
    signupPage.shouldNameInputHave(user.name)
    signupPage.shouldEmailInputHave(email)
    signupPage.setPassword(password)
    signupPage.setDateOfBirth({ days: 4, month: 'November', year: '1993' })
    signupPage.shouldNewsletterCheckboxBe({ visible: true })
    signupPage.setFirstName(user.first_name)
    signupPage.setLastName(user.last_name)
    signupPage.setCompany(user.name)
    signupPage.setAddress(user.adress)
    signupPage.setAddress2(user.adress2)
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
    accountPage.clickContinueButton()
    accountPage.clickLogOutButton()
  })
})
