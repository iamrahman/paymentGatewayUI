import React, { useState } from "react";
import Layout from "../../Components/Layout";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Card from "../../Components/Card";
import { Button } from "@material-ui/core";
import { useSpring, animated as target } from 'react-spring';
const CardPayment = () => {

  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: '',
    expDate: "",
    cvv: ''
  });

  const [flipCard, setFlipCard] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipCard ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipCard ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  const updateCardDetails = (event) => {
    event.persist();
    setCardDetails({
      number: event?.target?.name === 'number'? event?.target?.value : cardDetails?.number,
      name: event?.target?.name === 'name'? event?.target?.value : cardDetails?.name,
      expDate: event?.target?.name === 'expDate'? event?.target?.value : cardDetails?.expDate,
      cvv: event?.target?.name === 'cvv'? event?.target?.value : cardDetails?.cvv,
    });
  }
  return (
    <Layout
      heading="Card Details"
      backBtn={true}
      nextBtn={true}
      subChild={<Card cardDetails={cardDetails} target={target} flipCard={flipCard} setFlipCard={setFlipCard} transform={transform} opacity={opacity} />}
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
            label="Enter your Card Number"
            name="number"
            defaultValue={cardDetails?.number}
            variant="outlined"
            className="w-full"
            onChange={updateCardDetails}
          />
        </Grid>
        <Grid item lg={2} md={2} />

        <Grid item lg={2} md={2} />
        <Grid item lg={8} md={8}>
          <TextField
            required
            id="outlined-required"
            label="Card Holder Name"
            name="name"
            defaultValue={cardDetails?.name}
            variant="outlined"
            className="w-full"
            onChange={updateCardDetails}
          />
        </Grid>
        <Grid item lg={2} md={2} />

        <Grid item lg={2} md={2} />
        <Grid item lg={4} md={4}>
          <TextField
            required
            id="outlined-required"
            label="Exp Date"
            name="expDate"
            defaultValue={cardDetails?.expDate}
            variant="outlined"
            className="w-full"
            onChange={updateCardDetails}
          />
        </Grid>
        <Grid item lg={4} md={4}>
          <TextField
            required
            id="outlined-required"
            label="CVV"
            defaultValue={cardDetails?.cvv}
            name="cvv"
            variant="outlined"
            className="w-full"
            onChange={updateCardDetails}
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
