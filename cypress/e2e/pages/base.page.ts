import { language } from '../initialize'

export abstract class BasePage {
  protected readonly path: string

  constructor(path: string) {
    this.path = path
  }

  navigateToPage() {
    cy.visit(this.path)
  }

  clickToPage(url?: string) {
    this.getNavigationElement(url).should('be.visible').click()
  }

  shouldBeOnPage(url?: string) {
    cy.url().should('include', url || this.path)
  }

  isEnglish() {
    if (language == 'English') return true
    return false
  }

  getNavigationElement(url?: string) {
    return cy.get(`a[href="${url || this.path}"]`)
  }
}
