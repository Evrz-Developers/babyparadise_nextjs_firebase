import Home from "@/components/shop/Home";
import PRODUCT_API from "@/utilities/api/product.api";

export default async function Page({ req }) {
  // Fetch products
  const { data: products } = await PRODUCT_API.getProducts(null, req); // Pass req to getProducts

  return (
    <Home initialProducts={products} />
  );
}