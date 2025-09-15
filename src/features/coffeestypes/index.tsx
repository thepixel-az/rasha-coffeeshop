import { FC, memo, ReactNode, useEffect, useState } from "react";
import "./CoffeeTypes.css";
import { useSearchParams } from "react-router-dom";
import useMenuStore from "@/shared/store/menuStore";
import useCurrentCategoryStore from "@/shared/store/currentCategoryStore";

type CoffeeTypesProps = {
  children?: ReactNode;
};

type CoffeeTypeProps = CoffeeTypesProps & {
  img: string;
  isActive?: boolean;
  isQulp?: boolean;
  onClick?: () => void;
};

type ParamsType = {
  category?: string;
  coffeetype?: string;
  tab?: string;
};

// List is derived dynamically from current subcategory to show proper names (e.g., Matcha)

const CoffeeType = memo(({
  children,
  img,
  isActive,
  isQulp,
  onClick,
}: CoffeeTypeProps) => {
  return (
    <button
      className={`${
        isActive ? "coffee__type__active" : ""
      } coffee__type__button`}
      onClick={onClick}
    >
      <img className={`${isQulp ? "coffee__type__button__qulp" : ""}`} src={img} alt={children as string} />
      <span>{children}</span>
    </button>
  );
});

const CoffeeTypes: FC<CoffeeTypesProps> = ({ children }) => {
  const { categories } = useMenuStore();
  const { setCurrentItems } = useCurrentCategoryStore();
  const [getParams, setParams] = useState<ParamsType>();
  const [isDropbox, setIsDropbox] = useState<boolean | undefined>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const coffeetype = searchParams.get("coffeetype");
    const tab = searchParams.get("tab");
    const category = searchParams.get("category");
    const inCategory = categories
      .find((cat) => cat.query === tab)
      ?.subcategories.find((sub) => sub.query === category);
    const isDropbox = inCategory?.isDropbox;
    setIsDropbox(isDropbox);
    setCurrentItems(inCategory?.menuItems || []);

    if (isDropbox) {
      if (!coffeetype) {
        const defaultType = "hotcoffee";
        setSearchParams(prev => {
          const params = Object.fromEntries(prev.entries());
          return { ...params, coffeetype: defaultType };
        });
        setParams({
          coffeetype: defaultType,
          tab: tab || undefined,
          category: category || undefined,
        });
      } else {
        setParams({
          coffeetype: coffeetype || undefined,
          tab: tab || undefined,
          category: category || undefined,
        });
      }
    }
  }, [searchParams, categories, setSearchParams]);

  const handleTabClick = (coffeetype: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, coffeetype });
  };

  return (
    <div>
      <div className="coffee__types__container">
        <div className="coffee__types">
          {isDropbox && (() => {
            const tab = searchParams.get("tab");
            const category = searchParams.get("category");
            const inCategory = categories
              .find((cat) => cat.query === tab)
              ?.subcategories.find((sub) => sub.query === category);
            const baseName = inCategory?.name || "Coffee";
            const items = [
              { name: `İsti ${baseName}`.replace(/\s+/g, " "), query: "hotcoffee", img: "/images/hot-coffee.png", isQulp: true },
              { name: `Soyuq ${baseName}`.replace(/\s+/g, " "), query: "icecoffee", img: "/images/ice-coffee.png" },
            ];
            return items.map((coffeeType, index) => (
              <CoffeeType
                key={index}
                img={coffeeType.img}
                onClick={() => handleTabClick(coffeeType.query)}
                isActive={getParams?.coffeetype === coffeeType.query}
                isQulp={coffeeType.isQulp}
              >
                {coffeeType.name}
              </CoffeeType>
            ));
          })()}
        </div>
      </div>
      {children}
    </div>
  );
};

export default CoffeeTypes;
