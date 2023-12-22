import { SlideInRoute, routes } from '@/slideInRoutes';
import { PrismicClientHookState } from '@prismicio/react';
import create, { SetState, State } from 'zustand';

interface MenuStoreState extends State {
  state: PrismicClientHookState; // "idle" | "loading" | "loaded" | "failed"
  setState: (state: MenuStoreState['state']) => void;
  activeMenuItem: SlideInRoute;
  setActiveMenuItem: (menuItem: SlideInRoute) => void;
}

const useMenuStore = create<MenuStoreState>(
  (set: SetState<MenuStoreState>) => ({
    state: 'idle',
    setState: state => set({ state }),
    activeMenuItem: routes.HOME,
    setActiveMenuItem: menuItem => set({ activeMenuItem: menuItem }),
  })
);

export default useMenuStore;
