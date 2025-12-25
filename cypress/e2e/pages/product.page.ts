import { BasePage } from './base.page'

export class ProductsPage extends BasePage {
  constructor() {
    super('/product')
  }

  clickVisitProducts() {
    this.visitProducts.should('be.visible').click()
  }

  addFirstProduct() {
    this.firstProduct.first().should('be.visible').trigger('mouseover')
    this.firstProductOverlay.first().should('be.visible')
    this.firstProductAddToCart.first().should('be.visible').click()
  }

  clickContinueShopping() {
    this.continueShopping.should('be.visible').click()
  }

  addSecondProduct() {
    this.secondProduct.should('be.visible').eq(1).trigger('mouseover')
    this.secondProductAddToCart
      .eq(1)
      .find('.overlay-content a[data-product-id="2"]')
      .click({ force: true })
  }

  addThirdProduct() {
    this.thirdProduct.should('be.visible').eq(2).trigger('mouseover')
    this.thirdProductAddToCart
      .eq(2)
      .find('.overlay-content a[data-product-id="3"]')
      .click({ force: true })
  }

  clickGoToCart() {
    this.goToCart.find('a[href="/view_cart"]').should('be.visible').click()
  }

  get visitProducts() {
    return cy.get('a[href="/products"]')
  }

  get firstProduct() {
    return cy.get('.product-image-wrapper')
  }

  get firstProductOverlay() {
    return cy.get('.overlay-content ')
  }

  get firstProductAddToCart() {
    return cy.get('.add-to-cart')
  }

  get continueShopping() {
    return cy.contains('Continue Shopping')
  }

  get secondProduct() {
    return cy.get('.product-image-wrapper')
  }

  get secondProductAddToCart() {
    return cy.get('.product-image-wrapper')
  }

  get thirdProduct() {
    return cy.get('.product-image-wrapper')
  }

  get thirdProductAddToCart() {
    return cy.get('.product-image-wrapper')
  }

  get goToCart() {
    return cy.get('.modal-body')
  }
}
