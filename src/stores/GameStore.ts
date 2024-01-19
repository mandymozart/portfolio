'use client';

import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

export const cameras = [
  'DEFAULT',
  'FIRST_PERSON',
  'BIRD_EYE',
  'SCROLL',
] as const;

export type Camera = (typeof cameras)[number];

export type GameStore = {
  camera: Camera;
  setCamera: (camera: Camera) => void;
  editor: boolean;
  setEditor: (editor: boolean) => void;
};

const useGameStore = create<GameStore>((set) => ({
  camera: 'DEFAULT',
  setCamera: (camera: Camera) => set({ camera }),
  editor: false,
  setEditor: (editor: boolean) => set({ editor }),
}));

export default useGameStore;

if (import.meta.env.DEV) {
  mountStoreDevtool('GameStore', useGameStore);
}
