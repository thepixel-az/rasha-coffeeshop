import { FC, ReactNode, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "./TabSwitch.css";
import useMenuStore from "@/shared/store/menuStore";

type TabSwitchProps = {
  children: ReactNode;
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
  const { categories } = useMenuStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab);
    } else if (categories.length > 0) {
      const defaultTab = categories[0].query;
      setActiveTab(defaultTab);
      setSearchParams({ tab: defaultTab });
    }
  }, [searchParams, categories, setSearchParams]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setSearchParams({ tab });
  };

  return (
    <div>
      <div className="tab_switch__container">
        <div className="tab_switch">
          {categories.map((category) => (
            <Button
              key={category.id}
              active={activeTab === category.query}
              onClick={() => handleTabClick(category.query)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
};

export default TabSwitch;
