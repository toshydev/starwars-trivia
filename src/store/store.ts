import { create } from "zustand";

interface State {
  page: number;
  category: string;
  name: string;
  setPage: (page: number) => void;
  setCategory: (category: string) => void;
  getRandomCategory: () => void;
  setName: (name: string) => void;
  resetName: () => void;
}

export const useStore = create<State>((set) => ({
  page: 1,
  category: "films",
  name: "",
  nextPage: () => set((state) => ({ page: state.page + 1 })),
  prevPage: () => set((state) => ({ page: state.page - 1 })),
  setPage: (page: number) => set(() => ({ page })),
  setCategory: (category: string) => set(() => ({ category })),
  getRandomCategory: () =>
    set(() => ({
      category: [
        "people",
        "planets",
        "films",
        "species",
        "vehicles",
        "starships",
      ][Math.floor(Math.random() * 6)],
    })),
  setName: (name: string) => set(() => ({ name })),
  resetName: () => set(() => ({ name: "" })),
}));
