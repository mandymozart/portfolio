'use client';

import { SlideInRoute, routes } from '@/slideInRoutes';
import zukeeper from 'zukeeper';
import create, { SetState, State } from 'zustand';

interface MenuStoreState extends State {
  preloadedKeys: string[];
  addPreloadedKey: (key: string) => void;
  activeMenuItem: SlideInRoute;
  setActiveMenuItem: (menuItem: SlideInRoute) => void;
}

const useMenuStore = create<MenuStoreState>(
  zukeeper((set: SetState<MenuStoreState>) => ({
    preloadedKeys: [],
    addPreloadedKey: (key: string) =>
      set(state => ({ preloadedKeys: [...state.preloadedKeys, key] })),
    activeMenuItem: routes.HOME,
    setActiveMenuItem: (menuItem: SlideInRoute) =>
      set({ activeMenuItem: menuItem }),
  }))
);

declare const window: {
  store: any;
} & Window;

window.store = window.store || {};

window.store = useMenuStore;
export default useMenuStore;
