import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT } from '../utills/apiconstants';
import { PAYMENT, PAYMENT_STATUS } from '../utills/apiconstants';


function Checkout() {
  const { subCategory, product } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date); // Print the selected date
  };

  const handleTimeSlotChange = (event) => {
    setSelectedTimeSlot(event.target.value);
  };

  const generateTimeSlots = () => {
    const startTime = 8; // Starting hour
    const endTime = 20; // Ending hour
    const interval = 3; // Interval in hours

    const timeSlots = [];
    for (let hour = startTime; hour < endTime; hour += interval) {
      const startTimeFormatted = hour < 10 ? `0${hour}:00` : `${hour}:00`;
      const endTimeFormatted =
        hour + interval < 10
          ? `0${hour + interval}:00`
          : `${hour + interval}:00`;
      timeSlots.push(`${startTimeFormatted} - ${endTimeFormatted}`);
    }

    return timeSlots;
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePinCodeChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  // const onContinueClick = async () => {
  //   try {
  //       const apiUrl = BASE_URL + PAYMENT;
  //       const storedUserID = "63f209f7faf2b6e2e83a8847"; // Temporary user ID
  //       const phoneNumber = localStorage.getItem('mobileNumber');

  //       const randomInteger = Math.floor(getRandomNumber(1, 100));
  //       const merchantTransactionId = storedUserID + randomInteger;

  //       const requestData = {
  //           user_id: storedUserID,
  //           price: Math.round(product.price * 0.3),
  //           phone: phoneNumber,
  //           name: storedUserID,
  //           merchantTransactionId: merchantTransactionId
  //       };

  //       console.log("Request Data:", requestData , apiUrl);

  //       const response = await axios.post(apiUrl, requestData, {
  //           headers: {
  //               'Content-Type': 'application/json',
  //           },
  //       });



  //       const url = response.request.responseURL;
  //       console.log("Response11:", url); // Log the entire response object
  //       window.open(url);

  //       handleConfirmOrder(merchantTransactionId);
  //   } catch (error) {
  //       console.error('API error:', error);
  //       // Handle errors
  //   }
  // };


  const onContinueClick = async () => {

    const apiUrl = BASE_URL + PAYMENT;

    const storedUserID = "63f209f7faf2b6e2e83a8847";
    const phoneNumber = await localStorage.getItem('mobileNumber')

    const randomInteger = Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000));

    let merchantTransactionId = randomInteger
    const requestData = {
      user_id: storedUserID,
      price: Math.round(product.price / 5),
      phone: phoneNumber,
      name: '',
      merchantTransactionId: merchantTransactionId
    };


    try {
      const response = await axios.post(apiUrl, requestData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)

      let url = response.request.responseURL;
      console.log("req url" + url)
      handleConfirmOrder(merchantTransactionId);
      // Linking.openURL(url)
      // .then((supported) => {
      //   if (!supported) {
      //     console.log(`Cannot handle URL: ${url}`);
      //   } else {
      //     console.log(`Opened URL: ${url}`);
      //   }
      // })

    } catch (error) {
      // Handle errors
      console.error('API error:', error);
    }




  }



  const handleConfirmOrder = async (merchantTransactionId) => {
    console.log("checkstatus")
    const message = await checkPaymentStatus(merchantTransactionId);
    console.log("checkstatus")
  }

  const checkPaymentStatus = async (merchantTransactionId) => {
    console.log("inside chkecstatus")
    try {
      const storedUserID = await localStorage.getItem('userID');
      const apiUrl = BASE_URL + PAYMENT_STATUS + '/' + merchantTransactionId;


      const pollInterval = 5000; // 5 seconds (adjust as needed)
      const pollingDuration = 300000; // 5 minutes

      const pollPaymentStatus = async () => {
        const startTime = Date.now();

        while (Date.now() - startTime < pollingDuration) {
          try {
            const response = await axios.post(apiUrl, {}, {
              headers: {
                'Content-Type': 'application/json',
              },
            });



            if (response.data && response.data.message) {
              const message = response.data.message;
              console.log('API response message:', message);

              if (message === 'PAYMENT_PENDING') {
                console.log('Payment is still pending. Polling again...');
                await new Promise(resolve => setTimeout(resolve, pollInterval));
              } else {
                console.log('Payment status:', message);
                return message;
              }
            } else {
              console.log('API response does not contain a message field');
            }

          } catch (error) {
            console.error('API error:', error);
          }
        }

        // Stop polling after the specified duration
        console.log('Polling completed. Returning final result.');
        return 'PAYMENT_POLLING_TIMEOUT';
      };

      // Start polling and return the final result after polling completes
      return await pollPaymentStatus();
    } catch (error) {
      console.error('Error checking payment status:', error);
      throw error; // Rethrow the error for the caller to handle
    }
  };





  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "30px" }}>
          <div style={{ width: "60%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }}>
            <div style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'center', color: "#9252AA" }}>The decorator requires approximately 40-90 minutes to fulfill the service</div>

            <h2 style={{ fontSize: "17px", fontWeight: "400", color: "#222" }}>Order Details</h2>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '10px' }}>
                <h5 style={{ marginBottom: "4px" }}>Select Date</h5>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()} // Disable dates before today's date
                  placeholderText="Select Date"
                  showTimeSelect={false} // Remove the clock
                />
              </div>
            
                <div>
      <h5 style={{ marginBottom: "4px" }}>Select Time</h5>
      <select
        value={selectedTimeSlot}
        onChange={handleTimeSlotChange}
        style={{ padding: "8px", fontSize: "16px" }}
      >
        <option value="">Select a time slot</option>
        {generateTimeSlots().map((timeSlot, index) => (
          <option key={index} value={timeSlot}>
            {timeSlot}
          </option>
        ))}
      </select>
    </div>
       
            </div>
            <div>
              <h4>Customizable comments</h4>
              <textarea
                value={comment}
                onChange={handleComment}
                rows={4}
                cols={50}
                placeholder="Enter your comment."
              />
            </div>
            <div>
              <div>
                <label>Address:</label>
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  maxLength={200}
                />
              </div>
              <div>
                <label>Pin Code:</label>
                <input
                  type="text"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                />
              </div>
              <div>
                <label>City:</label>
                <select value={city} onChange={handleCityChange}>
                  <option value="">Select City</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  {/* Add more cities as needed */}
                </select>
              </div>
            </div>
            <button onClick={onContinueClick}>Confirm Order</button>

          </div>
          <div style={{ width: "30%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "30px" }}>
            <h3 style={{ fontSize: "17px", fontWeight: "400", color: "#222" }}>Order Summary</h3>
            <div style={{ width: "40%" }}>
              <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{ width: "100%" }} />
            </div>
            <p>Product Name: {product.name}</p>
            <p>Total Amount: {product.price}</p>
            <p>Advance Amount: ₹ {Math.round(product.price * 0.3)}</p>


          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
