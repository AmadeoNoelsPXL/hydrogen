import { CartProvider } from "@shopify/hydrogen-react";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />;
    </CartProvider>
  );
}
