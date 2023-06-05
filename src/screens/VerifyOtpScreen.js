import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Loader from '../components/Loader'
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { USER_VERIFIED } from '../constants/userConstants';
import { findUser, verifyUser } from '../actions/userActions';

function Otpinput({ history, location }) {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  // const [error, setError] = useState("");
  const [phone, setPhone] = useState();

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin)
  const { loading, error, userInfo } = userLogin

  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (
      !location ||
      !location.search ||
      !location.search.split("phone=")[1] ||
      !location.search.split("phone=")[1].split("&")[0]
    ) {
      // TODO: throw some error
    }
    if (userInfo) {
      history.push(redirect)
      window.location.reload()
    }

    const _phone = location.search.split("phone=")[1].split("&")[0];
    setPhone(_phone)
  }, [history, userInfo, redirect]);

  async function handleSubmit(event) {
    event.preventDefault();
    const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
    dispatch(verifyUser(phone, otp, () => {
      history.push(redirect);
      window.location.reload()}))
    
  }

  const inputfocus = (elmnt) => {
    if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {

        elmnt.target.form.elements[next].focus()
      }
    }
    else {
      console.log("next");

      const next = elmnt.target.tabIndex;
      if (next < 7) {
        elmnt.target.form.elements[next].focus()
      }
    }

  }

  return (
    <><h1 className='text-center pt-4'>Verify OTP</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="otpContainer">

          <input
            name="otp1"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp1}
            onChange={e => setOtp1(e.target.value)}
            tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)} />
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
          <input
            name="otp5"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp5}
            onChange={e => setOtp5(e.target.value)}
            tabIndex="5" maxLength="1" onKeyUp={e => inputfocus(e)} />
          <input
            name="otp6"
            type="text"
            autoComplete="off"
            className="otpInput"
            value={otp6}
            onChange={e => setOtp6(e.target.value)}
            tabIndex="6" maxLength="1" onKeyUp={e => inputfocus(e)} />
        </div>
        <p>If didn't receive in 60 seconds, click on Resend OTP.</p>
        <Button className="primary mr-3" type="submit">
          Submit
        </Button>
        <Button className="primary" type="submit">
          Resend OTP
        </Button>
      </form></>
  );
}


export default Otpinput;