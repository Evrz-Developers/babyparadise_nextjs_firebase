const getProducts = async (category = null) => {
    try {
      const url = new URL(`/api/products`);
      if (category) url.searchParams.append("category", category); // Optionally filter by category
  
      const response = await fetch(url);
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
  