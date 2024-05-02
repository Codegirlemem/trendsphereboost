import Debit from '../../../assets/dashboard/debit-card.svg';
import Paypal from '../../../assets/dashboard/paypal_community_logo.png.svg';
import Flutterwave from '../../../assets/dashboard/flutterwave_icon.jpeg.svg';
import Mastercard from '../../../assets/dashboard/mastercard.svg';
import AmericanExpress from '../../../assets/dashboard/american_express_logo.svg.svg';
import Visa from '../../../assets/dashboard/visa_inc_logo.svg.svg';

export const paymentTypes = [
  {
    name: 'Debit/Credt Card',
    type: Debit,
  },
  {
    name: 'Paypal',
    type: Paypal,
  },
  {
    name: 'Flutterwave',
    type: Flutterwave,
  },
];

export const cardTypes = [
  {
    name: 'Mastercard',
    type: Mastercard
  },
  {
    name: 'Visa',
    type: Visa
  },
  {
    name: 'American Express',
    type: AmericanExpress
  },
];
