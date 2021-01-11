import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Payments = ({ handleToken }) => {
  return (
    <StripeCheckout
      name='Saranin'
      description='$5 untuk 5 kredit email'
      amount={500} // 5 dollars = 500 cents
      token={token => handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
    >
      <button className='btn'>Isi Kredit</button>
    </StripeCheckout>
  );
};

export default connect(null, actions)(Payments);
