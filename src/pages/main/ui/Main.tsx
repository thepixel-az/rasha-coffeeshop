import React, { useEffect } from "react";
import TabSwitch from "../../../shared/tapswitch/ui/TabSwitch";
import Category from "../../../shared/category/ui/Category";
import CoffeeTypes from "../../../shared/coffeestypes/ui/CoffeeTypes";
import { useMenuStore } from "../../../shared/store/menuStore";

const MainPage = () => {
  const { categories, isLoading, error, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  if (isLoading) {
    return <div>Loading menu...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!Array.isArray(categories)) {
    return <div>No menu data available</div>;
  }

  if (categories.length === 0) {
    return <div>No menu items found</div>;
  }
  return (
    <div className="main-page">
      <TabSwitch>
        <Category>
          <CoffeeTypes>
            <div className="content">
              {categories[0].items.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
          </CoffeeTypes>
        </Category>
      </TabSwitch>
    </div>
  );
};

export default MainPage;
