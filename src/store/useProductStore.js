import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [], // To store products
  setProducts: (products) => {
    localStorage.setItem("products", JSON.stringify(products));
    set({ products });
  }, // To set the list of products and save to localStorage
  getProducts: () => JSON.parse(localStorage.getItem("products")) || [], // To return products from localStorage
}));

export default useProductStore;
