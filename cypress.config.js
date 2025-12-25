module.exports = {
  e2e: {
    baseUrl: 'https://automationexercise.com',
    setupNodeEvents(on, config) {},
    viewportWidth: 1920,
    viewportHeight: 1080,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
    requestTimeout: 30000,
    responseTimeout: 30000,
  },
  env: {
    stageUrl: 'https://stage.automationexercise.com',
    devUrl: 'https://dev.automationexercise.com',
    user: {
      password: 'Ida1234',
      card_number: '4242 4242 4242 4242',
      cvc: '123',
      expiry_month: '11',
      expiry_year: '2025',
    },
    language: 'English',
  },
}
