const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

const getCarousel = async (host = DEFAULT_HOST) => {
  try {
    const url = new URL(`${host}/api/carousel`);
    const response = await fetch(url);
    const data = await response.json();

    // Always return data array, even if empty
    return { data: data.data || [] };
  } catch (error) {
    console.error("Error fetching carousel:", error);
    // Return empty array instead of throwing error
    return { data: [] };
  }
};

const CAROUSEL_API = {
  getCarousel,
};

export default CAROUSEL_API;
