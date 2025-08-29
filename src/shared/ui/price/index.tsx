import { FC } from "react";
import "./Price.css";
import { ManatsIcon } from "@/shared/components/icons";

interface PriceProps {
  price: number | [number, number];
  theme: "dark" | "light";
}

const Price: FC<PriceProps> = ({ price, theme }) => {
  const iconColor = theme === "light" ? "#ffffff" : "#414141";
  const isRange = Array.isArray(price);
  const prices = isRange ? price : [price];

  return (
    <div className={`price__container`}>
      <div className={`price__text ${theme}__price__container`}>
        {prices.map((p, idx) => (
          <span className="price__item" key={idx}>
            <span>{p}</span>
            <ManatsIcon color={iconColor} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Price;