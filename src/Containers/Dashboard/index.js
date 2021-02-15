import React from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import { paymentOption } from "../../Constants";
const Dashboard = () => {
  return (
    <Layout heading={"Choose your Payment option"} backBtn={true}>
      {paymentOption.map((key, index) => {
        return (
          <div key={index} className="flex flex-row">
            <Option label={key.label} />
          </div>
        );
      })}
    </Layout>
  );
};

export default Dashboard;
