import create from 'zustand';

const useProjectStore = create((set) => ({
    activeProject: null,
    setActiveProject: (project) => set({ activeProject: project }),
}));

export default useProjectStore;
