// TODO: REMOVE THIS ONCE FINISHED
import { dummyCartItems } from "@/utilities/demo/demoCart";

// SETS DUMMY CART DATA IN LOCAL STORAGE
export const initializeDummyData = () => {
  if (typeof window !== "undefined") {
    // Check if running in the browser
    localStorage.setItem("cartItems", JSON.stringify(dummyCartItems));
  }
};
