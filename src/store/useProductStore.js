import { create } from "zustand";

const useProductStore = create((set) => ({
  products: [], // To store products
  setProducts: (products) => set({ products }), // To set the list of products
}));

export default useProductStore;
