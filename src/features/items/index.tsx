import { useCurrentCategoryStore } from "@/shared/store";
import { FC, useEffect, useState } from "react";
import "./Items.css";
import "./Normal.css";
import { useSearchParams } from "react-router-dom";

type ItemsType = {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  id: number;
  ingredient: string;
  isCold: boolean;
  subcategoryId: number;
  createdAt: string;
  updatedAt: string;
};

const NormalItem: FC<ItemsType> = ({
  name,
  price,
  ingredient,
}) => {
  return (
    <div className="normal-item-container">
      <div className="normal-item">
        <img className="normal-item__image" src="/NORMAL-IMAGE-FOR-MVP.png" alt={name} />
        <div className="sticky-item__info">
          <div className="sticky-item__info__name">
            <h3>{name}</h3>
            <p className="sticky-item__ingridients">
              <b>Tərkib:</b> {ingredient}
            </p>
          </div>
          <div className="sticky-item__info__price__text">
              <p>{price}</p>
              <img className="sticky-item__info__price__text__icon" src="/icons/manats.svg" alt="price-icon" />
            </div>
        </div>
      </div>
    </div>
  );
};

const StickyItem: FC<ItemsType> = ({
  name,
  price,
  ingredient,
}) => {
  return (
    <div className="sticky-item-container">
      <div className="sticky-item">
        <img className="sticky-item__image" src="/COFFEE-FOR-MVP-WITHOUT-BACKGROUND.png" alt={name} />
        <div className="sticky-item__info">
          <div className="sticky-item__info__name">
            <h3>{name}</h3>
            <p>
              <b>Tərkib:</b> {ingredient}
            </p>
          </div>
          <div className="sticky-item__info__price">
            <img className="sticky-item__info__price__icon" src="/icons/price-icon.svg" alt="price-icon" />
            <div className="sticky-item__info__price__text">
              <p>{price}</p>
              <img className="sticky-item__info__price__text__icon" src="/icons/manats.svg" alt="price-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Items = () => {
  const { currentItems } = useCurrentCategoryStore();
  const [searchParams] = useSearchParams();
  const [filteredItems, setFilteredItems] = useState(currentItems);

  useEffect(() => {
    const coffeeType = searchParams.get("coffeetype");

    if (coffeeType === "icecoffee") {
      setFilteredItems(currentItems.filter(item => item.isCold));
    } else if (coffeeType === "hotcoffee") {
      setFilteredItems(currentItems.filter(item => !item.isCold));
    } else {
      setFilteredItems(currentItems);
    }
  }, [currentItems, searchParams]);

  return (
    <div className="items-container">
      {filteredItems.map((item) => (
        item.cardType === "sticky" ? <StickyItem key={item.id} {...item} /> : <NormalItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Items;
