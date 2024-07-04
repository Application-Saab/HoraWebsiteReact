import React, { useState,useEffect, useRef } from "react";
import { BASE_URL, OTP_GENERATE_END_POINT, API_SUCCESS_CODE, OTP_VERIFY_ENDPOINT } from "../utills/apiconstants";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Col, Form, Row } from "react-bootstrap";
import { useTimer } from "../utills/useTimer";

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [validOtp, setValidOtp] = useState(undefined);
  const [fetchedOtp, setFetchedOtp] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [loginError, setLoginError] = useState(false);
  const [loginMsg, setLoginMsg] = useState('');
  const location = useLocation();
  const previousPage = location.state && location.state.from;
  const subCategory = location.state && location.state.subCategory;
  const orderType = location.state && location.state.orderType;
  const product = location.state && location.state.product;
  const selectedDishDictionary = location.state && location.state.selectedDishDictionary;
  const selectedDishPrice = location.state && location.state.selectedDishPrice;
  const selectedDishes = location.state && location.state.selectedDishes;
  const isDishSelected = location.state && location.state.isDishSelected;
  const selectedCount = location.state && location.state.selectedCount;
  const peopleCount = location.state && location.state.peopleCount;
  const selectedDeliveryOption = location.state && location.state.selectedOption;
  const totalOrderAmount = location.state && location.state.totalOrderAmount;
  const selectedDishQuantities = location.state && location.state.selectedDishQuantities;
  const selectedOption = location.state && location.state.selectedOption;
  const data = location.state && location.state.data;
  const [validMobileNumber, setValidMobileNumber] = useState(false); // Add state for valid mobile number
  const navigate = useNavigate();
  const otpRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);
  const { time, isTimeUp, resetTimer } = useTimer(25);

  const handleMobileNumberChange = (e) => {
    console.log("inside handle Mobile")
    const value = e.target.value.trim();
    setMobileNumber(value);
    // Check if the phone number is valid
    const isValidPhoneNumber = /^\d{10}$/.test(value); // Assuming a 10-digit phone number
    if (!isValidPhoneNumber) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
      setValidMobileNumber(false); // Update validMobileNumber state
      setLoginError(true)
    } else {
      setPhoneNumberError('');
      setLoginError(false)
      setValidMobileNumber(true); // Update validMobileNumber state
    }
  }
 //when time is up set otpFail to true
 useEffect(() => {
  if (isTimeUp && otpSent) {
    setOtpError(true);
  }
}, [isTimeUp,otpSent]);

