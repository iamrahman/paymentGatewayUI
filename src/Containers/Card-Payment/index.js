import React from "react";
import Layout from "../../Components/Layout";
import TextField from "@material-ui/core/TextField";
import Card from "../../Components/Card";

const CardPayment = () => {
  return (
    <Layout heading="Card Details" backBtn={true} nextBtn={true} subChild={<Card/>}>
      <div className="flex pt-20">
        <div className="flex w-3/12"></div>
        <div className="flex w-6/12">
            <TextField
              required
              id="outlined-required"
              label="Card Number"
              defaultValue="8768-8768-6540-6542"
              variant="outlined"
              className="flex w-full"
            />
        </div>
        <div className="flex w-3/12"></div>
      </div>

      <div className="flex py-6">
        <div className="flex w-3/12"></div>
        <div className="flex w-6/12">
            <TextField
              required
              id="outlined-required"
              label="Card Holder Name"
              defaultValue="Amit Kumar Sharma"
              variant="outlined"
              className="flex w-full"
            />
        </div>
        <div className="flex w-3/12"></div>
      </div>
      <div className="flex py-3">
        <div className="flex w-3/12"></div>
        <div className="flex w-6/12 gap-6">
            <TextField
              required
              id="outlined-required"
              label="Exp Date"
              defaultValue="11/12"
              variant="outlined"
              className="flex w-full"
            />
            <TextField
              required
              id="outlined-required"
              label="CVV"
              defaultValue="987"
              variant="outlined"
              className="flex w-full"
            />
        </div>
        <div className="flex w-3/12"></div>
      </div>
    </Layout>
  );
};

export default CardPayment;
