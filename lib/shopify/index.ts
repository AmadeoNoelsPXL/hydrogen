import { createStorefrontClient } from "@shopify/hydrogen-react";

export const client = createStorefrontClient({
  storeDomain: "https://motorstore-2063.myshopify.com",
  storefrontApiVersion: "2023-04",
  privateStorefrontToken: "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",
});
