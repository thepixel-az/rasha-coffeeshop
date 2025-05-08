import React, { Children, FC, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./TabSwitch.css";

type TabSwitchProps = {
  children: React.ReactNode;
}

type TabButtonProps = TabSwitchProps & {
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const Button: FC<TabButtonProps> = ({ children, active, className, onClick }) => {
  return <button className={`${active ? "active" : ""} ${className ? className : ""}`} onClick={onClick}>{children}</button>;

}

const TabSwitch: FC<TabSwitchProps> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("drinks");

  useEffect(() => {
    const tab = searchParams.get("tab") || "drinks";
    setActiveTab(tab);
  }, [searchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div>
      <div className="tab_switch__container">
        <div className="tab_switch">
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
      </div>
      {children}
    </div>
  );
};

export default TabSwitch;
