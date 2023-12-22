import create from 'zustand';

const useProjectStore = create((set) => ({
    activeProject: '', // UID of the active project
    setActiveProject: (activeProject) => set({ activeProject }),
}));

export default useProjectStore;
