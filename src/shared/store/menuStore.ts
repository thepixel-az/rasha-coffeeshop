/// <reference types="vite/client" />

import { create } from 'zustand';
import axios from 'axios';

export interface MenuItem {
  name: string;
  description: string;
  ingredient: string;
  price: number | [number, number];
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
      //Avropa Üslubunu
      {
        "id": 1,
        "name": "Avropa Üslubunu",
        "isDropbox": true,
        "query": "avropa-uslubunu",
        "categoryId": 1,
        "menuItems": [
          {
            "id": 1,
            "name": "Espresso",
            "description": "Strong and concentrated coffee",
            "ingredient": "Double espresso, hot water",
            "price": 3.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/espresso.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-20T10:00:00Z",
            "updatedAt": "2024-03-20T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Americano ",
            "description": "Espresso with hot water, served with 10 hazelnuts (10g)",
            "ingredient": "Double espresso, hot water, hazelnuts",
            "price": 4.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/americano.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-20T10:00:00Z",
            "updatedAt": "2024-03-20T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Americano ",
            "description": "Chilled espresso with water and ice",
            "ingredient": "Double espresso, cold water, ice",
            "price": 4.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-americano.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Cappuccino ",
            "description": "Creamy coffee with steamed milk and a touch of cinnamon",
            "ingredient": "Double espresso, 250ml steamed milk, cinnamon powder",
            "price": 5.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/cappuccino.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Cappuccino ",
            "description": "Chilled creamy coffee with milk and cinnamon",
            "ingredient": "Double espresso, cold milk, cinnamon powder, ice",
            "price": 5.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-cappuccino.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Latte ",
            "description": "Smooth blend of espresso and milk",
            "ingredient": "Double espresso, 250ml steamed milk",
            "price": 5.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/latte.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Latte ",
            "description": "Cold milk with espresso and ice",
            "ingredient": "Double espresso, cold milk, ice",
            "price": 5.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-latte.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Flat White",
            "description": "Smooth espresso with steamed milk",
            "ingredient": "Double espresso, 120ml steamed milk",
            "price": 4.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/flat-white.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 9,
            "name": "Cortado",
            "description": "Rich espresso with a dash of milk",
            "ingredient": "Double espresso, 60ml steamed milk",
            "price": 4.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/cortado.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 10,
            "name": "Latte Macchiato",
            "description": "Foamy milk layered with espresso",
            "ingredient": "Double espresso, 200ml foamed milk",
            "price": 5.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/latte-macchiato.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 11,
            "name": "Raf ",
            "description": "Unique creamy coffee with cream and milk",
            "ingredient": "Double espresso, 180ml milk, 70ml cream",
            "price": 6.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/raf.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-02T10:00:00Z",
            "updatedAt": "2024-04-02T10:00:00Z"
          },
          {
            "id": 12,
            "name": "Raf ",
            "description": "Cold creamy coffee with cream and milk",
            "ingredient": "Double espresso, cold milk, cream, ice",
            "price": 6.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-raf.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-02T10:00:00Z",
            "updatedAt": "2024-04-02T10:00:00Z"
          },
          {
            "id": 13,
            "name": "Americano Tonic",
            "description": "Refreshing espresso with tonic water",
            "ingredient": "Double espresso, Schweppes tonic",
            "price": 5.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/americano-tonic.jpg",
            "subcategoryId": 1,
            "createdAt": "2024-04-02T10:00:00Z",
            "updatedAt": "2024-04-02T10:00:00Z"
          }
        ],
        "createdAt": "2024-03-20T10:00:00Z",
        "updatedAt": "2024-03-20T10:00:00Z"
      },
      //Xüsusi Avropa
      {
        "id": 2,
        "name": "Xüsusi Avropa",
        "isDropbox": true,
        "query": "xususi-avropa",
        "categoryId": 2,
        "menuItems": [
          {
            "id": 1,
            "name": "Nutty Latte",
            "description": "Latte with nutty cream and hazelnut aroma",
            "ingredient": "Double espresso, nutty cream, hazelnut flavor",
            "price": 11.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/nutty-latte.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Spanish Latte",
            "description": "Latte with condensed milk",
            "ingredient": "Double espresso, milk, condensed milk",
            "price": 9.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/spanish-latte.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Spanish Latte",
            "description": "Iced latte with condensed milk",
            "ingredient": "Double espresso, cold milk, condensed milk, ice",
            "price": 9.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-spanish-latte.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Mocha",
            "description": "Hot mocha with dark chocolate and cinnamon",
            "ingredient": "Double espresso, milk, dark chocolate, cinnamon",
            "price": 9.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/mocha.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Mocha",
            "description": "Iced mocha with dark chocolate and cinnamon",
            "ingredient": "Double espresso, cold milk, dark chocolate, cinnamon, ice",
            "price": 9.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-mocha.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Honey Latte",
            "description": "Hot latte sweetened with honey",
            "ingredient": "Double espresso, milk, honey",
            "price": 8.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/honey-latte.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Chocolate",
            "description": "Hot rich chocolate coffee",
            "ingredient": "Double espresso, chocolate",
            "price": 7.50,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/chocolate.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Chocolate",
            "description": "Iced chocolate coffee",
            "ingredient": "Double espresso, chocolate, ice",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/iced-chocolate.jpg",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      }, 
      //Brand Bar
      {
        "id": 3,
        "name": "Brand Bar",
        "isDropbox": true,
        "query": "brand-bar",
        "categoryId": 3,
        "menuItems": [
          {
            "id": 31,
            "name": "Ginger Latte",
            "description": "Latte with almond milk, ginger, vanilla, and espresso",
            "ingredient": "Almond milk, ginger, vanilla, espresso",
            "price": 9.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/ginger-latte.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 32,
            "name": "East Latte",
            "description": "Latte with coconut milk, caramel, cinnamon, and espresso",
            "ingredient": "Coconut milk, caramel, cinnamon powder, espresso",
            "price": 8.90,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/east-latte.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 33,
            "name": "Classic Chai Tea",
            "description": "Tea with milk, black tea, and cinnamon",
            "ingredient": "Milk, black tea, cinnamon",
            "price": 7.90,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/classic-chai-tea.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 34,
            "name": "Scent of Zen Cocktail",
            "description": "Refreshing cocktail with jasmine tea, foamy milk, and vanilla",
            "ingredient": "Jasmine tea, foamy milk, vanilla",
            "price": 8.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/scent-of-zen.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 35,
            "name": "Halva Raf",
            "description": "Special Raf with halva, milk, and double espresso",
            "ingredient": "Halva, milk, double espresso",
            "price": 10.00,
            "isCold": false,
            "cardType": "sticky",
            "imageUrl": "/images/halva-raf.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 36,
            "name": "Orange Espresso",
            "description": "Espresso with fresh orange flavor",
            "ingredient": "Double espresso, orange",
            "price": 9.90,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/orange-espresso.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 37,
            "name": "Nutella Milkshake",
            "description": "Sweet milkshake with Nutella, milk, and vanilla",
            "ingredient": "Nutella, milk, vanilla",
            "price": 11.90,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/nutella-milkshake.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 38,
            "name": "Elixir",
            "description": "Refreshing drink with pomegranate, lemon, green tea, and lemon peel",
            "ingredient": "Pomegranate, fresh lemon, green tea, lemon peel",
            "price": 10.90,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/elixir.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 39,
            "name": "Sakura Tonic",
            "description": "Refreshing tonic with sakura and sparkling water",
            "ingredient": "Sakura, sparkling water",
            "price": 8.90,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/sakura-tonic.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },
        //Matcha
        {
          "id": 5,
          "name": "Matcha",
          "isDropbox": true,
          "query": "matcha",
          "categoryId": 5,
          "menuItems": [
            {
              "id": 1,
              "name": "Matcha Rose",
              "description": "Hot matcha with rose water, white chocolate and milk",
              "ingredient": "Matcha, rose water, white chocolate, milk",
              "price": 7.50,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/matcha-rose.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 2,
              "name": "Classic Matcha",
              "description": "Hot classic matcha with milk",
              "ingredient": "Matcha, milk",
              "price": 6.50,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/classic-matcha.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 3,
              "name": "Classic Matcha",
              "description": "Iced classic matcha with milk",
              "ingredient": "Matcha, cold milk, ice",
              "price": 6.50,
              "isCold": true,
              "cardType": "sticky",
              "imageUrl": "/images/iced-classic-matcha.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 4,
              "name": "Matcha Pomegranate",
              "description": "Hot matcha with milk, pomegranate and white chocolate",
              "ingredient": "Matcha powder, milk, pomegranate, white chocolate",
              "price": 7.50,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/matcha-pomegranate.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 5,
              "name": "Matcha Tonic",
              "description": "Refreshing tonic matcha with sparkling water",
              "ingredient": "Tonic matcha, sparkling water",
              "price": 7.00,
              "isCold": true,
              "cardType": "sticky",
              "imageUrl": "/images/matcha-tonic.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 6,
              "name": "Vanilla Matcha Latte",
              "description": "Hot matcha latte with vanilla and milk",
              "ingredient": "Matcha, vanilla, milk",
              "price": 7.00,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/vanilla-matcha-latte.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 7,
              "name": "Black Matcha",
              "description": "Hot strong black matcha with espresso and milk",
              "ingredient": "Matcha, milk, double espresso",
              "price": 7.50,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/black-matcha.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            },
            {
              "id": 8,
              "name": "Rasha Garden",
              "description": "Hot pistachio matcha with milk",
              "ingredient": "Pistachio matcha, milk",
              "price": 7.50,
              "isCold": false,
              "cardType": "sticky",
              "imageUrl": "/images/rasha-garden.jpg",
              "subcategoryId": 5,
              "createdAt": "2025-08-29T10:00:00Z",
              "updatedAt": "2025-08-29T10:00:00Z"
            }
          ],
          "createdAt": "2025-08-29T10:00:00Z",
          "updatedAt": "2025-08-29T10:00:00Z"
        },
      //milkshake     
      {
        "id": 3,
        "name": "Milkshake",
        "isDropbox": false,
        "query": "milkshake",
        "categoryId": 3,
        "menuItems": [
          {
            "id": 1,
            "name": "Milkshake",
            "description": "Cold milkshake with vanilla",
            "ingredient": "Milk, vanilla",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/milkshake.jpg",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      }

      //Digər İçkilər
      ,
      {
        "id": 4,
        "name": "Digər İçkilər",
        "isDropbox": false,
        "query": "diger-ickiler",
        "categoryId": 4,
        "menuItems": [
          {
            "id": 1,
            "name": "Red Bull",
            "description": "Chilled energy drink",
            "ingredient": "Energy drink",
            "price": 5.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/red-bull.jpg",
            "subcategoryId": 4,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Sparkling Premium Water",
            "description": "Chilled sparkling premium water",
            "ingredient": "Carbonated water",
            "price": 3.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/sparkling-water.jpg",
            "subcategoryId": 4,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Still Premium Water",
            "description": "Chilled still premium water",
            "ingredient": "Still water",
            "price": 3.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/still-water.jpg",
            "subcategoryId": 4,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },  
    
      //Limonadlar və Soyuq Çaylar
      {
        "id": 6,
        "name": "Limonadlar və Soyuq Çaylar",
        "isDropbox": false,
        "query": "limonadlar-soyuq-caylar",
        "categoryId": 6,
        "menuItems": [
          {
            "id": 1,
            "name": "Mango-Maracuja",
            "description": "Tropical fruits, lemon and sparkling water",
            "ingredient": "Tropical fruits, lemon, sparkling water",
            "price": 7.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/mango-maracuja.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Litchi Lemonade",
            "description": "Refreshing lemonade with litchi",
            "ingredient": "Litchi, lemon, sparkling water",
            "price": 7.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/litchi-lemonade.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Basil Lemonade",
            "description": "Fresh lemonade with basil leaves",
            "ingredient": "Basil, lemon, sparkling water",
            "price": 7.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/basil-lemonade.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Tonic Mojito",
            "description": "Mojito with mint, tonic and Maxito syrup",
            "ingredient": "Mint, lemon, tonic, Maxito syrup",
            "price": 10.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/tonic-mojito.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Mint-Grenadine",
            "description": "Refreshing mint and grenadine with sparkling water",
            "ingredient": "Mint, pomegranate, sparkling water",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/mint-grenadine.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Peach Iced Tea",
            "description": "Iced tea with peach and lemon",
            "ingredient": "Peach, lemon fresh, tea",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/peach-iced-tea.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Green Apple Iced Tea",
            "description": "Iced tea with green apple and lemon",
            "ingredient": "Green apple, lemon fresh, tea",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/green-apple-iced-tea.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Mango Iced Tea",
            "description": "Iced tea with mango and lemon",
            "ingredient": "Mango, lemon fresh, tea",
            "price": 7.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/mango-iced-tea.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },
      //Şərq və Bitki Çayları
      {
        "id": 7,
        "name": "Şərq və Bitki Çayları",
        "isDropbox": false,
        "query": "serq-bitki-caylari",
        "categoryId": 7,
        "menuItems": [
          {
            "id": 1,
            "name": "Jasmine Green Tea",
            "description": "Aromatic jasmine green tea",
            "ingredient": "Jasmine green tea",
            "price": [5.00, 9.50],
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/jasmine-green-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Ginger Tea",
            "description": "Hot tea with ginger",
            "ingredient": "Ginger, tea",
            "price": 4.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/ginger-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Masala Chai Tea",
            "description": "Spiced tea with milk and aromatic spices",
            "ingredient": "Tea, milk, cinnamon, cardamom, ginger, cloves",
            "price": 11.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/masala-chai-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Rose Tea",
            "description": "Rose petals tea with rose aroma",
            "ingredient": "Rose petals, rose aroma",
            "price": 5.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/rose-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "National Tea",
            "description": "Traditional black tea with herbs",
            "ingredient": "Black tea, thyme, clove",
            "price": 8.50,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/national-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Tropical Fruit Tea",
            "description": "Black tea with fruit slices and tropical aroma",
            "ingredient": "Black tea, fruit slices, natural fruit aroma",
            "price": 9.00,
            "isCold": true,
            "cardType": "sticky",
            "imageUrl": "/images/tropical-fruit-tea.jpg",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },

    ],
    createdAt: "2024-03-20T10:00:00Z",
    updatedAt: "2024-03-20T10:00:00Z"
  },
  {
    "id": 2,
    "name": "Desserts",
    "query": "desserts",
    "subcategories": [
      {
        "id": 5,
        "name": "Desserts",
        "isDropbox": false,
        "query": "desserts",
        "categoryId": 2,
        "menuItems": [
          {
            "id": 21,
            "name": "Pistachio Crepe",
            "description": "Thin crepe filled with pistachio cream",
            "ingredient": "Flour, milk, eggs, pistachio cream",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/pistachio-crepe.jpg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 22,
            "name": "Classic San Sebastian",
            "description": "Traditional San Sebastian cheesecake",
            "ingredient": "Cream cheese, eggs, sugar",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/san-sebastian.jpg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 23,
            "name": "Dubai Cheesecake",
            "description": "Rich cheesecake with Middle Eastern flavors",
            "ingredient": "Cream cheese, dates, pistachio",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/dubai-cheesecake.jpg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 24,
            "name": "Mochi",
            "description": "Japanese rice cake with sweet filling",
            "ingredient": "Glutinous rice flour, sugar, filling",
            "price": 3.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mochi.jpg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      }
    ],
    "createdAt": "2025-08-29T10:00:00Z",
    "updatedAt": "2025-08-29T10:00:00Z"
  },  
  {
    id: 2,
    name: "Additional",
    query: "Additional",
    subcategories: [
      {
        "id": 6,
        "name": "Əlavələr",
        "isDropbox": false,
        "query": "elaveler",
        "categoryId": 2,
        "menuItems": [
          {
            "id": 21,
            "name": "Alternativ Süd 50 ml",
            "description": "Alternative milk portion 50 ml",
            "ingredient": "Alternative milk",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/alt-milk-50.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 22,
            "name": "Alternativ Süd 200 ml",
            "description": "Alternative milk portion 200 ml",
            "ingredient": "Alternative milk",
            "price": 3.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/alt-milk-200.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 23,
            "name": "Qaymaq",
            "description": "Fresh cream",
            "ingredient": "Cream",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/cream.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 24,
            "name": "Espresso",
            "description": "Extra espresso shot",
            "ingredient": "Espresso",
            "price": 2.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/espresso-shot.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 25,
            "name": "Lemon Fresh",
            "description": "Fresh lemon juice",
            "ingredient": "Lemon",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/lemon-fresh.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 26,
            "name": "Bal",
            "description": "Natural honey",
            "ingredient": "Honey",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/honey.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 27,
            "name": "Sirop",
            "description": "Flavored syrup addition",
            "ingredient": "Syrup",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/syrup.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 28,
            "name": "Süd 50 ml",
            "description": "Regular milk portion 50 ml",
            "ingredient": "Milk",
            "price": 0.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/milk-50.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 29,
            "name": "Süd 200 ml",
            "description": "Regular milk portion 200 ml",
            "ingredient": "Milk",
            "price": 2.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/milk-200.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 30,
            "name": "Marshmellow",
            "description": "Soft marshmallow topping",
            "ingredient": "Marshmallow",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/marshmallow.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 31,
            "name": "Whipped Cream",
            "description": "Fresh whipped cream topping",
            "ingredient": "Whipped cream",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/whipped-cream.jpg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
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