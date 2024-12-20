import { create } from "zustand";

const useDrawerStore = create((set) => ({
  // Login drawer state
  isLoginOpen: false,
  onLoginOpen: () => set({ isLoginOpen: true }),
  onLoginClose: () => set({ isLoginOpen: false }),
  onLoginOpenChange: (isOpen) => set({ isLoginOpen: isOpen }),

  // Cart drawer state
  isCartOpen: false,
  onCartOpen: () => set({ isCartOpen: true }),
  onCartClose: () => set({ isCartOpen: false }),
  onCartOpenChange: (isOpen) => set({ isCartOpen: isOpen }),

  // Content state
  cartDrawerContent: "cart",
  setCartDrawerContent: (content) => set({ cartDrawerContent: content }),

  // Combined handlers
  openLoginDrawer: () =>
    set({ isCartOpen: false, isLoginOpen: true, cartDrawerContent: "login" }),
  openCartDrawer: () =>
    set({ isCartOpen: true, isLoginOpen: false, cartDrawerContent: "cart" }),
}));

export default useDrawerStore;
