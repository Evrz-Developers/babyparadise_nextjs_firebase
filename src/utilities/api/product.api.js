const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

const getProducts = async (category = null, host = DEFAULT_HOST) => {
    try {
        const url = new URL(`${host}/api/products`);
        // Optionally filter by category
        if (category) url.searchParams.append("category", category); 
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data: data.data };
    } catch (error) {
        // TODO: Remove log
        console.error("Error fetching products:", error);
        throw error;
    }
};
  
  const PRODUCT_API = {
    getProducts,
  };
  
  export default PRODUCT_API;
  