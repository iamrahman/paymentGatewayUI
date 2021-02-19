import React from "react";
import Layout from "../../Components/Layout";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "../../Components/Card";
import { Button } from "@material-ui/core";

const CardPayment = () => {
  return (
    <Layout
      heading="Card Details"
      backBtn={true}
      nextBtn={true}
      subChild={<Card />}
    >
      <Grid
        container
        spacing={4}
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="mt-4"
      >
        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <TextField
            required
            id="outlined-required"
            label="Card Number"
            defaultValue="8768-8768-6540-6542"
            variant="outlined"
            className="w-full"
          />
        </Grid>
        <Grid item lg={2} md={2} />

        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <TextField
            required
            id="outlined-required"
            label="Card Holder Name"
            defaultValue="Inamur Rahman"
            variant="outlined"
            className="w-full"
          />
        </Grid>
        <Grid item lg={2} md={2} />

        <Grid item lg={2} md={2} />
        <Grid item lg={4} md={4}>
          <TextField
            required
            id="outlined-required"
            label="Exp Date"
            defaultValue="11/24"
            variant="outlined"
            className="w-full"
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            required
            id="outlined-required"
            label="CVV"
            defaultValue="983"
            variant="outlined"
            className="w-full"
          />
        </Grid>
        <Grid item lg={2} md={2} />

        <Grid item lg={7} md={8} />
        <Grid item lg={3} md={2}>
          <Button variant="outlined" color="primary" className="w-full">
            Pay Now
          </Button>
        </Grid>
        <Grid item lg={2} md={2} />
      </Grid>
    </Layout>
  );
};

export default CardPayment;
