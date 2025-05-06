import React, { Children, FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./TabSwitch.module.css";

type TabSwitchProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type TabButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  active?: boolean;
}

const Button: FC<TabButtonProps> = ({ children, active, className, ...props }) => {
  return <button {...props} className={`${active ? styles.active : ""} ${className ? className : ""}`}>{children}</button>;

}

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
        <Button
          active={activeTab === "drinks"}
          onClick={() => handleTabClick("drinks")}
        >
          İçkilər
        </Button>
        <Button
          active={activeTab === "foods"}
          onClick={() => handleTabClick("foods")}
        >
          Yeməklər
        </Button>
      </div>
      {children}
    </div>
  );
};

export default TabSwitch;
