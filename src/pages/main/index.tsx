import { useEffect } from "react";
import { TabSwitch, Category, CoffeeTypes } from "@/features";
import useMenuStore from "@/shared/store/menuStore";
import Items from "@/features/items";
import Season from "@/features/season";
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
            <Items />
            <Season />
          </CoffeeTypes>
        </Category>
      </TabSwitch>
    </div>
  );
};

export default MainPage;
