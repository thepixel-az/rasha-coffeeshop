/// <reference types="vite/client" />

import { create } from 'zustand';

export interface MenuItem {
  name: string;
  description: string;
  ingredient: string;
  price: number | [number, number];
  isCold: boolean;
  imageUrl: string;
  id: number;
  cardType: "normal" | "sticky";
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
    name: "İçkilər",
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
            "description": "Güclü və qatı qəhvə",
            "ingredient": "İkiqat espresso, qaynar su",
            "price": 3.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "images/rasha-wolt/coffee/Double_Espresso.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-20T10:00:00Z",
            "updatedAt": "2024-03-20T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Amerikano ",
            "description": "Qaynar su ilə espresso, 10 fındıqla (10 q)",
            "ingredient": "İkiqat espresso, qaynar su, fındıq",
            "price": 4.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Americano_Hot.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-20T10:00:00Z",
            "updatedAt": "2024-03-20T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Ice Amerikano",
            "description": "Su və buzla soyudulmuş espresso",
            "ingredient": "İkiqat espresso, soyuq su, buz",
            "price": 4.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Americano_Iced.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Kapuçino ",
            "description": "Buxarlanmış süd və azca darçınla kremli qəhvə",
            "ingredient": "İkiqat espresso, 250 ml buxarlanmış süd, darçın tozu",
            "price": 5.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Cappuccino_Hot.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Ice Kapuçino",
            "description": "Süd və darçınla soyudulmuş kremli qəhvə",
            "ingredient": "İkiqat espresso, soyuq süd, darçın tozu, buz",
            "price": 5.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Cappuccino_ice.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Latte ",
            "description": "Espresso və südün hamar qarışığı",
            "ingredient": "İkiqat espresso, 250 ml buxarlanmış süd",
            "price": 5.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Latte_Hot.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Ice Latte ",
            "description": "Espresso, süd və buzla soyuq içki",
            "ingredient": "İkiqat espresso, soyuq süd, buz",
            "price": 5.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Latte_ice.avif",
            "subcategoryId": 1,
            "createdAt": "2024-03-21T10:00:00Z",
            "updatedAt": "2024-03-21T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Flet Vayt",
            "description": "Espresso və buxarlanmış südün yumşaq qarışığı",
            "ingredient": "İkiqat espresso, 120 ml buxarlanmış süd",
            "price": 4.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Flat_White.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 9,
            "name": "Kortado",
            "description": "Bir az süd ilə zəngin espresso",
            "ingredient": "İkiqat espresso, 60 ml buxarlanmış süd",
            "price": 4.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Flat_White.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 10,
            "name": "Latte Makkiato",
            "description": "Köpüklü südün üzərinə əlavə olunmuş espresso",
            "ingredient": "İkiqat espresso, 200 ml köpüklü süd",
            "price": 5.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Latte_Macchiato.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-04-01T10:00:00Z",
            "updatedAt": "2024-04-01T10:00:00Z"
          },
          {
            "id": 11,
            "name": "Raf ",
            "description": "Süd və qaymaqla xüsusi kremli qəhvə",
            "ingredient": "İkiqat espresso, 180 ml süd, 70 ml qaymaq",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Raf_Hot.JPG",
            "subcategoryId": 1,
            "createdAt": "2024-04-02T10:00:00Z",
            "updatedAt": "2024-04-02T10:00:00Z"
          },
          {
            "id": 12,
            "name": "Ice Raf ",
            "description": "Süd və qaymaqla soyuq kremli qəhvə",
            "ingredient": "İkiqat espresso, soyuq süd, qaymaq, buz",
            "price": 6.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/raff_ice.avif",
            "subcategoryId": 1,
            "createdAt": "2024-04-02T10:00:00Z",
            "updatedAt": "2024-04-02T10:00:00Z"
          },
          {
            "id": 13,
            "name": "Amerikano Tonik",
            "description": "Toniklə təravətləndirici espresso",
            "ingredient": "İkiqat espresso, Schweppes tonik",
            "price": 5.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Tonic_Americano.JPG",
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
            "description": "Fındıq kremi və fındıq ətri ilə latte",
            "ingredient": "İkiqat espresso, qozlu krem, fındıq aroması",
            "price": 11.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Nutty_Latte.JPG",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Spanish Latte",
            "description": "Qatılaşdırılmış süd ilə latte",
            "ingredient": "İkiqat espresso, süd, qatılaşdırılmış süd",
            "price": 9.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Spanish_Latte_Hot.JPG",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "ice Spanish Latte",
            "description": "Qatılaşdırılmış süd ilə buzlu latte",
            "ingredient": "İkiqat espresso, soyuq süd, qatılaşdırılmış süd, buz",
            "price": 9.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/İce_Spanish_Latte.avif",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Mocha",
            "description": "Tünd şokolad və darçınla isti mokka",
            "ingredient": "İkiqat espresso, süd, tünd şokolad, darçın",
            "price": 9.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/Mocha_Hot.JPG",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Ice Mocha",
            "description": "Tünd şokolad və darçınla buzlu mokka",
            "ingredient": "İkiqat espresso, soyuq süd, tünd şokolad, darçın, buz",
            "price": 9.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/İce_Mocha.avif",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Honey Latte",
            "description": "Bal ilə şirinləşdirilmiş isti latte",
            "ingredient": "İkiqat espresso, süd, bal",
            "price": 8.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/honey_latte.avif",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Şokolad",
            "description": "İsti, zəngin şokoladlı qəhvə",
            "ingredient": "İkiqat espresso, şokolad",
            "price": 7.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/chocholate_hot.avif",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 8,
            "name": "ice Şokolad",
            "description": "Buzlu şokoladlı qəhvə",
            "ingredient": "İkiqat espresso, şokolad, buz",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/İce_Chocolate.avif",
            "subcategoryId": 2,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
          ,
          {
            "id": 9,
            "name": "ice Honey Latte",
            "description": "Buzlu ballı latte",
            "ingredient": "Double Espresso, Süd, Bal",
            "price": 8.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/coffee/ice_honey_latte.avif",
            "subcategoryId": 2,
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
            "name": "Matcha Qızılgül",
            "description": "Qızılgül suyu, ağ şokolad və süd ilə isti matcha",
            "ingredient": "Matcha, qızılgül suyu, ağ şokolad, süd",
            "price": 7.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Matcha_Rose_Hot.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Klassik Matcha",
            "description": "Süd ilə isti matcha",
            "ingredient": "Matcha, süd",
            "price": 6.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Matcha_Hot.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "İce Matcha",
            "description": "Süd və buzla buzlu matcha",
            "ingredient": "Matcha, soyuq süd, buz",
            "price": 6.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/macha_iced_sade.jpeg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Nar Matcha",
            "description": "Süd, nar və ağ şokoladla isti matcha",
            "ingredient": "Matcha tozu, süd, nar, ağ şokolad",
            "price": 7.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Matcha_Pomegranate.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Matcha Tonik",
            "description": "Qazlı su ilə təravətləndirici tonik matcha",
            "ingredient": "Tonik matcha, qazlı su",
            "price": 7.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Matcha_Tonic.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Vanilli Matcha Latte",
            "description": "Vanil və süd ilə isti matcha latte",
            "ingredient": "Matcha, vanil, süd",
            "price": 7.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Vanil_Matcha_Latte.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Qara Matcha",
            "description": "Espresso və süd ilə güclü isti matcha",
            "ingredient": "Matcha, süd, ikiqat espresso",
            "price": 7.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/Black_Matcha_Hot.jpg",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Rasha Garden",
            "description": "Süd ilə isti püstəli matcha",
            "ingredient": "Püstəli matcha, süd",
            "price": 7.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/matcha/RashaGardenMacha.avif",
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
        "name": "Milkşeyk",
        "isDropbox": false,
        "query": "milkshake",
        "categoryId": 3,
        "menuItems": [
          {
            "id": 1,
            "name": "Milkşeyk Çiyələk",
            "description": "Təzə çiyələk ilə hazırlanmış sərin milkşeyk",
            "ingredient": "Süd, çiyələk",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/milkshakes/Milkshake_Çiyələk.avif",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Milkşeyk Banan",
            "description": "Doğranmış banan və süd ilə kremli milkşeyk",
            "ingredient": "Süd, banan",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/milkshakes/Milkshake_Banan.avif",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Milkşeyk Vanil",
            "description": "Vanil dadı ilə hazırlanmış klassik sərin milkşeyk",
            "ingredient": "Süd, vanil",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/milkshakes/Milkshake_Vanil.avif",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Milkşeyk Şokolad",
            "description": "Şirin şokolad sousu ilə zəngin dadlı milkşeyk",
            "ingredient": "Süd, şokolad",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/milkshakes/MilkshakeŞokolad.avif",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Milkşeyk Giləmeyvə",
            "description": "Təzə giləmeyvə qarışığı ilə hazırlanmış sərin milkşeyk",
            "ingredient": "Süd, giləmeyvə",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/milkshakes/MilkshakeGiləmeyvə.avif",
            "subcategoryId": 3,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },

      //Digər İçkilər
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
            "description": "Soyudulmuş enerji içkisi",
            "ingredient": "Enerji içkisi",
            "price": 5.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/redbull.avif",
            "subcategoryId": 4,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Qazlı Premium Su",
            "description": "Soyuq qazlı premium su",
            "ingredient": "Qazlı su",
            "price": 3.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 4,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Qazsız Premium Su",
            "description": "Soyuq qazsız premium su",
            "ingredient": "Qazsız su",
            "price": 3.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
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
            "name": "Mango-Maracua",
            "description": "Təzə mango və marakuja dadlı limonad",
            "ingredient": "Mango, Marakuja, Soda",
            "price": 7.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/Mango_Maracua.avif",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Litchi",
            "description": "Şirin və ekzotik litchi dadlı limonad",
            "ingredient": "Litchi, Limon, Soda",
            "price": 7.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/Litchi.avif",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Basil Lemonade",
            "description": "Fesleğenli və təzə limonad",
            "ingredient": "Fesleğen, Limon, Soda",
            "price": 7.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/BasilLemonade.jpeg",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 4,
            "name": "Tonic Mojito",
            "description": "Təzələyici tonik və nanəli mojito",
            "ingredient": "Tonik, Nanə, Limon",
            "price": 10.00,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/Mojito_Tonic.JPG",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 5,
            "name": "Mint-Grenadine",
            "description": "Nanəli və şirin qrenadinli içki",
            "ingredient": "Nanə, Qrenadin, Soda",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/Mint-Grenadine.avif",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 6,
            "name": "Peach iced Tea",
            "description": "Şaftalı dadlı soyuq çay",
            "ingredient": "Qara çay, Şaftalı şirəsi, Buz",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/PeachİcedTea.avif",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 7,
            "name": "Green Apple iced Tea",
            "description": "Yaşıl almadan hazırlanmış soyuq çay",
            "ingredient": "Qara çay, Yaşıl alma şirəsi, Buz",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/GreenAppleİcedTea.avif",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 8,
            "name": "Mango iced Tea",
            "description": "Mango dadlı soyuq çay",
            "ingredient": "Qara çay, Mango şirəsi, Buz",
            "price": 7.50,
            "isCold": true,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/specialty-drinks/Mango_Maracua.avif",
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
            "name": "Yasəmən Yaşıl Çay",
            "description": "Yasəmən ləçəkləri ilə dəmlənmiş ətirli yaşıl çay",
            "ingredient": "Yaşıl çay, yasəmən ləçəkləri",
            "price": 5.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/tea/Jasmin_Green_Tea.JPG",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 2,
            "name": "Qızılgül Çayı",
            "description": "Qızılgül ləçəkləri ilə dəmlənmiş ətirli çay",
            "ingredient": "Qızılgül ləçəkləri, qızılgül suyu, çay",
            "price": 5.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/tea/Rose_Tea.JPG",
            "subcategoryId": 7,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 3,
            "name": "Zəncəfil Çayı",
            "description": "Təzə zəncəfil ilə hazırlanmış isti çay",
            "ingredient": "Zəncəfil, çay",
            "price": 4.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/tea/Ginger_Tea.JPG",
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
    "name": "Desertlər və Sendviçlər",
    "query": "desserts",
    "subcategories": [
      {
        "id": 5,
        "name": "Desertlər",
        "isDropbox": false,
        "query": "desserts",
        "categoryId": 2,
        "menuItems": [
          {
            "id": 21,
            "name": "Püstəli Krep",
            "description": "Püstə kremi ilə nazik krep",
            "ingredient": "Un, süd, yumurta, püstə kremi",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/desserts/Lotus_Cheesecake.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 22,
            "name": "Klassik San Sebastian",
            "description": "Ənənəvi San Sebastian piroqu",
            "ingredient": "Krem pendir, yumurta, şəkər",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/desserts/San_Sebastian.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 23,
            "name": "Dubay Çizkeyki",
            "description": "Yaxın Şərq notları olan zəngin çizkeyk",
            "ingredient": "Krem pendir, xurma, püstə",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/desserts/Dubai_Cheesecake.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 24,
            "name": "Moçi",
            "description": "Şirin içlikli yapon düyü keks",
            "ingredient": "Yapışqan düyü unu, şəkər, içlik",
            "price": 3.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/rasha-wolt/desserts/Mochi.JPG",
            "subcategoryId": 5,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          }
        ],
        "createdAt": "2025-08-29T10:00:00Z",
        "updatedAt": "2025-08-29T10:00:00Z"
      },
      {
        "id": 5,
        "name": "Sendviçlər",
        "isDropbox": false,
        "query": "Sendviçlər",
        "categoryId": 3,
        "menuItems": [
          {
            "id": 23,
            "name": "Hindi Sendviç",
            "description": "Təzə tərəvəzlər və pendirlə hazırlanmış hinduşka sendviç",
            "ingredient": "Hinduşka, Xiyar, Pomidor, Holland Pendir, Mayonez",
            "price": 6.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/sandwich.avif",
            "subcategoryId": 8,
            "createdAt": "2025-09-15T10:00:00Z",
            "updatedAt": "2025-09-15T10:00:00Z"
          }
          ,
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
    name: "Əlavələr",
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
            "description": "50 ml alternativ süd porsiyası",
            "ingredient": "Alternativ süd",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 22,
            "name": "Alternativ Süd 200 ml",
            "description": "200 ml alternativ süd porsiyası",
            "ingredient": "Alternativ süd",
            "price": 3.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 23,
            "name": "Qaymaq",
            "description": "Təzə qaymaq",
            "ingredient": "Qaymaq",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 24,
            "name": "Espresso",
            "description": "Əlavə espresso şotu",
            "ingredient": "Espresso",
            "price": 2.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 25,
            "name": "Limon Şirəsi (Fresh)",
            "description": "Təzə limon şirəsi",
            "ingredient": "Limon",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 26,
            "name": "Bal",
            "description": "Təbii bal",
            "ingredient": "Bal",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 27,
            "name": "Sirop",
            "description": "Əlavə dadlandırıcı sirop",
            "ingredient": "Sirop",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 28,
            "name": "Süd 50 ml",
            "description": "50 ml adi süd porsiyası",
            "ingredient": "Süd",
            "price": 0.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 29,
            "name": "Süd 200 ml",
            "description": "200 ml adi süd porsiyası",
            "ingredient": "Süd",
            "price": 2.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 30,
            "name": "Marşmellou",
            "description": "Yumşaq marşmellou əlavə",
            "ingredient": "Marşmellou",
            "price": 1.00,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
            "subcategoryId": 6,
            "createdAt": "2025-08-29T10:00:00Z",
            "updatedAt": "2025-08-29T10:00:00Z"
          },
          {
            "id": 31,
            "name": "Çırpılmış Qaymaq",
            "description": "Təzə çırpılmış qaymaq",
            "ingredient": "Çırpılmış qaymaq",
            "price": 1.50,
            "isCold": false,
            "cardType": "normal",
            "imageUrl": "/images/mockimage.png",
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



// Note: API client omitted for now; using local testData. Enable when backend is ready.

const useMenuStore = create<MenuStore>((set, get) => ({
  categories: [],
  isLoading: false,
  error: null,

  fetchMenu: async () => {
    set({ isLoading: true, error: null });
    try {
      const CACHE_KEY = "menu_cache_v1";
      const TTL_MS = 1; // 1 hour
      const cached = localStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached) as { data: Category[]; ts: number };
        if (Date.now() - parsed.ts < TTL_MS) {
          set({ categories: parsed.data, isLoading: false });
          return;
        }
      }

      // const response = await api.get<Category[]>('/menu');
      const data = testData; // response.data
      set({ categories: data, isLoading: false });
      try {
        localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
      } catch {}
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