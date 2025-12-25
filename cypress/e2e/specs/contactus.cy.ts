import { contactPage } from '../initialize'

describe('Contact form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {})

  it('Contact us through form', () => {
    // When
    contactPage.navigateToPage()
    contactPage.populateFieldsInContactForm({
      name: 'Ida',
      email: 'ida@example.com',
      subject: 'Subject',
      message: 'Message',
    })
    contactPage.clickSubmitButton()

    // Then
    contactPage.messageShouldBeSent()
  })
})
