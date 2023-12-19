import create from 'zustand';

const useMenuStore = create((set) => ({
    activeMenuItem: 'home',
    setActiveMenuItem: (menuItem) => set({ activeMenuItem: menuItem }),
}));

export default useMenuStore;
