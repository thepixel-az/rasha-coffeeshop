import { useCurrentCategoryStore } from "@/shared/store";
import { FC, useEffect, useState } from "react";
import "./Items.css";
import "./Normal.css";
import { useSearchParams } from "react-router-dom";
import { Price } from "@/shared/ui";
import useMenuStore from "@/shared/store/menuStore";

type ItemsType = {
  imageUrl: string;
  name: string;
  price: number | [number, number];
  description: string;
  id: number;
  ingredient: string;
  isCold: boolean;
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/ç/g, "c")
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const resolveFolderByQuery = (query?: string) => {
  switch (query) {
    case "avropa-uslubunu":
      return "Coffee";
    case "xususi-avropa":
    case "brand-bar":
    case "diger-ickiler":
    case "limonadlar-soyuq-caylar":
      return "Specialty Drinks";
    case "matcha":
      return "Matcha";
    case "milkshake":
      return "Milkshakes";
    case "serq-bitki-caylari":
      return "Tea";
    case "maindishes":
      return "Food";
    case "desserts":
      return "Desserts";
    default:
      return "Coffee";
  }
};

const useImageResolver = () => {
  const { categories } = useMenuStore();
  const [searchParams] = useSearchParams();
  const tab = searchParams.get("tab");
  const category = searchParams.get("category");
  const sub = categories.find((c) => c.query === tab)?.subcategories.find((s) => s.query === category);
  const folder = resolveFolderByQuery(sub?.query);

  return (item: ItemsType) => {
    if (item.imageUrl && !item.imageUrl.startsWith("/COFFEE-FOR-MVP-WITHOUT-BACKGROUND")) {
      return item.imageUrl;
    }
    const fileBase = slugify(item.name);
    return `/images/Rasha Wolt Çəkiliş/${folder}/${fileBase}.png`;
  };
};

const NormalItem: FC<ItemsType> = ({
  name,
  price,
  ingredient,
  imageUrl,
}) => {
  const resolveImage = useImageResolver();
  return (
    <div className="normal__item__container">
      <div className="normal__item">
        <img className="normal__item__image" src={resolveImage({
          name,
          price,
          ingredient,
          imageUrl,
          id: 0,
          isCold: false,
          subcategoryId: 0,
          createdAt: "",
          updatedAt: "",
          description: "",
        })} alt={name} />
        <div className="sticky-item__info">
          <div className="sticky-item__info__name">
            <h3>{name}</h3>
            <p className="sticky-item__ingridients">
              <b>Tərkib:</b> {ingredient}
            </p>
          </div>
          <Price price={price} theme="dark" />
        </div>
      </div>
    </div>
  );
};

const StickyItem: FC<ItemsType> = ({
  name,
  price,
  ingredient,
  imageUrl,
}) => {
  const resolveImage = useImageResolver();
  return (
    <div className="sticky-item-container">
      <div className="sticky-item">
        <img className="sticky-item__image" src={resolveImage({
          name,
          price,
          ingredient,
          imageUrl,
          id: 0,
          isCold: false,
          subcategoryId: 0,
          createdAt: "",
          updatedAt: "",
          description: "",
        })} alt={name} />
        <div className="sticky-item__info">
          <div className="sticky-item__info__name">
            <h3>{name}</h3>
            <p>
              <b>Tərkib:</b> {ingredient}
            </p>
          </div>
          <div className="sticky-item__info__price">
            <img className="sticky-item__info__price__icon" src="/icons/price-icon.svg" alt="price-icon" />
            <Price price={price} theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Items = () => {
  const { currentItems } = useCurrentCategoryStore();
  const [searchParams] = useSearchParams();
  const { categories } = useMenuStore();
  const [filteredItems, setFilteredItems] = useState(currentItems);

  useEffect(() => {
    const coffeeType = searchParams.get("coffeetype");
    const tab = searchParams.get("tab");
    const category = searchParams.get("category");
    // Decide filtering only when subcategory has dropdown (variants)
    const isDropbox = categories
      .find((cat) => cat.query === tab)
      ?.subcategories.find((sub) => sub.query === category)?.isDropbox;

    if (isDropbox) {
      if (coffeeType === "icecoffee") {
        setFilteredItems(currentItems.filter(item => item.isCold));
      } else if (coffeeType === "hotcoffee") {
        setFilteredItems(currentItems.filter(item => !item.isCold));
      } else {
        setFilteredItems(currentItems);
      }
    } else {
      // Non-dropdown categories should show all variants
      setFilteredItems(currentItems);
    }
  }, [currentItems, searchParams, categories]);

  return (
    <div className="items-container">
      {filteredItems.map((item) => (
        item.cardType === "sticky" ? <StickyItem key={item.id} {...item} /> : <NormalItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
