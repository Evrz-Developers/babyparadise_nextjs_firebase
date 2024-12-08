const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

const getCarousel = async (host = DEFAULT_HOST) => {
    try {
        const url = new URL(`${host}/api/products`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return { data: data.data };
    } catch (error) {
        // TODO: Remove log
        console.error("Error fetching carousel:", error);
        throw error;
    }
};
  
const CAROUSEL_API = {
  getCarousel,
};

export default CAROUSEL_API;
