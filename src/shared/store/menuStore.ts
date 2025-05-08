import { create } from 'zustand';
import axios from 'axios';

interface MenuItem {
  name: string;
  description: string;
  price: number;
  isColdCoffee: boolean;
  categoryId: number;
  id: number;
  createdAt: string;
  updatedAt: string;
}

interface MenuCategory {
  name: string;
  description: string;
  id: number;
  items: MenuItem[];
  createdAt: string;
  updatedAt: string;
}

interface MenuStore {
  categories: MenuCategory[];
  isLoading: boolean;
  error: string | null;
  fetchMenu: () => Promise<void>;
}

const initialState: MenuStore = {
  categories: [],
  isLoading: false,
  error: null,
  fetchMenu: async () => {},
};

// Create axios instance with default config
const api = axios.create({
  baseURL: '/api', // Using relative URL that will be proxied
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  maxRedirects: 5,
  validateStatus: function (status) {
    return status >= 200 && status < 400; // Accept 2xx and 3xx status codes
  }
});

export const useMenuStore = create<MenuStore>((set) => ({
  ...initialState,
  fetchMenu: async () => {
    try {
      set({ isLoading: true, error: null });
      const response = await api.get<MenuCategory[]>('/v1/menu');
      const data = response.data;
      
      if (!Array.isArray(data)) {
        throw new Error('Invalid response format: expected an array');
      }
      
      set({ categories: data, isLoading: false });
    } catch (error) {
      console.error('Menu fetch error:', error);
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch menu', 
        isLoading: false,
        categories: [] // Reset categories on error
      });
    }
  },
})); 