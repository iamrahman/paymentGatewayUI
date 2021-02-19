import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import { paymentOption } from "../../Constants";
import Button from "../../Components/Button";
import { Routes } from "../../Utils";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
const Dashboard = () => {
  const [activeMode, setActiveMode] = useState("");
  return (
    <Layout
      heading={"Choose your Payment option"}
      backBtn={true}
      nextBtn={true}
    >
      <Grid
        container
        direction="row"
        spacing={2}
        className="center p-2"
      >
        {paymentOption.map((key, index) => {
          return (
            <Option
              key={index}
              label={key.label}
              icon={key.icon}
              isActive={activeMode === key.label}
              onClick={() => {
                setActiveMode(key.label);
              }}
            />
          );
        })}
      </Grid>
      <Grid className="center p-2">
        <Button
          label="Next"
          rightIcon={<NavigateNextIcon style={{color: '#ffff'}} />}
          classOverride="bg-primary w-3 h-3 circle"
          color="white"
          onClick={()=> Routes.go('/card-payment')}
        />
      </Grid>
    </Layout>
  );
};

export default Dashboard;
