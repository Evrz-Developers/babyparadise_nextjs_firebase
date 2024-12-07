const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

const getProductsInCart = async (host = DEFAULT_HOST, isLoggedIn = false) => {
    try {
        let data;
        if (isLoggedIn) {
            const url = new URL(`${host}/api/cart`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            data = await response.json();
        } else {
            const localCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            data = { data: localCartItems };
        }

        return { data: data.data };
    } catch (error) {
        // TODO: Remove log
        console.error("Error fetching products:", error);
        throw error;
    }
};
  
const CART_API = {
  getProductsInCart,
};

export default CART_API;
