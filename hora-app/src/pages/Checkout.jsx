import { useLocation } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import checkOutImage from '../assets/checkout-problem.png';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT, SAVE_LOCATION_ENDPOINT } from '../utills/apiconstants';
import { PAYMENT, PAYMENT_STATUS, API_SUCCESS_CODE } from '../utills/apiconstants';
import { Button, Card, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function Checkout() {
  const { orderType, selectedDishDictionary, selectedDishPrice, selectedCount, peopleCount } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const { subCategory, product } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTimeSlotError, setSelectedTimeSlotError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pincodeReqError , setPincodeReqError] = useState(false);
  const [pinCodeError, setPinCodeError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [combinedDateTime, setCombinedDateTime] = useState(null);
  const [combinedDateTimeError, setCombinedDateTimeError] = useState(false);

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


const pincodes =[
  "560063", "560030", "560034", "560007", "560092", "560024", "560045", "560003", "560050", "562107",
  "560064", "560047", "560026", "560086", "560002", "560070", "560073", "560053", "560085", "560043",
  "560017", "560001", "560009", "560025", "560083", "560076", "560004", "560079", "560103", "560046",
  "562157", "560010", "560049", "560056", "560068", "560093", "560018", "560040", "560097", "560061",
  "562130", "560067", "560036", "560029", "560062", "560037", "560071", "562125", "560016", "560100",
  "560005", "560065", "560019", "560021", "560022", "560013", "560087", "560008", "560051", "560102",
  "560104", "560048", "560094", "560066", "560038", "560078", "560006", "560014", "560015", "560041",
  "560069", "560011", "560020", "560084", "560096", "560098", "560095", "560077", "560074", "560054",
  "560023", "560033", "560055", "560099", "560072", "560039", "560075", "560032", "560058", "560059",
  "560080", "560027", "560012", "560042", "560028", "560052", "560091", "110001", "110002", "110003",
  "110004", "110005", "110006", "110007", "110008", "110009", "110010", "110011", "110012", "110013",
  "110014", "110015", "110016", "110017", "110018", "110019", "110020", "110021", "110022", "110023",
  "110024", "110025", "110026", "110027", "110028", "110029", "110030", "110031", "110032", "110033",
  "110034", "110035", "110036", "110037", "110038", "110039", "110040", "110041", "110042", "110043",
  "110044", "110045", "110046", "110047", "110048", "110049", "110051", "110052", "110053", "110054",
  "110055", "110056", "110057", "110058", "110059", "110060", "110061", "110062", "110063", "110064",
  "110065", "110066", "110067", "110068", "110070", "110071", "110073", "110074", "110075", "110076",
  "110078", "110081", "110082", "110083", "110084", "110085", "110086", "110087", "110088", "110091",
  "110092", "110093", "110094", "110095", "110096", "201301", "201302", "201303", "201304", "201305",
  "201306", "201307", "201309", "201312", "201308", "201312", "201315", "201310", "201318", "122001",
  "122002", "122003", "122006", "122008", "122009", "122010", "122011", "122015", "122016", "122017",
  "122018", "201009", "201001", "201002", "201003", "201004", "201005", "201006", "201007", "201008",
  "201010", "201011", "201012", "201013", "201014", "201015", "201016", "201017", "201018", "121002",
  "121001", "121003", "121004", "121005", "121006", "121007", "121008", "121009", "121010", "122022"
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
      setPincodeReqError(false)
    } else {
      setPincodeReqError(true)
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
      console.log("Inside saveAddress");

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
          "no_of_people": 0,
          "type": 1,
          "fromId": storedUserID,
          "is_discount": "0",
          "addressId": addressID,
          "order_date": selectedDate.toDateString(),
          "no_of_burner": 0,
          "order_locality": city,
          "total_amount": product.price,
          "orderApplianceIds": [],
          "payable_amount": product.price,
          "is_gst": "0",
          "order_type": true,
          "items": [product._id],
          "decoration_comments": comment,
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
      price: Math.round(product.price * 0.3),
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
          setPincodeReqError(true)
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



  const contactUsRedirection = () => {
    window.open('https://wa.me/917338584828?text=Hello%20I%20have%20some%20queries%20for%20decoration%20services', '_blank');
  };

  return (
    <div className="App">
      {
        window.innerWidth > 800 ?
          <div style={{ padding: "1% 2%", backgroundColor: "#edededc9" }}>
            <div style={{ display: "flex", alignItems: "start", margin: "0 !important", padding: "10px 0" }} className='checoutSec my-3 gap-3'>
              <div style={{ width: "40%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px", backgroundColor: "#fff", borderRadius: "20px" }} className='leftSeccheckout'>
                <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 8px 0", lineHeight: "35px" }}>Booking Details</h2>
               
                  <div className='border border-danger p-1 px-3 rounded bg-danger-subtle text-black text-center' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>
                    The decorator requires approximately 40-90 minutes to fulfill the service.
                  </div>
                
                <div style={{ display: 'flex', margin: "8px 0px 10px", flexDirection: "row" }} className='row align-items-between justify-content-between   align-items-lg-center justify-content-lg-between'>
                  <CustomDatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} combinedDateTimeError={combinedDateTimeError} selectedDateError={selectedDateError} />
                  <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot} combinedDateTimeError={combinedDateTimeError} selectedTimeSlotError={selectedTimeSlotError} />
                </div>
                {combinedDateTimeError && <p className="text-danger" style={{ fontSize: '12px', marginBottom: "0px" }}>The selected date and time must be at least 24 hours from now.</p>}

                <div className='checkoutInputType border-1 rounded-4  ' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                  <h4 style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marginBottom: "4px" }}>Share your comments (if any)</h4>
                  <textarea className=' rounded border border-1 p-1 '
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
                      className=' rounded border border-1 p-1'
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
                      type="text" className=' rounded border border-1 p-1'
                      value={pinCode}
                      onChange={handlePinCodeChange}
                    />
                    {pinCode && <p className={`p-0 m-0 ${pinCodeError ? "text-danger" : "text-success"}`}>{`Service ${pinCodeError ? 'not' : ''} available in your area!`}</p>}
                    {pincodeReqError && <p className={`p-0 m-0 ${pincodeReqError ? "text-danger" : ""}`}>This field is required!</p>}   
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                    <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>City:</label>
                    <select value={city} className=' rounded border border-1 p-1' onChange={handleCityChange}>
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

             
                <div className="rightSeccheckout" style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18) ", padding: "20px", backgroundColor: "#fff", borderRadius: "20px", width: "59%" }} >
                  <div className='righysercchefinner'>
                    <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 11px 0", lineHeight: "35px" }}>Order Summary</h3>
                    <div className='d-flex flex-column flex-lg-row'>
                      <div>
                        <img className='checkoutRightImg' src={`https://horaservices.com/api/uploads/${product.featured_image}`} />
                      </div>
                      <div className='prod-detailsp'>

                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "10px 0 20px 0" }}>
                          <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 700 }}>Product Name:</label>
                          <p style={{ margin: 0, windth: "100%" }}>{product.name}</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 0 20px 0" }}>
                          <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 700 }}>Total Amount:</label>
                          <p style={{ margin: 0, windth: "100%" }}>{product.price}</p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "0 0 20px 0" }}>
                          <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 700 }}>Advance Amount:</label>
                          <p style={{ margin: 0, windth: "100%" }}>₹ {Math.round(product.price * 0.3)}</p>
                        </div>
                      </div>
                    </div>
                    <div >

                      <div className='d-flex justify-content-center align-items-center mt-3 mb-0'>
                        <h5 className=''>Need more info?</h5>
                        <button onClick={contactUsRedirection}  style={{ border: "2px solid rgb(157, 74, 147)", color: "rgb(157, 74, 147)" }} className=' rounded-5 ms-1 contactus-redirection'>Contact Us</button>
                      </div>

                      <div className='px-1 py-3 border rounded my-2 cancellatiop-policy' style={{
                        background: "rgb(157, 74,147, 28%)"
                      }}>
                        <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className=' text-center m-1'>Cancellation and order change policy</p>
                        <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>Till the order is not assign to the service provider , 100% of the amount will be refunded, othewise 50%of the advance will be deducted as a cancellation charges to componsate the service provider. </p>
                        <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>The order cannot be edited after paying the advance customers can cancel the order and replace it with a new order with the required changes.</p>
                      </div>


                    </div>
                  </div>
                </div>
            
              
            </div>

          </div>
          :
          <div style={{ padding: "1% 2%", backgroundColor: "#edededc9" , position: "relative"  }} className='checkoutmobileview'>
            <div className='checoutSec my-3 gap-3'>
              <div>
                {/* <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 8px 0", lineHeight: "35px" }}>Booking Details</h2> */}
              
                  <div className='border border-danger p-1 px-3 rounded bg-danger-subtle text-black text-center decoratore-note' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>
                    The decorator requires approximately 40-90 minutes to fulfill the service.
                  </div>
                
                <div style={{ display: 'flex', margin: "8px 0px 10px", flexDirection: "row" }} className='row align-items-between justify-content-between  align-items-lg-center justify-content-lg-between'>
                  <CustomDatePicker handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} combinedDateTimeError={combinedDateTimeError} selectedDateError={selectedDateError} />
                  <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot} combinedDateTimeError={combinedDateTimeError} selectedTimeSlotError={selectedTimeSlotError} />
                  {combinedDateTimeError && <p className="text-danger" style={{ fontSize: '12px' }}>The selected date and time must be at least 24 hours from now.</p>}
                </div>
             
                  <div className="rightSeccheckout" style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18) ", padding: "20px", backgroundColor: "#fff", borderRadius: "20px" }} >
                    <div className='rightcheckoutsec'>
                      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", margin: "0 0 5px 0" }}>
                        <label style={{ color: "rgb(146, 82, 170)", fontSize: "16px", marigin: "16px 0 6px", fontWeight: 700 }}>Total Amount:</label>
                        <p style={{ margin: 0, windth: "100%", color: "rgb(146, 82, 170)", fontSize: "16px", fontWeight: 700 }}>₹  {product.price}</p>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", margin: "0 0 5px 0" }}>
                        <label style={{ color: "rgb(146, 82, 170)", fontSize: "16px", marigin: "16px 0 6px", fontWeight: 700 }}>Advance Amount:</label>
                        <p style={{ margin: 0, windth: "100%", color: "rgb(146, 82, 170)", fontSize: "16px", fontWeight: 700 }}>₹ {Math.round(product.price * 0.3)}</p>
                      </div>
                      <div style={{ display: "flex", padding: 7, flexDirection: 'row', borderRadius: 5, marginTop: 5, marginBottom: 10, backgroundColor: 'rgba(211, 75, 233, 0.10)', justifyContent: 'flex-start', alignItems: 'top' }}>
                        <div>
                          <img style={{ width: "20px", marginRight: "10px" }} src={require('../assets/info.png')} />
                        </div>
                        <div style={{ fontSize: 9, color: '#9252AA', fontWeight: '400', marginLeft: 4 }}>
                          Balance payment is to be paid to executor after order completion.
                        </div>
                      </div>
                    
                      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                        <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", fontWeight: "600" }}>Address:</label>
                        <textarea
                          type="text"
                          className=' rounded border border-1 p-1'
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
                          type="text" className=' rounded border border-1 p-1'
                          value={pinCode}
                          onChange={handlePinCodeChange}
                        />
                        {pinCode && <p className={`p-0 m-0 ${pinCodeError ? "text-danger" : "text-success"}`}>{`Service ${pinCodeError ? 'not' : ''} available in your area!`}</p>}
                        {pincodeReqError && <p className={`p-0 m-0 ${pincodeReqError ? "text-danger" : ""}`}>This field is required!</p>}   
                      </div>
                      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }} className='checkoutInputType'>
                        <label style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marigin: "16px 0 6px", fontWeight: 600 }}>City:</label>
                        <select value={city} className=' rounded border border-1 p-1' onChange={handleCityChange}>
                          <option value="">Select City</option>
                          <option value="Bangalore">Bangalore</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Mumbai">Mumbai</option>
                          {/* Add more cities as needed */}
                        </select>
                        {cityError && <p className={`p-0 m-0 ${cityError ? "text-danger" : ""}`}>This field is required!</p>}
                      </div>
                      <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", margin: "20px 0 0" }}>
                        <div style={{ width: "50%" }}>
                          <img className='checkoutRightImg' src={`https://horaservices.com/api/uploads/${product.featured_image}`} />
                        </div>
                        <div style={{ width: "50%", paddingLeft: "10px" }}>
                          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", margin: "20px 0 20px 0" }}>
                            <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: "#222" }}>{product.name}</p>
                            <p style={{ margin: 0, fontSize: "12px", fontWeight: "600", color: "#222" }}>₹  {product.price}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className='checkoutInputType border-1 rounded-4  my-3' style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                        <h4 style={{ color: "rgb(146, 82, 170)", fontSize: "14px", marginBottom: "4px" }}>Share your comments (if any)</h4>
                        <textarea className=' rounded border border-1 p-1 decor-commemnts'
                          value={comment}
                          onChange={handleComment}
                          rows={4}
                          placeholder="No Extra charges for customizing ballon color or replacing tags(Happy Birthday / Anniversary). Chages wil be applied for additional items"
                        />
                      </div>
                      <div >
                      </div>
                    </div>

                  </div>

                <div className='d-flex justify-content-center align-items-center mt-3 mb-0'>
                  <h5 className=''>Need more info?</h5>
                  <button onClick={contactUsRedirection}  style={{ border: "2px solid rgb(157, 74, 147)", color: "rgb(157, 74, 147)" }} className=' rounded-5 ms-1 contactus-redirection'>Contact Us</button>
                </div>

                <div className='px-1 py-3 border rounded my-2 cancellatiop-policy' style={{
                  background: "rgb(157, 74,147, 28%)"
                }}>
                  <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className=' text-center m-1'>Cancellation and order change policy</p>
                  <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>Till the order is not assign to the service provider , 100% of the amount will be refunded, othewise 50%of the advance will be deducted as a cancellation charges to componsate the service provider. </p>
                  <p style={{ fontSize: "13px", color: "rgb(157, 74, 147)" }} className='m-1'>The order cannot be edited after paying the advance customers can cancel the order and replace it with a new order with the required changes.</p>
                </div>

              </div>



            </div>
          
            { window.innerWidth < 800 ? 
                 <div style={{
                  position:"fixed" , 
                  bottom:0 , 
                  left:0,
                  width:"100%",
                  backgroundColor:"#fff",
                  borderTop:"1px solid #efefef",
                  backgroundColor:"#EDEDED"
                }}
               >

                <button className="blue-btn chkeoutBottun" onClick={onContinueClick}>Confirm Order</button>
                </div>
                : 
                null
                }

          </div>

      }


    </div>
  );
}

