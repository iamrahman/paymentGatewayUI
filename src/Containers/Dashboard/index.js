import React from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import { paymentOption } from "../../Constants";
const Dashboard = () => {
  return (
    <Layout heading={"Choose your Payment option"} backBtn={true}>
      <div className="flex flex-row w-full m-8">
        <Option label={"Debit Card"} classOverride="w-1/3"/>
        <Option label={"Debit Card"} classOverride="w-1/3"/>
        <Option label={"Debit Card"} classOverride="w-1/3"/>
      </div>
      <div className="flex flex-row w-full m-8">
        <Option label={"Debit Card"} classOverride="w-1/3"/>
        <Option label={"Debit Card"} classOverride="w-1/3"/>
        <Option label={"Debit Card"} classOverride="w-1/3"/>
      </div>
    </Layout>
  );
};

export default Dashboard;
