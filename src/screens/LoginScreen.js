import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { login, loginViaPassword } from '../actions/userActions'
import useScrollToTop from '../components/ScrollToTop'


const LoginScreen = ({ location, history }) => {

  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useScrollToTop()

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(phone, () => history.push(`/verifyotp/?phone=${phone}`)))
  }
  const submitPassword = (e) => {
    e.preventDefault()
    dispatch(loginViaPassword(phone, password, () => history.push(redirect)))
  }

  return (
    <Container className="py-3 content-container" fluid>
      <FormContainer>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitPassword}>

          <Form.Group controlId='phone'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='phone'
              placeholder='+91 | Enter phone number'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>

          <div className="button-container">
            <Button type="submit" variant="primary">
              Login with password
            </Button>
            <Button variant="primary" onClick={submitHandler}>
              Login with OTP
            </Button>
          </div>


        </Form>
        <Row className='py-3'  >
          <Col style={{ fontWeight: '500' }}>
            New Customer?{' '}
            <Link to={redirect ? `/register?redirect=${redirect}` : '/register'} >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  )
}

export default LoginScreen