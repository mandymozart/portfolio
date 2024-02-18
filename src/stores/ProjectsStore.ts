import { mountStoreDevtool } from 'simple-zustand-devtools';
import create from 'zustand';
import docs from '../data';
import { ProjectDocument } from '../data/types';

export enum FilterKey {
  INDUSTRY = 'Industry',
  PARTNER = 'Partner',
  ROLE = 'Role',
  TYPE = 'Type',
  METHOD = 'Method',
  SKILL = 'Skill',
}

export type ProjectFilter = {
  category: string;
  uid: string;
};

export const sortingKeys: string[] = ['fromDate', 'name'];
export const filterKeys: FilterKey[] = [
  FilterKey.INDUSTRY,
  FilterKey.PARTNER,
  FilterKey.METHOD,
  FilterKey.ROLE,
  FilterKey.SKILL,
];

export enum SortingDirection {
  ASC = 'asc',
  DESC = 'desc',
}

export type ProjectStore = {
  direction: SortingDirection;
  setDirection: (direction: SortingDirection) => void;
  sortingKey: string;
  setSortingKey: (key: string) => void;
  projects: any[];
  setProjects: (projects: ProjectDocument[]) => void;
  filters: ProjectFilter[];
  setFilters: (filters: ProjectFilter[]) => void;
  addFilter: (filter: ProjectFilter) => void;
  removeFilter: (filter: ProjectFilter) => void;
};

const useProjectsStore = create<ProjectStore>((set, get) => ({
  direction: SortingDirection.DESC,
  setDirection: (direction) => set({ direction: direction }),
  sortingKey: 'fromDate',
  setSortingKey: (key) => set({ sortingKey: key }),
  projects: docs.projects,
  setProjects: (projects) => set({ projects: projects }),
  filters: [],
  setFilters: (filters) => set({ filters: filters }),
  addFilter: (filter) => set({ filters: [...get().filters, filter] }),
  removeFilter: (filter) =>
    set({ filters: [...get().filters.filter((f) => f.uid !== filter.uid)] }),
}));

export default useProjectsStore;

if (import.meta.env.DEV) {
  mountStoreDevtool('ProjectsStore', useProjectsStore);
}
