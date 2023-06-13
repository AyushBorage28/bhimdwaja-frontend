import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader';
import axios from 'axios';
import { SERVER_URL } from '../config';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../actions/userActions';
import { Container } from 'react-bootstrap';

function Otpinput({ history, location }) {
  const [otp1, setOtp1] = useState('');
  const [otp2, setOtp2] = useState('');
  const [otp3, setOtp3] = useState('');
  const [otp4, setOtp4] = useState('');
  const [message, setMessage] = useState(null);
  const [phone, setPhone] = useState('');
  const [timer, setTimer] = useState(60);

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (
      !location ||
      !location.search ||
      !location.search.split('phone=')[1] ||
      !location.search.split('phone=')[1].split('&')[0]
    ) {
      // TODO: throw some error
    }
    if (userInfo) {
      history.push(redirect);
      window.location.reload();
    }

    const _phone = location.search.split('phone=')[1].split('&')[0];
    setPhone(_phone);
  }, [history, userInfo, redirect, location]);

  async function handleSubmit(event) {
    event.preventDefault();
    const otp = otp1 + otp2 + otp3 + otp4;
    dispatch(verifyUser(phone, otp, () => {
      history.push(redirect);
      window.location.reload();
    }));
  }

  const handleResendOTP = async () => {
    try {
      setTimer(60);
      const { data } = await axios.post(`${SERVER_URL}/api/users/resendOTP`, { phone });
      setMessage(data.message);
      setTimeout(() => {
        setMessage(null);
      }, 1000);
    } catch (err) {
      // Handle the error if the OTP resend fails
    }
  };

  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      console.log('next');
      const next = elmnt.target.tabIndex;
      if (next < 7) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <Container className="py-3 content-container" fluid>
      <h1 className="text-center pt-4">Verify OTP</h1>
      <form onSubmit={handleSubmit} className="otp-form">
        {error && <Message variant="danger">{error}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {loading && <Loader />}

        <div className="otpContainer">
          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp1}
            onChange={(e) => setOtp1(e.target.value)}
            tabIndex="1"
            maxLength="1"
            onKeyUp={(e) => inputfocus(e)}
          />
          <input
            name="otp2"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp2}
            onChange={e => setOtp2(e.target.value)}
            tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)} />
          <input
            name="otp3"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp3}
            onChange={e => setOtp3(e.target.value)}
            tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)} />
          <input
            name="otp4"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp4}
            onChange={e => setOtp4(e.target.value)}
            tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)} />
        </div>
        <p>
          {timer > 0 ? (
            `If you didn't receive the OTP in ${timer} seconds, click on Resend OTP.`
          ) : (
            'If you didnt receive the OTP, click on Resend OTP.'
          )}
        </p>

        <div className="otp-buttons">
          <Button className="primary otp-btn" type="submit">
            Submit
          </Button>
          <Button className="primary otp-btn" onClick={handleResendOTP} disabled={timer > 0}>
            Resend OTP
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default Otpinput;
