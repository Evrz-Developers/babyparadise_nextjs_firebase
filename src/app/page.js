import Home from "@/components/shop/Home";
import PRODUCT_API from "@/utilities/api/product.api";
import FUNCTIONS from "@/utilities/functions";

export default async function Page() {
  // PREFETCH DATA FOR HOME PAGE
  // PREFETCH DATA FOR HOME PAGE
  const { data: PRODUCTS } = await PRODUCT_API.getProducts(null);
  const CAROUSEL = await FUNCTIONS.CAROUSEL.GET_IMAGES();
  const INITIAL_DATA = { PRODUCTS, CAROUSEL };

  return (
    <div className="w-full">
      <Home initialData={INITIAL_DATA} />
    </div>
  );
}
