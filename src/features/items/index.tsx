import { useCurrentCategoryStore } from "@/shared/store";
import { FC, useEffect, useRef, useState } from "react";
import "./Items.css";
import "./Normal.css";
import { useSearchParams } from "react-router-dom";
import { Price, Skeleton } from "@/shared/ui";
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

// Removed image path resolver; use item.imageUrl directly

type ImageWithSkeletonProps = { src: string; alt: string; className?: string; enableSkeleton?: boolean };

const ImageWithSkeleton: FC<ImageWithSkeletonProps> = ({ src, alt, className, enableSkeleton = true }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const fallback = "/NORMAL-IMAGE-FOR-MVP.png";

  // Handle instantly cached images
  // useEffect(() => {
  //   const imgEl = imgRef.current;
  //   if (imgEl && imgEl.complete) {
  //     // If the image is already in cache, mark as loaded immediately
  //     setLoaded(true);
  //   }
  // }, [imgRef, src]);

  if (!enableSkeleton) {
    return (
      <img
        key={src}
        ref={imgRef}
        src={`public/${src}`}
        loading="lazy"
        decoding="async"
        className={className}
        style={{ width: "100%", height: "auto", display: "block" }}
        alt={alt}
        onError={() => setError(true)}
        
      />
    );
  }

  return (
    <div style={{ position: "relative" }}>
      {!loaded && <Skeleton height={140} radius={16} />}
      <img
        key={src}
        ref={imgRef}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (!error) setError(true);
          setLoaded(true);
        }}
        style={{ display: loaded ? "block" : "none", width: "100%", height: "auto" }}
        className={className}
        src={error ? fallback : src}
        alt={alt}
      />
    </div>
  );
};

const NormalItem: FC<ItemsType & { enableSkeleton?: boolean }> = ({
  name,
  price,
  ingredient,
  imageUrl,
  enableSkeleton = true,
}) => {
  return (
    <div className="normal__item__container">
      <div className="normal__item">
        <ImageWithSkeleton enableSkeleton={enableSkeleton} className="normal__item__image" src={imageUrl} alt={name} />
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

const StickyItem: FC<ItemsType & { enableSkeleton?: boolean }> = ({
  name,
  price,
  ingredient,
  imageUrl,
  enableSkeleton = true,
}) => {
  return (
    <div className="sticky-item-container">
      <div className="sticky-item">
        <ImageWithSkeleton enableSkeleton={enableSkeleton} className="sticky-item__image" src={imageUrl} alt={name} />
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
  // Default: skeletons OFF unless explicitly enabled with ?skeleton=1
  const skeletonEnabled = searchParams.get("skeleton") === "1";

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
        item.cardType === "sticky"
          ? <StickyItem key={item.id} enableSkeleton={skeletonEnabled} {...item} />
          : <NormalItem key={item.id} enableSkeleton={skeletonEnabled} {...item} />
      ))}
    </div>
  );
};

export default Items;
