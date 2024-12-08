import Home from "@/components/shop/Home";
import PRODUCT_API from "@/utilities/api/product.api";
import CAROUSEL_API from "@/utilities/api/carousel.api";

export default async function Page() {
  // PREFETCH DATA FOR HOME PAGE
  const [carouselResponse, productsResponse] = await Promise.all([
    CAROUSEL_API.getCarousel(),
    PRODUCT_API.getProducts(),
  ]);
  const { data: CAROUSEL } = carouselResponse;
  const { data: PRODUCTS } = productsResponse;
  const INITIAL_DATA = { CAROUSEL, PRODUCTS };

  return (
    <div className="w-full">
      <Home initialData={INITIAL_DATA} />
    </div>
  );
}
