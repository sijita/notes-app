import { create } from "zustand";
import { type IUser } from "../types/types";

interface State {
  user: IUser;
  setUser: (user: IUser) => void;
  reset: () => void;
}

export const useUserStore = create<State>((set) => ({
  user: {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  },
  setUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  reset: () =>
    set({
      user: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    }),
}));
