import Home from "@/components/shop/Home";

async function fetchProducts(queryParams = "") {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products${queryParams}`, {
      cache: "no-store", 
    });

    if (!res.ok) throw new Error("Failed to fetch products");

    const data = await res.json();
    console.log(data);
    return data?.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
// TODO: Remove this function after testing
async function fetchDemoProducts() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data/products.json`);
  const data = await response.json();
  return data;
}

export default async function Page() {
  const queryParams = ""; // Optionally add category query like `?category=toy`
  // const initialProducts = await fetchProducts(queryParams); // Fetch all products on the server side
  const initialProducts = await fetchDemoProducts(); // Fetch all products on the server side

  return (
    <div>
      <Home initialProducts={initialProducts} />
    </div>
  );
}
