import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

const Option = ({ label, icon, isActive, onClick }) => {
  return (
    <Grid
      item
      md={4}
      onClick={() => onClick()}
    >
      <Button variant={ isActive ? "contained" : "outlined"} color="primary" className="w-full">
        <Grid container>
          <Grid item md={12}>{icon}</Grid>
          <Grid item md={12}>{label}</Grid>
        </Grid>
      </Button>
    </Grid>
  );
};

export default Option;
