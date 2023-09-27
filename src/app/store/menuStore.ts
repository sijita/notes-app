import { create } from "zustand";

interface State {
  menu: boolean;
  setMenu: (menu: boolean) => void;
}

export const useMenuStore = create<State>((set) => ({
  menu: false,
  setMenu: (menu) => set((state) => ({ menu: menu })),
}));
