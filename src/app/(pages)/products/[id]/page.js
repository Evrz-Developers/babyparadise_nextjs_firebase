import ProductDetails from "@/components/shop/product/ProductDetails";

export default function ProductDetailPage({ searchParams }) {
  // Parse product data from query
  const product = searchParams.product
    ? JSON.parse(searchParams.product)
    : null;

  return (
    <>
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No details to show!
          </h2>
        </div>
      )}
    </>
  );
}
