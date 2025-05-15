import { FC } from "react";
import "./Price.css";
import { ManatsIcon } from "@/shared/components/icons";

interface PriceProps {
  price: number;
  theme: "dark" | "light";
}

const Price: FC<PriceProps> = ({ price, theme }) => {
  console.log(theme);
  return (
    <div className={`price__container`}>
      <div className={`price__text ${theme}__price__container`}>
        <p>{price}</p>
        <div>
          <ManatsIcon color={theme==="light" ? "#ffffff" : "#414141"}/>
        </div>
      </div>
    </div>
  );
};

export default Price;