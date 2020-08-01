import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
 // const publishableKey = 'pk_test_WBqax2FWVzS9QlpJScO07iuL';
const publishableKey='pk_test_51HAFe7GYDT2VEC6r2YfijfRaZeKur07HBxdhCW2WAcPWwCzIhNjobMcKFC8vdPLJZSNZwWduUR7OrjvGOBGsp0VH00K7ejlQxK'

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Test Ltd.'
      billingAddress
      shippingAddress
      image='https://training-app-a2z.herokuapp.com/a2z.jpeg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;