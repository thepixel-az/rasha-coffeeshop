import React from "react";
import TabSwitch from "../../../shared/tapswitch/ui/TabSwitch";

const MainPage = () => {
  return (
    <div>
      <TabSwitch>
        <div className="content">
          <h1>Welcome to the Main Page</h1>
          <p>This is the main content area.</p>
        </div>
      </TabSwitch>
    </div>
  );
};

export default MainPage;
