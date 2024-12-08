import Home from "@/components/shop/Home";
import PRODUCT_API from "@/utilities/api/product.api";
import CAROUSEL_API from "@/utilities/api/carousel.api";

export default async function Page() {
  // PREFETCH DATA FOR HOME PAGE
  const { data: PRODUCTS } = await PRODUCT_API.getProducts(null);
  const { data: CAROUSEL } = await CAROUSEL_API.getCarousel();
  const INITIAL_DATA = { PRODUCTS, CAROUSEL };

  return (
    <div className="w-full">
      <Home initialData={INITIAL_DATA} />
    </div>
  );
}
