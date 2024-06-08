import { useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import checkOutImage from '../assets/checkout-problem.png';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT } from '../utills/apiconstants';
import { PAYMENT, PAYMENT_STATUS,API_SUCCESS_CODE } from '../utills/apiconstants';


function Checkout() {
  const { orderType , selectedDishDictionary , selectedDishPrice , selectedDishes } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const { subCategory, product } = useLocation().state || {}; // Accessing subCategory and itemName safely
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [address, setAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
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

  const openWhatsppLink = () =>{
    window.open("https://wa.me/+918982321487/?text=Hi%2CI%20saw%20your%20website%20and%20want%20to%20know%20more%20about%20payment%20in%20Decoration%20services", "_blank");
  }

  
  const onContinueClick = async () => {

    if (localStorage.getItem("isLoggedIn") != "true") {
      alert("Please login first to book the order")
      // Redirect to the login page
      navigate('/login', { state: { from: window.location.pathname, subCategory, product } });
    }
    else{
      const apiUrl = BASE_URL + PAYMENT;

      const storedUserID = await localStorage.getItem('userID');
      const phoneNumber = await localStorage.getItem('mobileNumber')
  
      console.log(storedUserID);
      console.log(phoneNumber);
  
      const randomInteger = Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000));
  
      let merchantTransactionId = randomInteger
      const requestData = {
        user_id: storedUserID,
        price: Math.round(product.price * 0.3),
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
  
        
        window.location.href = response.data
        handleConfirmOrder(merchantTransactionId);
  
      } catch (error) {
        // Handle errors
        console.error('API error:', error);
      }
    }
    

  }



  const handleConfirmOrder = async (merchantTransactionId) => {
		
    try {
        
        const message = await checkPaymentStatus(merchantTransactionId);
        const storedUserID = await localStorage.getItem('userID');
        //const locality = await AsyncStorage.getItem("Locality");
        
        if (message === 'PAYMENT_SUCCESS') {
            const url = BASE_URL + CONFIRM_ORDER_ENDPOINT;
            const requestData = {
                "toId": "",
                "order_time": selectedTimeSlot.toLocaleTimeString(),
                "no_of_people": 0,
                "type": 1,
                "fromId": storedUserID,
                "is_discount": "0",
                "addressId": address + pinCode,
                "order_date": selectedDate.toDateString(),
                "no_of_burner": 0,
                "order_locality": city,
                "total_amount": product.price,
                "orderApplianceIds": [],
                "payable_amount": product.price,
                "is_gst": "0",
                "order_type": true,
                "decoration_comments":comment
            }
            
            const token = await localStorage.getItem('token');

            console.log(requestData);

            const response = await axios.post(url, requestData, {
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': token
                },
            });

            if (response.status === API_SUCCESS_CODE) {
                alert("Order placed successfully");
            }
        }
    } catch (error) {
        console.log('Error Confirming Order:', error.message);
    }
    
};

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
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "30px" }} className='checoutSec'>
          <div style={{ width: "60%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }} className='leftSeccheckout'>
            <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222" , borderBottom:"1px solid #f0f0f0"  , margin:"0 0 8px 0" , lineHeight:"35px"}}>Booking Details</h2>
            <div style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>The decorator requires approximately 40-90 minutes to fulfill the service</div>

            <div style={{ display: 'flex' , margin:"8px 0px 10px" }} className='checkoutInputType'>
              <div className='datepickerSec'>
                <h5 style={{ marginBottom: "4px" , color:"rgb(146, 82, 170)"}}>Select Date</h5>
                <DatePicker
                  selected={selectedDate}
                  onChange={handleDateChange}
                  minDate={new Date()} // Disable dates before today's date
                  placeholderText="Select Date"
                  showTimeSelect={false} // Remove the clock
                />
              </div>
            
          <div className='timepkerSec'>
                <h5 style={{ marginBottom: "4px" , color:"rgb(146, 82, 170)"}}>Select Time</h5>
                <select
                value={selectedTimeSlot}
                onChange={handleTimeSlotChange}
                style={{fontSize: "14px" , width:"242px" , padding:"3px 6px 3px 3px"}}
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
            <div className='checkoutInputType' style={{display:"flex" , justifyContent:"center", flexDirection:"column" }}>
              <h4 style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marginBottom: "4px"}}>Customizable comments</h4>
              <textarea
                value={comment}
                onChange={handleComment}
                rows={4}
                placeholder="Enter your comment."
              />
            </div>
            <div>
              <div style={{display:"flex" , justifyContent:"center", flexDirection:"column" }} className='checkoutInputType'>
                <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px"  , fontWeight:"600"}}>Address:</label>
                <textarea
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  rows={4}
                placeholder="Enter your Address."
                />
              </div>
              <div  style={{display:"flex" , justifyContent:"center", flexDirection:"column" }} className='checkoutInputType'>
                <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marigin:"16px 0 6px" , fontWeight:600}}>Pin Code:</label>
                <input
                  type="text"
                  value={pinCode}
                  onChange={handlePinCodeChange}
                />
              </div>
              <div  style={{display:"flex" , justifyContent:"center", flexDirection:"column" }} className='checkoutInputType'>
                <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marigin:"16px 0 6px" , fontWeight:600}}>City:</label>
                <select value={city} onChange={handleCityChange}>
                  <option value="">Select City</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Mumbai">Mumbai</option>
                  {/* Add more cities as needed */}
                </select>
              </div>
            </div>
            <button onClick={onContinueClick} className="blue-btn chkeoutBottun">Confirm Order</button>

          </div>

          {orderType == '1' ? (
            <div className="rightSeccheckout" style={{  boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222" , borderBottom:"1px solid #f0f0f0" , margin:"0 0 11px 0"  , lineHeight:"35px"}}>Order Summary</h3>
            <div>
              <img  className='checkoutRightImg' src={`https://horaservices.com/api/uploads/${product.featured_image}`} />
            </div>
            <div  style={{display:"flex" , justifyContent:"center", flexDirection:"column" , margin:"20px 0 20px 0"}}>
              <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marigin:"16px 0 6px" , fontWeight:700}}>Product Name:</label>
              <p style={{margin:0 , windth:"100%"}}>{product.name}</p>
              </div>
              <div style={{display:"flex" , justifyContent:"center", flexDirection:"column" , margin:"0 0 20px 0" }}>
              <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marigin:"16px 0 6px" , fontWeight:700}}>Total Amount:</label>
              <p style={{margin:0 , windth:"100%"}}>{product.price}</p>
              </div>
              <div style={{display:"flex" , justifyContent:"center", flexDirection:"column" , margin:"0 0 20px 0" }}>
              <label style={{color:"rgb(146, 82, 170)" , fontSize:"14px" , marigin:"16px 0 6px" , fontWeight:700}}>Advance Amount:</label>
              <p style={{margin:0 , windth:"100%"}}>₹ {Math.round(product.price * 0.3)}</p>
              </div>
        
          </div>
         ) : orderType =='2' ? (
          <div className="rightSeccheckout chef" style={{  boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }}>
            <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222" , borderBottom:"1px solid #f0f0f0" , margin:"0 0 11px 0"  , lineHeight:"35px"}}>Order Summary</h3>
            <div className='righysercchefinner'>
              {
                Object.values(selectedDishDictionary).map((item)=>{
                  return(
                <div className="ordersummaryproduct">
                <div>
                <img  className='checkoutRightImg chef' src={`https://horaservices.com/api/uploads/${item.image}`} />
                </div>
                <div style={{ color:"rgb(146, 82, 170)" , fontWeight:"600" }}>
                <p style={{margin:"0 0 0 0" , padding:"0"}} className="ordersummeryname">{item.name}</p>
                <p className="ordersummeryprice">{item.price}</p>
                </div>
                </div>
                  )
                })
              }
              </div>
              <div className='chef-divider' style={{marginTop:"20px"}}></div> 
            <p style={{ color:"rgb(146, 82, 170)" , fontWeight:"600" , fontSize:"20px" , margin:"9px 0 0 0" , padding:"0"}}>Total: {selectedDishPrice}</p>
            <p style={{ color:"rgb(146, 82, 170)" , fontWeight:"600" , fontSize:"20px" , margin:"0" , padding:"0"}}>Advance payment: ₹ {Math.round(selectedDishPrice / 5)}</p>

          </div>
         ) : (
          null
         )}
        
        </div>
       
      </div>
    
    </div>
  );
}

export default Checkout;
