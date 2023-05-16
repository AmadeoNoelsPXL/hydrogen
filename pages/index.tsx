import { GetServerSideProps } from "next";
import { getProductsByTag } from "../lib/shopify/functions";
import { ProductProvider, useProduct } from "@shopify/hydrogen-react";
export default function Home({ products }) {
  return (
    <div>
      {products.map((product) => (
        <ProductProvider data={product} key={product?.title}>
          <UsingProduct />
        </ProductProvider>
      ))}
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getProductsByTag();
  console.log(products[0]);
  return {
    props: { products },
  };
};

function UsingProduct() {
  const { product } = useProduct();

  return (
    <>
      <h1> {}</h1>;
    </>
  );
}
