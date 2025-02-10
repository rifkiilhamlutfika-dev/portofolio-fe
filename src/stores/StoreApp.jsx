import { create } from "zustand";

const useStore = create((set) => ({
  urlImagePopUp: "",
  isImagePopUp: false,
  addUrlImagePopUp: (url) => set({ urlImagePopUp: url }),
  closeImagePopUp: () => set({ urlImagePopUp: "", isImagePopUp: false }),
  setIsImagePopUp: () => set({ isImagePopUp: true }),
}));

export default useStore;
