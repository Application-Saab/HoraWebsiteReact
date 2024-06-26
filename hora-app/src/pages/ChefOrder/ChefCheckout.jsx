import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import checkOutImage from '../../assets/checkout-problem.png';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT, SAVE_LOCATION_ENDPOINT } from '../../utills/apiconstants';
import { PAYMENT, PAYMENT_STATUS, API_SUCCESS_CODE } from '../../utills/apiconstants';
import { Button, Card, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function ChefCheckout() {
  let { peopleCount, orderType, selectedDishDictionary, selectedDishPrice, selectedDishes } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const { subCategory, product } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTimeSlotError, setSelectedTimeSlotError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [picodeReqError , setPicodeReqError] = useState(false);
  const [pinCodeError, setPinCodeError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [combinedDateTime, setCombinedDateTime] = useState(null);
  const [combinedDateTimeError, setCombinedDateTimeError] = useState(false);

  if (selectedDishes.length > 7){
    selectedDishPrice += 700
  }

  /// order.type is 2 for chef
  /// order.type is 1 for decoration
  /// order.type is 3 for waiter
  /// order type 4  bar tender
  /// order type 5 cleaner
  /// order type 6 Single Plate Meal
  /// order type 7 Live Buffer
  /// order type 8 Bulk Catering.
  const handleComment = (e) => {
    setComment(e.target.value);
  };

  const handleDateChange = (date) => {
    console.log(`Date selected: ${date}`);
    setSelectedDate(date);
    setSelectedDateError(false);
    combineDateTime(date, selectedTimeSlot); // Pass the current selected time slot
};

const handleTimeSlotChange = (event) => {
    const timeSlot = event.target.value;
    console.log(`Time slot selected: ${timeSlot}`);
    setSelectedTimeSlot(timeSlot);
    setSelectedDateError(false);
    combineDateTime(selectedDate, timeSlot); // Pass the current selected date
};

const combineDateTime = (date, timeSlot) => {
    console.log(`Combining Date: ${date} with Time Slot: ${timeSlot}`);
    if (date && timeSlot) {
        const [startHour, period] = timeSlot.split('-')[0].trim().split(' ');
        let hour = parseInt(startHour.split(':')[0], 10);
        if (period === 'PM' && hour !== 12) {
            hour += 12;
        } else if (period === 'AM' && hour === 12) {
            hour = 0;
        }

        const combinedDate = new Date(date);
        console.log(`Initial Combined Date: ${combinedDate}`);
        combinedDate.setHours(hour);
        combinedDate.setMinutes(0);
        combinedDate.setSeconds(0);
        combinedDate.setMilliseconds(0);
        console.log(`Final Combined Date: ${combinedDate}`);
        setCombinedDateTime(combinedDate);
        validateDateTime(combinedDate);
    }
};

const validateDateTime = (combinedDate) => {
    const now = new Date();
    console.log(`Combined Date for Validation: ${combinedDate}`);
    const timeDifference = combinedDate - now;
    console.log(`Time Difference: ${timeDifference} ms`);
    // Check if the combined date and time are at least 24 hours in the future
    if (timeDifference < 24 * 60 * 60 * 1000) { // 24 hours in milliseconds
        console.log("The selected date and time are less than 24 hours from now.");
        setCombinedDateTimeError(true);
    } else {
        console.log("The selected date and time are valid.");
        setCombinedDateTimeError(false);
    }
};

const generateTimeSlots = () => {
    const startTime = 7; // Starting hour
    const endTime = 22; // Ending hour
    const interval = orderType === 2 ? 1 : 3; // Interval in hours

    const timeSlots = [];
    for (let hour = startTime; hour < endTime; hour += interval) {
        const startTimeFormatted = hour < 10 ? `0${hour}:00 AM` : `${hour % 12 || 12}:00 ${hour < 12 ? 'AM' : 'PM'}`;
        const endTimeFormatted = hour + interval < 10 ? `0${hour + interval}:00 AM` : `${(hour + interval) % 12 || 12}:00 ${hour + interval < 12 ? 'AM' : 'PM'}`;
        timeSlots.push(`${startTimeFormatted} - ${endTimeFormatted}`);
    }

    return timeSlots;
};


  const pincodes = ['560063', '560030', '560034', '560007', '560092', '560024', '560045', '560003', '560050', '562107', '560064', '560047'
    , '560026', '560086', '560002', '560070', '560073', '560053', '560085', '560043', '560017', '560001', '560009', '560025',
    '560083', '560076', '560004', '560079', '560103', '560046', '562157', '560010', '560049', '560056', '560068', '560093',
    '560018', '560040', '560097', '560061', '562130', '560067', '560036', '560029', '560062', '560037',
    '560071', '562125', '560016', '560100', '560005', '560065', '560019', '560021', '560022', '560013', '560087', '560008', '560051', '560102', '560104',
    '560048', '560094', '560066', '560038', '560078', '560006', '560014', '560015', '560041', '560069', '560011', '560020', '560084', '560096', '560098',
    '560095', '560077', '560074', '560054', '560023', '560033', '560055', '560099', '560072', '560039', '560075', '560032', '560058', '560059', '560080',
    '560027', '560012', '560042', '560028', '560052', '560091'
  ]

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (e.target.value) {
      setAddressError(false)
    } else {
      setAddressError(true)
    }
  };

  const handlePinCodeChange = (e) => {
    if (e.target.value) {
      setPicodeReqError(false)
    } else {
      setPicodeReqError(true)
    }
    setPinCode(e.target.value);
    if (((e.target.value).length) == 6) {
      const validpin = pincodes.some((validPin) => validPin === e.target.value)
      if (!validpin) {
        setPinCodeError(true)
      } else {
        setPinCodeError(false)
      }
    } else {
      setPinCodeError(true)
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    if (e.target.value) {
      setCityError(false)
    } else {
      setCityError(true)
    }
  };

  function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  const openWhatsppLink = () => {
    window.open("https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20payment%20in%20Decoration%20services", "_blank");
  }


  const saveAddress = async () => {
    try {

      const url = BASE_URL + SAVE_LOCATION_ENDPOINT;
  
      // Retrieve userID from localStorage
      let userId = localStorage.getItem("userID");
  
      if (!userId) {
        console.error('Error retrieving userID');
        return;
      }
  
      const address2 = address + pinCode;
  
  
      const requestData = {
        address1: address2,
        address2: address2,
        locality: city,
        city: city,
        userId: userId
      };
  
      const token = localStorage.getItem('token');
  
      const response = await axios.post(url, requestData, {
        headers: {
          'Content-Type': 'application/json',
          'authorization': token
        },
      });
  
      if (response.status === API_SUCCESS_CODE) {
        // Handle navigation in React (e.g., using React Router)
        console.log("Address saved successfully");
        return response.data.data._id
      }
    } catch (error) {
      console.log('Error  Data:', error.message);
    }
  };

  const onContinueClick = async () => {

    const apiUrl = BASE_URL + PAYMENT;

    const storedUserID = await localStorage.getItem('userID');
    const phoneNumber = await localStorage.getItem('mobileNumber')

    let merchantTransactionId;

    try {

      const addressID = await saveAddress();     
      const storedUserID = await localStorage.getItem('userID');

      const url = BASE_URL + CONFIRM_ORDER_ENDPOINT;
      const requestData = {
        "toId": "",
        "order_time": selectedTimeSlot,
        "no_of_people": peopleCount,
        "type": 2,
        "fromId": storedUserID,
        "is_discount": "0",
        "addressId": addressID,
        "order_date": selectedDate.toDateString(),
        "no_of_burner": 0,
        "order_locality": city,
        "total_amount": selectedDishPrice,
        "orderApplianceIds": [],
        "payable_amount": selectedDishPrice,
        "is_gst": "0",
        "order_type": true,
        "items" : selectedDishes,
        "status": 0
      }

        const token = await localStorage.getItem('token');

        const response = await axios.post(url, requestData, {
          headers: {
            'Content-Type': 'application/json',
            'authorization': token
          },
        });

        merchantTransactionId = response.data.data._id
      //}
    } catch (error) {
      console.log('Error Confirming Order:', error.message);
    }



    const requestData2 = {
      user_id: storedUserID,
      price: Math.round(selectedDishPrice * 0.2),
      phone: phoneNumber,
      name: '',
      merchantTransactionId: merchantTransactionId
    };
    try {
      if (city && pinCode && address && selectedTimeSlot && selectedDate) {
        if (combinedDateTimeError) {
          alert("The selected date and time must be at least 24 hours from now.");
          return;
        }
        const response2 = await axios.post(apiUrl, requestData2, {
          headers: {
            'Content-Type': 'application/json',
          },
        });

        
        window.location.href = response2.data

      }else{
        if(!city){
          setCityError(true)
        }
        if (!pinCode) {
          setPicodeReqError(true)
          setPinCodeError(true)
        }
        if (!address) {
          setAddressError(true)
        }
        if (!selectedTimeSlot) {
          setSelectedTimeSlotError(true)
        }
        if (!selectedDate) {
          setSelectedDateError(true)
        }
      }

    } catch (error) {
      // Handle errors
      console.error('API error:', error);
    }

  }




  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: "flex", alignItems: "start", height: '90vh' }} className='checoutSec my-3 gap-5 overflow-auto'>
          <div style={{ width: "60%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }} className='leftSeccheckout'>
            <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 8px 0", lineHeight: "35px" }}>Booking Details</h2>
            <div className='border border-danger p-1 px-3 rounded bg-danger-subtle text-black text-center' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>The decorator requires approximately 40-90 minutes to fulfill the service</div>
            <div style={{ display: 'flex', margin: "8px 0px 10px" }} className='flex-lg-row flex-column align-items-between justify-content-center  align-items-lg-center justify-content-lg-between'>
            <div className='col-6'>  <CustomDatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} selectedDateError={selectedDateError}/></div>
             <div className='col-6 ms-1'> <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot} selectedTimeSlotError={selectedTimeSlotError}/></div>
            </div>
            <div className='checkoutInputType border-2 rounded-4  ' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
              <h4 style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marginBottom: "4px" }}>Share your comments (if any)</h4>
              <textarea className=' rounded border border-2 p-1 '
                value={comment}
                onChange={handleComment}
                rows={4}
                placeholder="Enter your comment."
              />
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", fontWeight: "600" }}>Address:</label>
                <textarea
                  type="text"
                  className=' rounded border border-2 p-1'
                  value={address}
                  onChange={handleAddressChange}
                  rows={4}
                  placeholder="Enter your Address."
                />
                {addressError && <p className={`p-0 m-0 ${addressError ? "text-danger" : ""}`}>This field is required!</p>}
              </div>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>Pin Code:</label>
                <input
                  type="text"className=' rounded border border-2 p-1'
                  value={pinCode}
                  onChange={handlePinCodeChange}
                />
                {pinCode && <p className={`p-0 m-0 ${pinCodeError ? "text-danger" : "text-success"}`}>{`Service ${pinCodeError ? 'not' : ''} available in your area!`}</p>}
              </div>
              <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>City:</label>
                <select value={city} className=' rounded border border-2 p-1' onChange={handleCityChange}>
                  <option value="">Select City</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  {/* Add more cities as needed */}
                </select>
                {cityError && <p className={`p-0 m-0 ${cityError ? "text-danger" : ""}`}>This field is required!</p>}
              </div>
            </div>
            <button onClick={onContinueClick} className="blue-btn chkeoutBottun">Confirm Order</button>
          </div>

         
            <div className="rightSeccheckout chef" style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 11px 0", lineHeight: "35px" }}>Order Summary</h3>
              <div className='righysercchefinner'>
                {
                  Object.values(selectedDishDictionary).map((item) => {
                    return (
                      <div className="ordersummaryproduct">
                        <div>
                          <img className='checkoutRightImg chef' src={`https://horaservices.com/api/uploads/${item.image}`} />
                        </div>
                        <div style={{ color: "rgb(146, 82, 170)", fontWeight: "600" }}>
                          <p style={{ margin: "0 0 0 0", padding: "0" }} className="ordersummeryname">{item.name}</p>
                          <p className="ordersummeryprice">{item.price}</p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className='chef-divider' style={{ marginTop: "20px" }}></div>
              <p style={{ color: "rgb(146, 82, 170)", fontWeight: "600", fontSize: "20px", margin: "9px 0 0 0", padding: "0" }}>Total: {selectedDishPrice}</p>
              <p style={{ color: "rgb(146, 82, 170)", fontWeight: "600", fontSize: "20px", margin: "0", padding: "0" }}>Advance payment: ₹ {Math.round(selectedDishPrice / 5)}</p>

            </div>
          

        </div>

      </div>

    </div>
  );
}

export default ChefCheckout;





export const CustomDatePicker = ({ handleDateChange, selectedDate, showDatePicker, setShowDatePicker,selectedDateError }) => {

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  return (
    <div  className='d-flex flex-column border border-2 rounded-4 p-2'>
      <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Date</p>
      <Dropdown show={showDatePicker} onToggle={toggleDatePicker} className='border-none p-0'>
        <Dropdown.Toggle
          variant="outline-secondary"
          className={`w-100 m-0 p-0 d-flex justify-content-between align-items-center ${selectedDateError? 'border-danger' : ''}`}
          style={{ cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}        >
          <span className='m-0 p-0 '>{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}</span>
        </Dropdown.Toggle>

        <Dropdown.Menu
          show={showDatePicker}
          className="p-2"
          style={{ minWidth: 'auto' }}
        >
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            inline // Use inline to show the calendar
          />
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export const CustomTimePicker = ({ selectedTimeSlot, handleTimeSlotChange, generateTimeSlots,selectedTimeSlotError }) => {
  return (
    <div  className={`timepkerSec d-flex flex-column border border-2 ${selectedTimeSlotError?'border-danger':""} rounded-4 p-2`}>
      <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Time</p>
      <Form.Control
        as="select"
        value={selectedTimeSlot}
        onChange={handleTimeSlotChange}
        style={{ fontSize: "14px", width: "242px",cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}
      >
        <option value="">Select a time slot</option>
        {generateTimeSlots().map((timeSlot, index) => (
          <option key={index} value={timeSlot}>
            {timeSlot}
          </option>
        ))}
      </Form.Control>
    </div>
  )
}