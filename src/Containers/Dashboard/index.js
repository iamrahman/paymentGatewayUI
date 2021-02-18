import React from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import ChevronRightOutlinedIcon from "@material-ui/icons/ChevronRightOutlined";
import { Button } from "../../Components";
import { paymentOption } from "../../Constants";
import Routes from '../../Utils/routes'
const Dashboard = () => {
  return (
    <Layout heading={"Choose your Payment option"} backBtn={false} nextBtn={true}>
      <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 my-20">
        {paymentOption.map((key, index) => {
          return (
            <Option
              key={index}
              label={key.label}
              icon={key.icon}
              classOverride="grid"
            />
          );
        })}
      </div>
      {/* <div className="flex flex-row-reverse p-6">
        <Button
          label="Next"
          rightIcon={<ChevronRightOutlinedIcon style={{ color: "white" }} />}
          classOverride="w-20 h-20 bg-secondry rounded-full shadow-lg"
          color="white"
          onClick={ () => Routes.go('/card-payment')}
        />
      </div> */}
    </Layout>
  );
};

export default Dashboard;
