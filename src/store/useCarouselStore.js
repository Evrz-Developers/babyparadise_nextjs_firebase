import { create } from "zustand";

const useCarouselStore = create((set) => ({
  carousel: [],
  setCarousel: (carousel) => {
    localStorage.setItem("carousel", JSON.stringify(carousel));
    set({ carousel });
  },
  getCarousel: () => JSON.parse(localStorage.getItem("carousel")) || [],
}));

export default useCarouselStore;
