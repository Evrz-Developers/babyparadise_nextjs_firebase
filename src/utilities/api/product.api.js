const API_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

const getProducts = async (category = null, req = null) => {
    try {
        const baseUrl = req && req.headers ? `${req.headers.origin}` : API_HOST; 
        const url = new URL(`${baseUrl}/api/products`);
        if (category) url.searchParams.append("category", category); // Optionally filter by category
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
  