import React, { Children, FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./TabSwitch.module.css";

type TabSwitchProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const TabSwitch: FC<TabSwitchProps> = ({ children, ...props }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("drinks");

  // Set the active tab based on the query parameter
  useEffect(() => {
    const tab = searchParams.get("tab") || "drinks";
    setActiveTab(tab);
  }, [searchParams]);

  // Handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div {...props}>
      <div className={styles.tabSwitch}>
        <button
          className={activeTab === "drinks" ? styles.active : ""}
          onClick={() => handleTabClick("drinks")}
        >
          Drinks
        </button>
        <button
          className={activeTab === "food" ? styles.active : ""}
          onClick={() => handleTabClick("food")}
        >
          Food
        </button>
      </div>
      {children}
    </div>
  );
};

export default TabSwitch;
