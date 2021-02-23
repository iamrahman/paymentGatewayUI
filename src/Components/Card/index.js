import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { Format } from "../../Utils";

const Card = ({cardDetails, flipCard, setFlipCard, transform, opacity, target}) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="row"
      className="pt-6"
      onClick={() => setFlipCard(flipCard => !flipCard)}
    >
      <Grid item md={2} lg={2} />
        <Grid item md={8} lg={9} className="card-flip rounded py-1" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
          <Grid className="bg-black h-1 w-full">H</Grid>
          <Grid container direction="row" className=" px-1 h-1 w-full mt-2">
            <Grid md={10} item className="h-1 bg-gray"></Grid>
            <Grid md={2} item className="h-1 bg-white">
              <label className="red center">{cardDetails?.cvv}</label>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} lg={9} className="card rounded px-1 py-1" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
          <Typography className="white">Debit Card</Typography>
          <Grid className="w-1 h-0" style={{ backgroundColor: "#FFD700" }}>
            -|-|-
          </Grid>
          <p className="white font-md monospace">
            {Format.cardNumberFormat(cardDetails?.number)}
          </p>
          <Grid item className="white font-mono items -end">
            <p>{cardDetails?.expDate}</p>
          </Grid>
          <p className="white font-mono">
            {String(cardDetails?.name).toUpperCase()}
          </p>
        </Grid>
      <Grid item md={2} lg={1} />
    </Grid>
  );
};

export default Card;
