import { useEffect } from "react";
import { dummyCartItems } from "@/utilities/demo/demoCart";
import CART_API from "@/utilities/api/cart.api";

// TODO: MOVE TO STORAGE UTILITY
// Function to get cart items from localStorage(REQUIRED)
export const getCartItemsFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cartItems")) || [];
};
// TODO: MOVE TO STORAGE UTILITY
// Function to check if the user is logged in (REQUIRED)
export const isUserLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? true : false;
};

// TODO: IF LOGGED IN, FETCH PRODUCTS FROM API, ELSE GET FROM LOCAL STORAGE, ONCE LOGS IN, SEND TO DB
const CartInitializer = ({ setProducts }) => {
  useEffect(() => {
    let fetchedProducts;
    const isLoggedIn = isUserLoggedIn();
    if (isLoggedIn) {
      console.log("isLoggedIn");
      const fetchCartProducts = async () => {
        const { data } = await CART_API.getProductsInCart();
        setProducts(data); // Set products from API
      };
      fetchCartProducts();
    } else {
      initializeDummyData();
      console.log("notLoggedIn");
      fetchedProducts = getCartItemsFromLocalStorage(); // Get cart items from local storage
      console.log("cartItems", fetchedProducts);
      setProducts(fetchedProducts); // Set products from local storage
    }
  }, [setProducts]);

  return null;
};

export default CartInitializer;
