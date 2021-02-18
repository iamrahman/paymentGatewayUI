import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import { paymentOption } from "../../Constants";

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState("");
  return (
    <Layout
      heading={"Choose your Payment option"}
      backBtn={false}
      nextBtn={true}
    >
      <div className="flex items-center justify-center">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-3 gap-4 py-20">
          {paymentOption.map((key, index) => {
            return (
              <Option
                key={index}
                label={key.label}
                icon={key.icon}
                isActive={activeMode === key.label}
                onClick={() => setActiveMode(key.label)}
                classOverride="flex px-4"
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
