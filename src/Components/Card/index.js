import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Format } from "../../Utils";

const Card = ({cardDetails}) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      className="pt-6"
    >
      <Grid item md={2} lg={2} />
      <Grid item md={8} lg={9} className="card rounded px-1 py-1">
        <Typography
          className="white"
        >
          Debit Card
        </Typography>
        <Grid className="w-1 h-0" style={{ backgroundColor: "#FFD700" }}>
          -|-|-
        </Grid>
        <p className="white font-md monospace">{Format.cardNumberFormat(cardDetails?.number)}</p>
        <Grid item className="white font-mono items -end">
          <p>{cardDetails?.expDate}</p>
        </Grid>
        <p className="white font-mono">{String(cardDetails?.name).toUpperCase()}</p>
      </Grid>
      <Grid item md={2} lg={1} />
    </Grid>
  );
};

export default Card;
