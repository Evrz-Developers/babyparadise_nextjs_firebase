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
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {/* Add admin-specific components and content here */}
      <p>Welcome, Admin! Here you can manage the application.</p>
    </div>
  );
}

