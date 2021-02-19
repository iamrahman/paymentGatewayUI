import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Routes } from "../../Utils";
import { Grid, Typography } from "@material-ui/core";

const Layout = ({ children, heading, backBtn, nextBtn, subChild = null }) => {
  return (
    <Grid
      container
      spacing={4}
      direction="row"
      alignItems="center"
      justifyContent="center"
      className="h-container bg-secondry"
    >
      <Grid item md={1} lg={2} />
      <Grid item sm={12} md={4} lg={4} className="primary-linear h-layout">
        {backBtn && (
          <Grid
            container
            className="white cursor-pointer"
            onClick={() => Routes.back()}
          >
            <ArrowBackIcon style={{ color: "white" }} />
            <Typography>Go back</Typography>
          </Grid>
        )}
        {subChild}
      </Grid>
      <Grid item sm={12} md={6} lg={4} className="bg-white h-layout">
        {heading &&
          <Grid item>
            <h1 className="text-4xl text-center">{heading}</h1>
          </Grid>
        }
        {children}
      </Grid>
      <Grid item md={1} lg={2} />
    </Grid>
  );
};
export default Layout;
