'use client';

import { routes } from '@/slideInRoutes';
import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';

// interface MenuStoreState extends State {
//   preloadedKeys: string[];
//   addPreloadedKey: (key: string) => void;
//   activeMenuItem: SlideInRoute;
//   setActiveMenuItem: (menuItem: SlideInRoute) => void;
// }

const useMenuStore = create(
  (set) => ({
    preloadedKeys: [],
    addPreloadedKey: (key) =>
      set(state => ({ preloadedKeys: [...state.preloadedKeys, key] })),
    activeMenuItem: routes.HOME,
    setActiveMenuItem: (menuItem) =>
      set({ activeMenuItem: menuItem }),
    colors: {foreground: '#fdfdfd', background: '#fdfdfd'},
    setColors: (colors)=> set({colors})
  })
);

export default useMenuStore;

if (process.env.NODE_ENV === 'development') {
  mountStoreDevtool('MenuStore', useMenuStore);
}
