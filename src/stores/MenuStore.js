'use client';

import { routes } from '@/slideInRoutes';
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
  })
);

export default useMenuStore;