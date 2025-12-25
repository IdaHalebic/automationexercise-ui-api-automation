import {
  loginPage,
  password,
  signupPage,
  accountPage,
  productsPage,
  cartPage,
  paymentPage,
} from '../initialize'
describe('Products Tests', () => {
  let dynamicEmail: string
  let userDetails: any
  let accountDataValuesToCheck
  const userFromConfig = Cypress.env('user')

  before('Register User', () => {
    cy.fixture('userDetails').then((user) => {
      userDetails = user

      const dynamicPart = Date.now()
      const [localPart, domainPart] = userDetails.email.split('@')

      dynamicEmail = `${localPart}_${dynamicPart}@${domainPart}`

      cy.log(`${dynamicEmail}`)

      accountDataValuesToCheck = [
        userDetails.name,
        userDetails.company,
        userDetails.address,
        userDetails.address2,
        `${userDetails.city} ${userDetails.state}`,
        userDetails.zipcode,
        userDetails.country,
        userDetails.mobile_number,
      ]

      loginPage.navigateToPage()
      loginPage.setName(user.name)
      loginPage.setSignupEmail(dynamicEmail)
      loginPage.clickSignupButton()
      signupPage.shouldBeOnPage()

      signupPage.selectGender(userDetails.title)

      signupPage.shouldNameInputHave(user.name)

      signupPage.shouldEmailInputHave(dynamicEmail)

      signupPage.setPassword(password)

      signupPage.setDateOfBirth({ days: 4, month: 'November', year: '1993' })

      signupPage.shouldNewsletterCheckboxBe({ visible: true })

      signupPage.checkNewsletter({ check: true })

      signupPage.checkTitle()
      signupPage.setFirstName(user.first_name)
      signupPage.setLastName(user.last_name)
      signupPage.setCompany(user.name)
      signupPage.setAddress(user.address)
      signupPage.setAddress2(user.address2)
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

  beforeEach('Login User', () => {
    loginPage.navigateToPage()
    loginPage.setLoginEmail(dynamicEmail)
    loginPage.setLoginPassword(password)
    loginPage.clickLoginButton()
    cy.contains(`Logged in as ${userDetails.name}`).should('be.visible')
  })

  afterEach('Logout User', () => {
    accountPage.clickLogOutButton()
  })

  it.only('Add product to cart', () => {
    //When
    productsPage.clickVisitProducts()

    // Then
    loginPage.navigateToPage()
    productsPage.addFirstProduct()
    productsPage.clickContinueShopping()

    productsPage.addSecondProduct()
    productsPage.clickContinueShopping()

    productsPage.addThirdProduct()

    productsPage.clickGoToCart()
    cartPage.verifyProductInCart(0, 'Blue Top', 'Rs. 500', '1', 'Rs. 500')
    cartPage.verifyProductInCart(1, 'Men Tshirt', 'Rs. 400', '1', 'Rs. 400')
    cartPage.verifyProductInCart(
      2,
      'Sleeveless Dress',
      'Rs. 1000',
      '1',
      'Rs. 1000'
    )

    cartPage.clickProceedToCheckoutButton()
    cartPage.clickPlaceOrder()
    paymentPage.shouldBeOnPage()
    paymentPage.setNameOnCard(userDetails.name)
    paymentPage.setCardNumber(userFromConfig.card_number)
    paymentPage.setCVC(userFromConfig.cvc)
    paymentPage.setExpiryMonth(userFromConfig.expiry_month)
    paymentPage.setExpiryYear(userFromConfig.expiry_year)
    paymentPage.clickPayButton()
    paymentPage.completePayment()
  })
})
