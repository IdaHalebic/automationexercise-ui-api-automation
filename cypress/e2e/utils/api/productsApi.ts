export class ProductsApi {
  constructor() {}

  getAllProducstList = () => {
    return cy.request({
      method: 'GET',
      url: '/api/productsList',
    })
  }

  searchProduct = (value: { productName: string }) => {
    return cy.request({
      method: 'POST',
      url: '/api/searchProduct',
      form: true,
      body: {
        search_product: `${value.productName}`,
      },
    })
  }
}