//when component mounts focus on the first input field
useEffect(() => {
  if (otpSent) {
    otpRefs.current[0]?.current?.focus();
  }
}, [otpSent]);

  const handleSendOtp = () => {
    fetchOtp();
  }

  const validateOtp = async (enteredOtp) => {
    try {
      if (enteredOtp === fetchedOtp.toString()) {
        const url = BASE_URL + OTP_VERIFY_ENDPOINT;
        const requestData = {
          phone: mobileNumber,
          role: 'customer',
          otp: enteredOtp
        };
        const response = await axios.post(url, requestData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.data.status === API_SUCCESS_CODE) {
          alert("Logged in successfully");
          setLoginMsg("Successfully logged in");
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem("mobileNumber", mobileNumber);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userID', response.data.data._id);
          console.log("previousPage", previousPage);
        
          if (previousPage.includes("/book-chef-cook-for-party")) {
            alert(previousPage.includes("/book-chef-cook-for-party"));
            navigate('/book-chef-checkout', {
              state: {
                peopleCount,
                selectedDishDictionary,
                selectedDishPrice,
                selectedDishes,
                orderType,
                isDishSelected,
                selectedCount
              }
            });
          } else if (previousPage.includes('/balloon-decoration/anniversary-decoration/product')) {
            navigate('/checkout', {
              state: { subCategory, product, orderType }
            });
          } else if (previousPage.includes('/party-food-delivery-live-catering-buffet-select-date')) {
            navigate("/party-food-delivery-live-catering-buffet-checkout", {
              state: {
                peopleCount,
                selectedDeliveryOption: selectedOption,
                selectedDishes: data,
                totalOrderAmount: totalOrderAmount,
                selectedDishQuantities: selectedDishQuantities,
                selectedOption: selectedOption
              }
            });
          } else {
            navigate('/');
          }
        }
        else {
          setLoginMsg(" ")
          setOtpError('Failed to verify OTP. Please try again.');
        }
      } else {
        setLoginMsg("")
        setValidOtp(false);
        setOtpError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      setLoginMsg(" ")
      setLoginError(true)
      console.log('Error verifying OTP:', error.message);
      setOtpError('Failed to verify OTP. Please try again.');
    }
  }

  const handleOtpChange = (e, index) => {
    const { value } = e.target;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (value && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1].current.focus();
    }

    if (!value && index > 0) {
      otpRefs.current[index - 1].current.focus();
    }

    // Check if last digit is entered
    if (index === 3) {
      const enteredOtp = updatedOtp.join('');
      if (enteredOtp.length === 4) {
        validateOtp(enteredOtp);
      }
    }

    // Clear OTP error message when user starts typing again
    if (otpError) {
      setOtpError('');
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1].current.focus();
    }
  }

  const fetchOtp = async () => {
    try {
      const url = BASE_URL + OTP_GENERATE_END_POINT;
      const requestData = {
        phone: mobileNumber,
        role: 'customer',
      };
      const response = await axios.post(url, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.data.status === API_SUCCESS_CODE) {
        setFetchedOtp(response.data.otp);
        setOtpSent(true);
        resetTimer(); // Start the timer after OTP is sent successfully
        setOtp(['', '', '', '']); // Clear OTP fields
        setOtpError(''); // Clear OTP error
        console.log("OTP sent successfully")
      } else {
        console.log('OTP sending failed');
      }
    } catch (error) {
      console.log('Error sending OTP:', error.message);
    }
  };

  return (
    <div className="login-page" style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center", margin: "50px 0 0"}}>
      {!loggedIn ? (
        <form className="loginform" style={!otpSent?{maxWidth:'36rem'}:{maxWidth:'30rem'}}>
          {!otpSent ? (<>
            <div className="form-group" style={{ display: "flex", justifyContent: "center", flexDirection: "column", textAlign: "center" }}>
              <p className='font-16px' style={{color:"#9252AA" , fontWeight:600}}>Login with your mobile number </p>
              <div className='row gap-1 justify-content-around' >
                <div className='col-2 p-0 m-0 text-center'>
                  <p className='form-control rounded-2 phone-code font-16px m-0 py-3'>+91</p>
                </div>
                <div className='col-9 p-0 m-0'>
                  <Form.Control
                    className={`rounded-2 font-20px px-4 py-3 mb-4  ${loginError ? 'otp-failed' : 'input-field'}`}
                    type="tel"
                    name="mobileNumber"
                    onChange={handleMobileNumberChange}
                    value={mobileNumber}
                    placeholder="Enter your 10 digit mobile number"
                    isInvalid={loginError}
                  />
                </div>
              </div>
              {phoneNumberError && <span className="error">{phoneNumberError}</span>}
            </div>
            <button type="button" onClick={handleSendOtp} disabled={!validMobileNumber} className="blue-btn loginbtn">GET OTP</button>
          </>) : (
            <>
              <p className="font-14px text-center">
                Check your phone we have sent you an OTP to {' '}
                <span className="font-14px phone-number-span">(+91) {mobileNumber}</span>{' '}
              </p>
              <Row className="justify-content-center">
                {otp.map((digit, index) => (
                  <Col key={index} xs={3} style={{ maxWidth: '7rem' }}>
                    <Form.Control
                      type="text"
                      className={`rounded-3 input-field font-20px py-3 text-center ${otpError ? 'otp-failed' : ''}`}
                      name={`otp[${index}]`}
                      maxLength={1}
                      inputMode="numeric"
                      value={digit}
                      onChange={(e) => handleOtpChange(e, index)} 
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      ref={otpRefs.current[index]}
                    />
                  </Col>
                ))}
              </Row>
            </>
          )}
          {loginMsg && <span className="successmsg">{loginMsg}</span>}
          {otpError && <span className="error">{otpError}</span>}
          {otpError ? (
          <div className="d-flex justify-content-between mt-4">
            <p className="m-0 p-0 text-danger font-13px">*Wrong OTP</p>
            <p className="m-0 p-0 font-13px" style={{ color: '#9252AA' , cursor:"pointer"}} onClick={fetchOtp}>
              Resend Code
            </p>
          </div>
        ) : (
          otpSent&&
          <div className="d-flex justify-content-center mt-4">
            <p className="m-0 p-0 font-13px text-center" style={{ color: '#8A8A8A' }}>
              Resend Code in {time} sec
            </p>
          </div>
        )}
        </form>
      ) : (
        <div>
          <p>Welcome! You have successfully logged in.</p>
        </div>
      )}
    </div>
  );
}

const styles = {
  pageWidth: {
    margin: "0 auto",
    maxWidth: "1200px",
    textAlign: "center"
  },
}

export default Login;




