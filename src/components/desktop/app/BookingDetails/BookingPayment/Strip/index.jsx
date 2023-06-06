import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import CardForm from './CardForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

export default function App() {
  const demos = [
    {
      path: "/card-element",
      label: "CardElement",
      component: CardForm
    }
   
  ];
  return (
    <Elements stripe={stripePromise} >
      <CheckoutForm demos={demos}/>
    </Elements>
  );
};