import { useEffect } from "react";
import { TabSwitch, Category, CoffeeTypes } from "@/features";
import useMenuStore from "@/shared/store/menuStore";
import Items from "@/features/items";
import { Skeleton } from "@/shared/ui";
import Season from "@/features/season";
const MainPage = () => {
  const { categories, isLoading, error, fetchMenu } = useMenuStore();

  useEffect(() => {
    fetchMenu();
  }, [fetchMenu]);

  if (isLoading) {
    return (
      <div className="main-page" style={{ padding: 16 }}>
        <Skeleton height={32} width={200} />
        <div style={{ display: "grid", gap: 12, marginTop: 16 }}>
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} style={{ display: "flex", gap: 12 }}>
              <Skeleton width={140} height={140} radius={16} />
              <div style={{ flex: 1 }}>
                <Skeleton height={20} width={180} />
                <Skeleton height={16} width={240} style={{ marginTop: 8 }} />
                <Skeleton height={20} width={80} style={{ marginTop: 12 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
