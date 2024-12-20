import { create } from "zustand";
import CART_API from "@/utilities/api/cart.api";
import useLoggedUserStore from "@/store/useLoggedUserStore";

const useCartStore = create((set) => ({
  products:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cartItems")) || []
      : [],

  setProducts: (products) =>
    set((state) => {
      if (typeof window !== "undefined") {
        if (!localStorage.getItem("uid")) {
          localStorage.setItem("cartItems", JSON.stringify(products));
        }
      }
      return { products };
    }),

  clearCart: () => set({ products: [] }),

  addProduct: async (product) => {
    const { user } = useLoggedUserStore.getState();

    if (user?.uid) {
      // Add to Firebase if logged in
      await CART_API.addProductToCart(product, user.uid);
      // Fetch updated cart after adding
      const { data } = await CART_API.getProductsInCart(user.uid);
      set({ products: data });
    } else {
      const existingProducts =
        JSON.parse(localStorage.getItem("cartItems")) || [];
      const existingProduct = existingProducts.find((p) => p.id === product.id);

      if (existingProduct) {
        existingProduct.quantity += product.quantity || 1;
        localStorage.setItem("cartItems", JSON.stringify(existingProducts));
        set({ products: existingProducts });
      } else {
        const updatedProducts = [...existingProducts, product];
        localStorage.setItem("cartItems", JSON.stringify(updatedProducts));
        set({ products: updatedProducts });
      }
    }
  },

  // Enhanced sync function
  syncCartWithFirebase: async (userId) => {
    try {
      const localCart = JSON.parse(localStorage.getItem("cartItems")) || [];
      if (localCart.length > 0) {
        for (const product of localCart) {
          await CART_API.addProductToCart(product, userId);
        }
        localStorage.removeItem("cartItems");
      }

      // Fetch updated cart from Firebase
      const { data } = await CART_API.getProductsInCart(userId);
      set({ products: data });
    } catch (error) {
      console.error("Error syncing cart:", error);
    }
  },
}));

export default useCartStore;
