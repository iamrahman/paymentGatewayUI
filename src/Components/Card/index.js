import { Grid, Typography } from "@material-ui/core";
import React from "react";

const Card = ({}) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      spacing={7}
      className="h-layout"
    >
      <Grid item md={2} lg={3} />
      <Grid item md={8} lg={7} className=" card rounded px-1">
        <Typography
          className="white"
        >
          Debit Card
        </Typography>
        <Grid className="w-1 h-1" style={{ backgroundColor: "#FFD700" }}>
          -|-|-
        </Grid>
        <p className="white font-md monospace">8769 6546 7650 1244</p>
        <Grid item className="white font-mono items -end">
          <p>12/23</p>
        </Grid>
        <p className="white font-mono">INAMUR RAHMAN</p>
      </Grid>
      <Grid item md={2} lg={2} />
    </Grid>
  );
};

export default Card;
