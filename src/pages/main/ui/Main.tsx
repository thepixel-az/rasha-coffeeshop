import React from "react";
import TabSwitch from "../../../shared/tapswitch/ui/TabSwitch";
import Category from "../../../shared/category/ui/Category";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get("tab");

  const tab = tabParam === "foods" || tabParam === "drinks" ? tabParam : "drinks";
  
  return (
    <div className="main-page">
      <TabSwitch>
        <Category params={{ tab }}>
          <div className="content">
            <h1>Welcome to the Main Page</h1>
            <p>This is the main content area.</p>
          </div>
        </Category>
      </TabSwitch>
    </div>
  );
};

export default MainPage;
