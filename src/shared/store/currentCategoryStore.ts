import { create } from 'zustand';
import { MenuItem } from './menuStore';

interface CurrentCategoryStore {
  currentItems: MenuItem[];
  setCurrentItems: (items: MenuItem[]) => void;
  clearCurrentItems: () => void;
}

const useCurrentCategoryStore = create<CurrentCategoryStore>((set) => ({
  currentItems: [],
  setCurrentItems: (items) => set({ currentItems: items }),
  clearCurrentItems: () => set({ currentItems: [] })
}));

export default useCurrentCategoryStore; 