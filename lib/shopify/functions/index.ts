import { client } from "../index";
import { getProductsBasedOnTag } from "../queries/product";
import { flattenConnection } from "@shopify/hydrogen-react";

export async function getProductsByTag() {
  const response = await fetch(client.getStorefrontApiUrl(), {
    body: JSON.stringify({
      query: getProductsBasedOnTag,
    }),
    headers: client.getPrivateTokenHeaders({ buyerIp: "" }),
    method: "POST",
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const json = await response.json();

  const { data } = json;

  return flattenConnection(data.products).map((product: Product) => {
    console.log(product);
    const updateProduct = {
      ...product,
      images: flattenConnection(product.images),
    };

    return updateProduct;
  });
}
