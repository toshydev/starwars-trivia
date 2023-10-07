import { create } from "zustand";

interface State {
  category: string;
  name: string;
  model: string;
  setCategory: (category: string) => void;
  resetCategory: () => void;
  getRandomCategory: () => void;
  setName: (name: string) => void;
  resetName: () => void;
  setModel: (model: string) => void;
  resetModel: () => void;
}

export const useStore = create<State>((set) => ({
  category: "",
  name: "",
  model: "",
  setCategory: (category: string) => set(() => ({ category })),
  resetCategory: () => set(() => ({ category: "" })),
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
  setModel: (model: string) => set(() => ({ model })),
  resetModel: () => set(() => ({ model: "" })),
}));
