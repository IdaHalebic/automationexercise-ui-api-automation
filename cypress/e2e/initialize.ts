import { LoginPage } from './pages/login.page'
import { SignupPage } from './pages/signup.page'
import { AccountPage } from './pages/account.page'
import { ProductsPage } from './pages/product.page'
import { CartPage } from './pages/cart.page'
import { PaymentPage } from './pages/payment.page'
import { SignupApi } from './utils/api/signupApi'
import { ContactPage } from './pages/contactus.page'

export const password = Cypress.env('user').password
export const language = Cypress.env('language')

export const loginPage = new LoginPage()
export const signupPage = new SignupPage()
export const accountPage = new AccountPage()
export const productsPage = new ProductsPage()
export const cartPage = new CartPage()
export const paymentPage = new PaymentPage()
export const contactPage = new ContactPage()

export const signupApi = new SignupApi()
