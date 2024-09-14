import { create } from "zustand";

type useMenuStoreType = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useMenuStore = create<useMenuStoreType>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
