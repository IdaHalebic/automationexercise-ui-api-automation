import { BasePage } from './base.page'

export class CartPage extends BasePage {
  constructor() {
    super('/view_cart')
  }

  verifyProductInCart(
    index: number,
    name: string,
    price: string,
    quantity: string,
    total: string
  ) {
    this.cartItems.eq(index).within(() => {
      cy.get('.cart_description h4 a').should('have.text', name)
      cy.get('.cart_price p').invoke('text').should('equal', price)
      cy.get('.cart_quantity button').should('have.text', quantity)
      cy.get('.cart_total_price').invoke('text').should('equal', total)
    })
  }

  clickProceedToCheckoutButton() {
    this.proceedToCheckoutButton.should('be.visible').click()
  }

  verifyAddressDetails(accountDataValuesToCheck: string[]) {
    accountDataValuesToCheck.forEach((value) => {
      this.deliveryAddress.should('contain.text', value)
      this.invoiceAddress.should('contain.text', value)
    })
  }

  clickPlaceOrder() {
    this.placeOrder.should('be.visible').click()
  }

  get cartItems() {
    return cy.get('.cart_info tbody tr')
  }

  get productName() {
    return cy.get('.cart_description h4 a')
  }

  get productPrice() {
    return cy.get('.cart_price p')
  }

  get productQuantity() {
    return cy.get('.cart_quantity button')
  }

  get productTotalPrice() {
    return cy.get('.cart_total_price')
  }

  get proceedToCheckoutButton() {
    return cy.get('.check_out')
  }

  get deliveryAddress() {
    return cy.get('#address_delivery')
  }

  get invoiceAddress() {
    return cy.get('#address_invoice')
  }

  get placeOrder() {
    return cy.get('.check_out')
  }
}
