import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import { paymentOption } from "../../Constants";
import Button from "../../Components/Button";
import { Routes } from "../../Utils";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Animation2 from "../../Assets/animation2.gif";

const Dashboard = () => {
  const [activeMode, setActiveMode] = useState("");
  const Animation = <img src={Animation2} style={{width: '100%'}} />
  return (
    <Layout
      heading={"Choose your Payment option"}
      backBtn={true}
      nextBtn={true}
      subChild={Animation}
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