export default Checkout;





export const CustomDatePicker = ({ handleDateChange, selectedDate, showDatePicker, setShowDatePicker, selectedDateError, combinedDateTimeError }) => {

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  return (
    <div className={`d-flex flex-column border border-1 rounded-4  timepkerSec ${combinedDateTimeError ? 'border-danger' : ''} `}>
      <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Booking Date</p>
      <Dropdown show={showDatePicker} onToggle={toggleDatePicker} className='border-none p-0'>
        <Dropdown.Toggle
          variant="outline-secondary"
          className={`w-100 m-0 p-0 d-flex justify-content-between align-items-center text-black ${selectedDateError ? 'border-danger' : ''}`}
          style={{ cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}        >
          <span style={{ fontSize: '12px' }} className='m-0 p-0 '>{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}</span>
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

export const CustomTimePicker = ({ selectedTimeSlot, handleTimeSlotChange, generateTimeSlots, selectedTimeSlotError, combinedDateTimeError }) => {
  return (
    <div className={`timepkerSec d-flex flex-column border border-1 ${combinedDateTimeError ? 'border-danger' : ''}  ${selectedTimeSlotError ? 'border-danger' : ""} rounded-4 `}>
      <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Time</p>
      <div>
        <Form.Control
          as="select"
          value={selectedTimeSlot}
          onChange={handleTimeSlotChange}
          style={{ fontSize: "14px",  cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}
        >
          <option value="">Select a time slot</option>
          {generateTimeSlots().map((timeSlot, index) => (
            <option key={index} value={timeSlot}>
              {timeSlot}
            </option>
          ))}
        </Form.Control>
      </div>
    </div>
  )
}