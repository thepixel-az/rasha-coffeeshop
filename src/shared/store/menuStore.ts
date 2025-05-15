/// <reference types="vite/client" />

import { create } from 'zustand';
import axios from 'axios';

export interface MenuItem {
  name: string;
  description: string;
  ingredient: string;
  price: number;
  isCold: boolean;
  imageUrl: string;
  id: number;
  cardType: "sticky" | "normal";
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
}

interface Subcategory {
  name: string;
  isDropbox: boolean;
  id: number;
  query: string;
  categoryId: number;
  menuItems: MenuItem[];
  createdAt: string;
  updatedAt: string;
}

interface Category {
  name: string;
  query: string;
  id: number;
  subcategories: Subcategory[];
  createdAt: string;
  updatedAt: string;
}

interface MenuStore {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  fetchMenu: () => Promise<void>;
  getCategoryById: (id: number) => Category | undefined;
  getSubcategoryById: (categoryId: number, subcategoryId: number) => Subcategory | undefined;
  getMenuItemById: (categoryId: number, subcategoryId: number, menuItemId: number) => MenuItem | undefined;
}

const testData: Category[] = [
  {
    id: 1,
    name: "Drinks",
    query: "drinks",
    subcategories: [
      {
        id: 1,
        name: "Espresso Bar",
        isDropbox: true,
        query: "espressobar",
        categoryId: 1,
        menuItems: [
          {
            id: 1,
            name: "Espresso",
            description: "Strong and concentrated coffee",
            ingredient: "Coffee beans, hot water",
            price: 3.50,
            isCold: false,
            cardType: "sticky",
            imageUrl: "/images/espresso.jpg",
            subcategoryId: 1,
            createdAt: "2024-03-20T10:00:00Z",
            updatedAt: "2024-03-20T10:00:00Z"
          },
          {
            id: 2,
            name: "Americano",
            description: "Espresso with hot water",
            ingredient: "Espresso, hot water",
            price: 4.00,
            isCold: false,
            cardType: "sticky",
            imageUrl: "/images/americano.jpg",
            subcategoryId: 1,
            createdAt: "2024-03-20T10:00:00Z",
            updatedAt: "2024-03-20T10:00:00Z"
          },
          {
            id: 3,
            name: "Iced Americano",
            description: "Chilled espresso with water and ice",
            ingredient: "Espresso, cold water, ice",
            price: 4.50,
            isCold: true,
            cardType: "sticky",
            imageUrl: "/images/iced-americano.jpg",
            subcategoryId: 1,
            createdAt: "2024-03-21T10:00:00Z",
            updatedAt: "2024-03-21T10:00:00Z"
          },
          {
            id: 4,
            name: "Iced Latte",
            description: "Cold milk with espresso and ice",
            ingredient: "Espresso, milk, ice",
            price: 5.00,
            isCold: true,
            cardType: "sticky",
            imageUrl: "/images/iced-latte.jpg",
            subcategoryId: 1,
            createdAt: "2024-03-21T10:00:00Z",
            updatedAt: "2024-03-21T10:00:00Z"
          },
          {
            id: 15,
            name: "Flat White",
            description: "Smooth espresso with steamed milk",
            ingredient: "Espresso, steamed milk",
            price: 4.50,
            isCold: false,
            cardType: "sticky",
            imageUrl: "/images/flat-white.jpg",
            subcategoryId: 1,
            createdAt: "2024-04-01T10:00:00Z",
            updatedAt: "2024-04-01T10:00:00Z"
          }
        ],
        createdAt: "2024-03-20T10:00:00Z",
        updatedAt: "2024-03-20T10:00:00Z"
      },
      {
        id: 2,
        name: "Herbal Teas",
        isDropbox: false,
        query: "herbaltea",
        categoryId: 1,
        menuItems: [
          {
            id: 5,
            name: "Chamomile Tea",
            description: "Relaxing herbal infusion",
            ingredient: "Chamomile flowers, hot water",
            price: 3.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/chamomile.jpg",
            subcategoryId: 2,
            createdAt: "2024-03-22T10:00:00Z",
            updatedAt: "2024-03-22T10:00:00Z"
          },
          {
            id: 6,
            name: "Mint Tea",
            description: "Refreshing herbal tea",
            ingredient: "Mint leaves, hot water",
            price: 3.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/mint-tea.jpg",
            subcategoryId: 2,
            createdAt: "2024-03-22T10:00:00Z",
            updatedAt: "2024-03-22T10:00:00Z"
          },
          {
            id: 16,
            name: "Ginger Lemon Tea",
            description: "Spicy ginger and zesty lemon infusion",
            ingredient: "Ginger, lemon, hot water",
            price: 3.50,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/ginger-lemon-tea.jpg",
            subcategoryId: 2,
            createdAt: "2024-04-02T10:00:00Z",
            updatedAt: "2024-04-02T10:00:00Z"
          }
        ],
        createdAt: "2024-03-22T10:00:00Z",
        updatedAt: "2024-03-22T10:00:00Z"
      },
      {
        id: 3,
        name: "Smoothies",
        isDropbox: false,
        query: "smoothies",
        categoryId: 1,
        menuItems: [
          {
            id: 7,
            name: "Berry Blast",
            description: "Mixed berries smoothie",
            ingredient: "Strawberries, blueberries, yogurt, honey",
            price: 6.00,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/berry-blast.jpg",
            subcategoryId: 3,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 8,
            name: "Mango Madness",
            description: "Mango smoothie with coconut milk",
            ingredient: "Mango, coconut milk, ice",
            price: 6.50,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/mango-smoothie.jpg",
            subcategoryId: 3,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 17,
            name: "Green Detox",
            description: "Healthy green smoothie",
            ingredient: "Spinach, apple, banana, almond milk",
            price: 6.50,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/green-detox.jpg",
            subcategoryId: 3,
            createdAt: "2024-04-03T10:00:00Z",
            updatedAt: "2024-04-03T10:00:00Z"
          }
        ],
        createdAt: "2024-03-23T10:00:00Z",
        updatedAt: "2024-03-23T10:00:00Z"
      },
      {
        id: 6,
        name: "Smoothies2",
        isDropbox: false,
        query: "smoothies2",
        categoryId: 1,
        menuItems: [
          {
            id: 9,
            name: "Berry Blast",
            description: "Mixed berries smoothie",
            ingredient: "Strawberries, blueberries, yogurt, honey",
            price: 6.00,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/berry-blast.jpg",
            subcategoryId: 3,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 10,
            name: "Mango Madness",
            description: "Mango smoothie with coconut milk",
            ingredient: "Mango, coconut milk, ice",
            price: 6.50,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/mango-smoothie.jpg",
            subcategoryId: 3,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 18,
            name: "Peach Sunrise",
            description: "Peach and orange smoothie",
            ingredient: "Peach, orange juice, ice",
            price: 5.75,
            isCold: true,
            cardType: "normal",
            imageUrl: "/images/peach-sunrise.jpg",
            subcategoryId: 3,
            createdAt: "2024-04-03T10:00:00Z",
            updatedAt: "2024-04-03T10:00:00Z"
          }
        ],
        createdAt: "2024-03-23T10:00:00Z",
        updatedAt: "2024-03-23T10:00:00Z"
      }
    ],
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:00:00Z"
  },
  {
    id: 2,
    name: "Food",
    query: "food",
    subcategories: [
      {
        id: 4,
        name: "Main Dishes",
        isDropbox: false,
        query: "maindishes",
        categoryId: 2,
        menuItems: [
          {
            id: 11,
            name: "Plov",
            description: "Traditional Azerbaijani rice dish",
            ingredient: "Rice, lamb, onion, carrot, spices",
            price: 15.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/plov.jpg",
            subcategoryId: 4,
            createdAt: "2024-03-20T10:00:00Z",
            updatedAt: "2024-03-20T10:00:00Z"
          },
          {
            id: 12,
            name: "Dolma",
            description: "Stuffed grape leaves",
            ingredient: "Grape leaves, rice, minced meat, herbs",
            price: 12.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/dolma.jpg",
            subcategoryId: 4,
            createdAt: "2024-03-20T10:00:00Z",
            updatedAt: "2024-03-20T10:00:00Z"
          },
          {
            id: 19,
            name: "Kebab",
            description: "Grilled meat skewers",
            ingredient: "Lamb, spices, vegetables",
            price: 14.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/kebab.jpg",
            subcategoryId: 4,
            createdAt: "2024-04-04T10:00:00Z",
            updatedAt: "2024-04-04T10:00:00Z"
          }
        ],
        createdAt: "2024-03-20T10:00:00Z",
        updatedAt: "2024-03-20T10:00:00Z"
      },
      {
        id: 5,
        name: "Desserts",
        isDropbox: false,
        query: "desserts",
        categoryId: 2,
        menuItems: [
          {
            id: 13,
            name: "Baklava",
            description: "Sweet layered pastry with nuts and syrup",
            ingredient: "Phyllo dough, walnuts, honey syrup",
            price: 6.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/baklava.jpg",
            subcategoryId: 5,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 14,
            name: "Shekerbura",
            description: "Sweet pastry filled with nuts",
            ingredient: "Flour, nuts, sugar",
            price: 5.00,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/shekerbura.jpg",
            subcategoryId: 5,
            createdAt: "2024-03-23T10:00:00Z",
            updatedAt: "2024-03-23T10:00:00Z"
          },
          {
            id: 20,
            name: "Pahlava",
            description: "Crispy pastry with sweet syrup",
            ingredient: "Pastry dough, nuts, syrup",
            price: 6.50,
            isCold: false,
            cardType: "normal",
            imageUrl: "/images/pahlava.jpg",
            subcategoryId: 5,
            createdAt: "2024-04-05T10:00:00Z",
            updatedAt: "2024-04-05T10:00:00Z"
          }
        ],
        createdAt: "2024-03-23T10:00:00Z",
        updatedAt: "2024-03-23T10:00:00Z"
      }
    ],
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:00:00Z"
  }
];



// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'ngrok-skip-browser-warning': 'true'
  },
  withCredentials: true
});

const useMenuStore = create<MenuStore>((set, get) => ({
  categories: [],
  isLoading: false,
  error: null,

  fetchMenu: async () => {
    set({ isLoading: true, error: null });
    try {
      // const response = await api.get<Category[]>('/menu');
      set({ categories: testData, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'An unknown error occurred', 
        isLoading: false 
      });
    }
  },

  getCategoryById: (id: number) => {
    return get().categories.find(category => category.id === id);
  },

  getSubcategoryById: (categoryId: number, subcategoryId: number) => {
    const category = get().getCategoryById(categoryId);
    return category?.subcategories.find(sub => sub.id === subcategoryId);
  },

  getMenuItemById: (categoryId: number, subcategoryId: number, menuItemId: number) => {
    const subcategory = get().getSubcategoryById(categoryId, subcategoryId);
    return subcategory?.menuItems.find(item => item.id === menuItemId);
  }
})); 

export default useMenuStore;