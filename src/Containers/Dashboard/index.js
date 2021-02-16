import React from "react";
import Layout from "../../Components/Layout";
import Option from "../../Components/Option";
import CreditCardOutlinedIcon from '@material-ui/icons/CreditCardOutlined';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';
import { Button } from "../../Components";

const Dashboard = () => {
  return (
    <Layout heading={"Choose your Payment option"} backBtn={true}>
      <div className="flex flex-row w-full my-12">
        <Option label={"Debit Card"} icon={<CreditCardOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
        <Option label={"Credit Card"} icon={<CreditCardOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
        <Option label={"Gift Card"} icon={<CardGiftcardOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
      </div>
      <div className="flex flex-row w-full my-12">
        <Option label={"Banking"} icon={<AccountBalanceOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
        <Option label={"UPI"} icon={<ContactlessOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
        <Option label={"Wallet"} icon={<AccountBalanceWalletOutlinedIcon/>} classOverride="w-1/3 mx-2"/>
      </div>
      <div className="flex flex-row-reverse mt-32">
          <Button label="Next" rightIcon={<ChevronRightOutlinedIcon style={{color: 'white'}}/>} classOverride="w-20 h-20 bg-secondry rounded-full" color="white"/>
      </div>
    </Layout>
  );
};

export default Dashboard;
