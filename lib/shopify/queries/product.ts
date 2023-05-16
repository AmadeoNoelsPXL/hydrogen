export const getProductsBasedOnTag = `{
  products(first: 10, reverse: true) {
    edges {
      node {
        title
        images(first: 5) {
          edges {
            node {
              id
              src
              altText
            }
          }
        }
        variants(first: 1){
          edges{
            node{
              id
              selectedOptions {
                name
                value
              }
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
}`;
