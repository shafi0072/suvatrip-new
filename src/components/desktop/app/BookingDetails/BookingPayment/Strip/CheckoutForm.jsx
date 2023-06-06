import {PaymentElement} from '@stripe/react-stripe-js';
import CardForm from './CardForm';

const CheckoutForm = ({demos}) => {
  return (
    <div className="DemoWrapper">
    <CardForm/>
  </div>
  );
};

export default CheckoutForm;
