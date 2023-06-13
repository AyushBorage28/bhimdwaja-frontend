import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';
import useScrollToTop from '../components/ScrollToTop';

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  if (!shippingAddress.address) {
    history.push('/shipping');
  }

  const [paymentMethod] = useState('PayPal');

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  useScrollToTop();

  return (
    <Container className="py-3 content-container" fluid>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <p className="payment-info">
            <strong>Payment Update:</strong> Currently, we do not have a payment gateway integrated on our website. However, we have streamlined the process to ensure a smooth checkout experience for you. Here's what you need to know:
          </p>
          <ul className="payment-bullets">
            <li><strong>Confirmation Process:</strong> To place your order, simply click on the "Continue" button below. You will be directed to the orders page, where you can click on the "Place Order" button to confirm your address and finalize your order.</li>
            <li><strong>Personal Assistance:</strong> Our dedicated team will personally reach out to you within 2-3 working days to finalize the payment process.</li>
            <li><strong>Order Tracking:</strong> Once your order is shipped, you will have access to real-time updates on its status through your profile screen.</li>
            <li><strong>Apologies for the inconvenience:</strong> We apologize for any inconvenience caused and appreciate your patience as we work towards integrating a seamless payment gateway for future orders.</li>
          </ul>
          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default PaymentScreen;