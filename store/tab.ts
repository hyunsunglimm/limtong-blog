import { tabs } from "@/utils/about";
import { create } from "zustand";

type State = {
  tab: string;
};

type Action = {
  setTab: (tab: string) => void;
};

export const useTabStore = create<State & Action>()((set) => ({
  tab: tabs[0],
  setTab: (tab) => set(() => ({ tab })),
}));
