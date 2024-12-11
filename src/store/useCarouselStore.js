import { create } from "zustand";

const useCarouselStore = create((set) => ({
  carousel: [],
  setCarousel: (carousel) => set({ carousel }),
}));

export default useCarouselStore;
