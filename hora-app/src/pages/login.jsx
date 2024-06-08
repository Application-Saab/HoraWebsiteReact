import React, { useState } from "react";
import { BASE_URL , OTP_GENERATE_END_POINT , API_SUCCESS_CODE, OTP_VERIFY_ENDPOINT} from "../utills/apiconstants";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Login() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [timer, setTimer] = useState(0);
  const [validOtp, setValidOtp] = useState(undefined);
  const [fetchedOtp, setFetchedOtp] = useState(null);
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState('');
  const [loginMsg , setLoginMsg] = useState('');
  const location = useLocation();
  const previousPage = location.state && location.state.from;
  const subCategory = location.state && location.state.subCategory;
  const product = location.state && location.state.product
  const [validMobileNumber, setValidMobileNumber] = useState(false); // Add state for valid mobile number
  const navigate = useNavigate();
   

  const handleMobileNumberChange = (e) => {
    console.log("inside handle Mobile")
    const value = e.target.value.trim();
    setMobileNumber(value);
    // Check if the phone number is valid
    const isValidPhoneNumber = /^\d{10}$/.test(value); // Assuming a 10-digit phone number
    if (!isValidPhoneNumber) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
      setValidMobileNumber(false); // Update validMobileNumber state
    } else {
      setPhoneNumberError('');
      setValidMobileNumber(true); // Update validMobileNumber state
    }
  }

  const handleSendOtp = () => {
    fetchOtp();    
  }

  const handleOtpChange = (e, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);
  
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

//   const handleLogin = () => {
//     const enteredOtp = otp.join('');
//     validateOtp(enteredOtp);
//   }

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
        alert("logged in successfully")
        setLoginMsg("suceess fully login")
        console.log(response.data._id)
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem("mobileNumber", mobileNumber);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userID', response.data.data._id);
          if (previousPage) {
            navigate(previousPage, { state: { subCategory, product } });
          } else {
         navigate('/');
          }
          // Perform navigation or other actions upon successful login
          // navigation.navigate('DrawerNavigator');
        } else {
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
      console.log('Error verifying OTP:', error.message);
      setOtpError('Failed to verify OTP. Please try again.');
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
            console.log("OTP sent successfully")
        } else {
            console.log('OTP sending failed');
        }
    } catch (error) {
        console.log('Error sending OTP:', error.message);
    }
};


  return (
    <div className="login-page" style={{display:"flex" , justifyContent:"center", flexDirection:"column" , textAlign:"center" , margin:"50px 0 0"}}>

      {!loggedIn ? (
        <form className="loginform">
          <div className="form-group" style={{display:"flex" , justifyContent:"center", flexDirection:"column" , textAlign:"center"}}>
            <label htmlFor="mobileNumber"  style={{color:"rgb(146, 82, 170)" , fontSize:"14px"  , fontWeight:"600"}}>Enter your Phone Number:</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={handleMobileNumberChange}
              className="loginInput"
              placeholder="Enter 10 digit Mobile Number Eg: 8010679679"
            />
            {phoneNumberError && <span className="error">{phoneNumberError}</span>}
          </div>
          {!otpSent ? (
         <button type="button" onClick={handleSendOtp} disabled={!validMobileNumber} className="blue-btn loginbtn">LOGIN VIA OTP</button>
          ) : (
            <>
              <div className="form-group" style={{display:"flex" , justifyContent:"center", flexDirection:"column" , textAlign:"center"}}>
                <label htmlFor="otp" style={{color:"rgb(146, 82, 170)" , fontSize:"14px"  , fontWeight:"600"}}>Enter OTP:</label>
                <div style={{display:"flex" , justifyContent:"enter", flexDirection:"row" , textAlign:"center"}}>
                {otp.map((digit, index) => (
                  <input
                    type="text"
                    id={`otp-${index}`}
                    key={index}
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(e, index)}
                    className="otpinputType"
                  />
                ))}
                </div>
                
              </div>
              {/* <button type="button" onClick={handleLogin}>Login</button> */}
            </>
          )}
          {loginMsg && <span className="succeemsg">{loginMsg}</span>}
          {otpError && <span className="error">{otpError}</span>}
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
   margin:"0 auto",
   maxWidth:"1200px",
  textAlign:"center"
  },
}

export default Login;
