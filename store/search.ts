import { create } from "zustand";

type State = {
  keyword: string;
};

type Action = {
  setKeyword: (enteredValue: string) => void;
};

export const useSearchStore = create<State & Action>()((set) => ({
  keyword: "",
  setKeyword: (enteredValue) => set(() => ({ keyword: enteredValue })),
}));
