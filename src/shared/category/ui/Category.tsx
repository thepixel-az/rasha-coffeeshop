import React, { ReactNode } from "react";
import Button from "../../button/ui/Button";
import styles from "./Category.module.css";

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
    { name: "Salads", query: "salads" },
    { name: "Sandwiches", query: "sandwiches" },
    { name: "Desserts", query: "desserts" },
    { name: "Breakfast", query: "breakfast" },
    { name: "Snacks", query: "snacks" },
  ]
}

type CategoryType = {
  children: ReactNode;
  params: {
    tab?: "drinks" | "foods";
  };
}

const Category = ({ children, params }: CategoryType) => {
  const { tab } = params;
  return (
    <div className={styles.category}>
      <div className={styles.category__buttons}>
        {CategoryLinks[tab || "drinks"].map((link, index) => (
          <Button key={index} isList={link.isList}>
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