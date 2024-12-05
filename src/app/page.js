import Home from "@/components/shop/Home";
import PRODUCT_API from "@/utilities/api/product.api";
import FUNCTIONS from "@/utilities/functions";
import InstallPrompt from "@/app/InstallPrompt";

export default async function Page() {
  // PREFETCH DATA FOR HOME PAGE
  // PREFETCH DATA FOR HOME PAGE
  const { data: PRODUCTS } = await PRODUCT_API.getProducts(null);
  const CAROUSEL = await FUNCTIONS.CAROUSEL.GET_IMAGES();

  const INITIAL_DATA = { PRODUCTS, CAROUSEL };

  return (
    <div>
      <Home initialData={INITIAL_DATA} />
      <InstallPrompt />
    </div>
  );
}
