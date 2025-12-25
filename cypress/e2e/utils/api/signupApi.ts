import { password } from 'cypress/e2e/initialize'

export class SignupApi {
  constructor() {}

  registerUser = (values: {
    email: string
    country?: string
    address?: string
  }) => {
    return cy.fixture('userDetails').then(($data) => {
      return cy
        .request({
          method: 'POST',
          url: 'api/createAccount',
          form: true,
          body: {
            name: $data.name,
            email: values.email,
            password,
            title: $data.title,
            birth_day: $data.day,
            birth_month: $data.month,
            birth_year: $data.year,
            firstname: $data.first_name,
            lastname: $data.last_name,
            company: 'Halebic d.o.o.',
            address1: values.address || $data.address,
            address2: $data.adress,
            country: values.country || $data.country,
            zipcode: '12345',
            state: 'State',
            city: 'City',
            mobile_number: '123456789',
          },
        })
        .then((response) => {
          return response
        })
    })
  }
}
