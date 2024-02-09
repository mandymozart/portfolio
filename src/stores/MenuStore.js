'use client';

import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import { routes } from './../slideInRoutes';

// interface MenuStoreState extends State {
//   preloadedKeys: string[];
//   addPreloadedKey: (key: string) => void;
//   activeMenuItem: SlideInRoute;
//   setActiveMenuItem: (menuItem: SlideInRoute) => void;
// }

const useMenuStore = create((set) => ({
  preloadedKeys: [],
  addPreloadedKey: (key) =>
    set((state) => ({ preloadedKeys: [...state.preloadedKeys, key] })),
  activeMenuItem: routes.HOME,
  setActiveMenuItem: (menuItem) => set({ activeMenuItem: menuItem }),
  scrollYProgress: 0,
  setScrollYProgress: (scrollYProgress) => set({ scrollYProgress }),
  colors: { foreground: '#fdfdfd', background: '#fdfdfd' },
  setColors: (colors) => set({ colors }),
  ready: false,
  setReady: (ready) => set({ ready }),
}));

export default useMenuStore;

if (import.meta.env.DEV) {
  mountStoreDevtool('MenuStore', useMenuStore);
}
