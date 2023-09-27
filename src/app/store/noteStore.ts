import { create } from "zustand";
import { type INote } from "../types/types";

interface State {
  note: INote;
  isDisabled: boolean;
  setNote: (note: INote) => void;
  setIsDisabled: (isDisabled: boolean) => void;
  reset: () => void;
}

export const useNoteStore = create<State>((set, get) => ({
  note: {
    title: "",
    content: "",
  },
  isDisabled: true,
  setNote: (note) => set((state) => ({ note: { ...state.note, ...note } })),
  setIsDisabled: (isDisabled) => set({ isDisabled }),
  reset: () =>
    set({
      note: {
        title: "",
        content: "",
      },
    }),
}));
