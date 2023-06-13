import React, { useEffect, useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveShippingAddress } from '../actions/cartActions'
import useScrollToTop from '../components/ScrollToTop'
import Axios from 'axios'

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart)
  const { shippingAddress } = cart

  const [address, setAddress] = useState(shippingAddress.address || "")
  const [city, setCity] = useState(shippingAddress.city || "")
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode || "")
  const [state, setstate] = useState(shippingAddress.state || "")

  useScrollToTop()
  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, state }))
    history.push('/payment')
  }


  useEffect(() => {
    (async () => {
      try {
        const { data } = await Axios.get(`https://api.postalpincode.in/pincode/${postalCode}`);
        console.log(data);
        if (!data[0].PostOffice || data[0].PostOffice.length === 0) {
          throw new Error("Invalid Pincode");
        }
        setCity(data[0].PostOffice[0].Division);
        setstate(data[0].PostOffice[0].State);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [postalCode]);


  return (
    <Container className="py-3 content-container" fluid>
      <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter address'
              value={address}
              required
              onChange={(e) => setAddress(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter postal code'
              value={postalCode || ""}
              required
              onChange={(e) => setPostalCode(e.target.value)}>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter city'
              value={city}
              required
              onChange={(e) => setCity(e.target.value)}
            ></Form.Control>
          </Form.Group>



          <Form.Group controlId='state'>
            <Form.Label>State</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter state'
              value={state}
              required
              onChange={(e) => setstate(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Button type='submit' variant='primary'>
            Continue
          </Button>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default ShippingScreen
