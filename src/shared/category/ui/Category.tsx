import React, { ReactNode, useEffect, useState } from "react";
import Button from "../../button/ui/Button";
import "./Category.css";
import { useSearchParams } from "react-router-dom";

const CategoryLinks = {
  "drinks": [
    { name: "Espresso bar", query: "expressobar", isList: true },
    { name: "Tea bar", query: "teabar" },
    { name: "Xüsusi içkilər", query: "specialdrinks" },
    { name: "Yaxın şərq", query: "themiddleeast" },
    { name: "Uzaq şərq", query: "faqeast" },
    { name: "Extra menu", query: "exstramenu" },
  ],
  "foods": [
    { name: "Salat", query: "salads" },
    { name: "Sendviç", query: "sandwiches" },
    { name: "Desert", query: "desserts" },
  ]
}

type CategoryType = {
  children: ReactNode;
}

type ParamsType = {
  tab?: string;
  category?: string;
}

const Category = ({ children }: CategoryType) => {
  const [getParams, setParams] = useState<ParamsType>();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab") || "drinks";
    const category = searchParams.get("category");
    setParams({ tab, category: category || undefined });
  }, [searchParams]);

  const handleTabClick = (category: string) => {
    const currentParams = Object.fromEntries(searchParams.entries());
    setSearchParams({ ...currentParams, category });
  };

  return (
    <div className="category">
      <div className="category__buttons">
        {CategoryLinks[getParams?.tab || "drinks"].map((link, index) => (
          <Button key={index} isList={link.isList} onClick={() => handleTabClick(link.query)} isActive={getParams?.category === link.query}>
            {link.name}
          </Button>
        ))}
      </div>
      <div>
        {children}
      </div>
    </div>
  );
}

export default Category;