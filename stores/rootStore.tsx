import { RawNodeDatum, TreeNodeDatum } from "react-d3-tree/lib/types/common";
import create from "zustand";
import { combine } from "zustand/middleware";

export interface IQuestion {
  text: string;
  type: "free-text" | "multiple-choice";
  options?: string[];
}

export interface Tree {
  name: string;
  attributes?: {
    [key: string]: string;
  };
  children?: Tree[];
}

interface RootStore {
  questions: IQuestion[];
  createQuestion: (q: IQuestion) => void;
  tree: RawNodeDatum;
  setTree: (tree: RawNodeDatum) => void;
}

export const useRootStore = create<RootStore>((set) => ({
  questions: [],
  createQuestion: (fields: IQuestion) => {
    set((state) => {
      return {
        questions: state.questions.concat(fields),
      };
    });
  },
  addNote: (q: IQuestion, node: TreeNodeDatum) => {
    set((state) => {});
  },
  tree: {
    name: "Root",
    attributes: {
      id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f",
    },
    children: [
      {
        name: "Root 1.1",
        attributes: {
          id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f2",
        },
        children: [],
      },
      {
        name: "Root 1.2",
        attributes: {
          id: "411d9783-85ba-41e5-a6a3-5e1cca3d294f3",
        },
        children: [],
      },
    ],
  },
  setTree: (tree: RawNodeDatum) => {
    set(() => {
      return {
        tree,
      };
    });
  },
}));
