import React, { FC, ReactNode, useEffect, useState } from "react";
import "./CoffeeTypes.css";
import { useSearchParams } from "react-router-dom";

type CoffeeTypesProps = {
  children?: ReactNode;
}

type CoffeeTypeProps = CoffeeTypesProps & {
  img: string;
  isActive?: boolean;
  onClick?: () => void;
}

type ParamsType = {
  category?: string;
  coffeetype?: string;
}

const CoffeeTypesList = [
  {
    name: "Hot Coffee",
    query: "hotcoffee",
    img: "/images/hot-coffee.png",
  },
  {
    name: "Ice Coffee",
    query: "icecoffee",
    img: "/images/ice-coffee.png",
  }
]

const CoffeeType: FC<CoffeeTypeProps> = ({children, img, isActive, onClick}) => {
  return (
    <button className={`${isActive ? "coffee__type__active" : ""} coffee__type__button`} onClick={onClick}>
      <img src={img} alt={children as string} />
      <span>{children}</span>
    </button>
  )
}

const CoffeeTypes: FC<CoffeeTypesProps> = ({children}) => {

  const [getParams, setParams] = useState<ParamsType>();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const coffeetype = searchParams.get("coffeetype") || "hotcoffee";
    const category = searchParams.get("category");
    setParams({ coffeetype, category: category || undefined });
  }, [searchParams]);

  const handleTabClick = (coffeetype: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, coffeetype });
  };

  return (
    <div>
      <div className="coffee__types">
        {CoffeeTypesList.map((coffeeType, index) => (
          <CoffeeType key={index} img={coffeeType.img} onClick={() => handleTabClick(coffeeType.query)} isActive={getParams?.coffeetype === coffeeType.query}>
            {coffeeType.name}
          </CoffeeType>
        ))}
      </div>
      {children}
    </div>
  );
}

export default CoffeeTypes;