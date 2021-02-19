import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import CardGiftcardOutlinedIcon from "@material-ui/icons/CardGiftcardOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import ContactlessOutlinedIcon from "@material-ui/icons/ContactlessOutlined";

export const paymentOption = [
    {
        label: 'Debit Card',
        icon: <CreditCardOutlinedIcon/>
    },
    {
        label: 'Gift Card',
        icon: <CardGiftcardOutlinedIcon/>
    },
    {
        label: 'Wallets',
        icon: <AccountBalanceWalletOutlinedIcon/>
    },
    {
        label: 'Credit Card',
        icon: <CreditCardOutlinedIcon/>
    },
    {
        label: 'Banking',
        icon: <AccountBalanceOutlinedIcon/>
    },
    {
        label: 'UPI',
        icon: <ContactlessOutlinedIcon/>
    },
]