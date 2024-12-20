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

  // Menu drawer state
  isMenuOpen: false,
  onMenuOpen: () => set({ isMenuOpen: true }),
  onMenuClose: () => set({ isMenuOpen: false }),
  onMenuOpenChange: (isOpen) => set({ isMenuOpen: isOpen }),

  // Combined handlers
  openLoginDrawer: () =>
    set({
      isCartOpen: false,
      isLoginOpen: true,
    }),
  openCartDrawer: () =>
    set({
      isCartOpen: true,
      isLoginOpen: false,
    }),
  openMenuDrawer: () =>
    set({
      isMenuOpen: true,
      isCartOpen: false,
      isLoginOpen: false,
    }),
}));

export default useDrawerStore;
