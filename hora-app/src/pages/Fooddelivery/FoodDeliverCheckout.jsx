import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import axios from 'axios';
import { BASE_URL, GET_ADDRESS_LIST, CONFIRM_ORDER_ENDPOINT } from '../../utills/apiconstants';
import { PAYMENT, PAYMENT_STATUS, API_SUCCESS_CODE } from '../../utills/apiconstants';
import { Button, Card, Form } from 'react-bootstrap';
import { Dropdown, DropdownButton } from 'react-bootstrap';


function FoodDeliveryCheckout() {
  const { selectedDishes , selectedOption ,orderType, selectedDishDictionary, selectedDishPrice, totalOrderAmount , selectedDishQuantities , peopleCount} = useLocation().state || {}; // Accessing subCategory and itemName safely
  const [comment, setComment] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDateError, setSelectedDateError] = useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [selectedTimeSlotError, setSelectedTimeSlotError] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [pinCodeError, setPinCodeError] = useState(false);
  const [city, setCity] = useState('');
  const [cityError, setCityError] = useState(false);
  const navigate = useNavigate();
  const [showDatePicker, setShowDatePicker] = useState(false);
    const selectedDishData  = selectedDishes;
    const selectedDeliveryOption = selectedOption;
    const [deliveryCharges, setDeliveryCharges] = useState(300);
    const [packingCost, setpackingCost] = useState(200);
    const [includeDisposable, setIncludeDisposable] = useState(true); // State for checkbox
    const [includeTables, setIncludeTables] = useState(true);
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

  const selectedMealList = Object.values(selectedDishData).map(dish => {
    return {
        name: dish.name,
        image: dish.image,
        price: Number(dish.cuisineArray[0]),
        id: dish._id,
        mealId: dish.mealId
    };
});


const dishCount = selectedMealList.filter(x => x.mealId == "63f1b6b7ed240f7a09f7e2de" || x.mealId == "63f1b39a4082ee76673a0a9f" || x.mealId == "63edc4757e1b370928b149b3").length;
function calculateDiscountPercentage(peopleCount, dishCount ) {
    console.log(peopleCount + "===3333====" +  dishCount)
    if (dishCount <= 5) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 0;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 0;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 3.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 3.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 7.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 7.0;
        } else {
            return 10.0; // For 60-150 people, use the same discount percentage as 50-59 people
        }
    } else if (dishCount == 6) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 15;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 15;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 18.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 18.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 22.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 22.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 25;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 25;
        } else {
            return 25; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 7) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 15;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 15;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 18.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 18.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 22.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 22.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 25;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 25;
        } else {
            return 25; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 8) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 25;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 25;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 28;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 28.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 28.5;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 32.5;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 32.5;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 35.0;
        } else {
            return 35.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 9) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 30;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 30;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 33.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 33.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 37;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 37;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 40;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 40;
        } else {
            return 40; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 10) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 35;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 35;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 38.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 38.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 42.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 42.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 45.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 45.0;
        } else {
            return 45.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 11) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 40;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 40;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 43.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 43.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 47.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 47.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 50.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 50.0;
        } else {
            return 50.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 12) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 50;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 50.0;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 53.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 53.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 57.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 57.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 60.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 60.0;
        } else {
            return 60.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 13) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 53;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 53.0;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 56.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 56.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 60.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 60.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 63.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 63.0;
        } else {
            return 63.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 14) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 53;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 53.0;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 56.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 56.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 60.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 60.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 63.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 63.0;
        } else {
            return 63.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else if (dishCount == 15) {
        if (peopleCount >= 0 && peopleCount <= 10) {
            return 55;
        } else if (peopleCount >= 11 && peopleCount <= 19) {
            return 55.0;
        } else if (peopleCount >= 20 && peopleCount <= 29) {
            return 58.5;
        } else if (peopleCount >= 30 && peopleCount <= 39) {
            return 58.5;
        } else if (peopleCount >= 40 && peopleCount <= 49) {
            return 62.0;
        } else if (peopleCount >= 50 && peopleCount <= 59) {
            return 62.0;
        } else if (peopleCount >= 60 && peopleCount <= 69) {
            return 65.0;
        } else if (peopleCount >= 70 && peopleCount <= 99) {
            return 65.0;
        } else {
            return 65.0; // For 100-150 people, use the same discount percentage as 70-99 people
        }
    }
    else {

    }
}

// Assuming selectedMealList, peopleCount, and dishCount are defined earlier

const dishPrice = selectedMealList.reduce((total, dish) => total + dish.price, 0);
console.log("dishPrice" + dishPrice)
var totalPrice = selectedDeliveryOption === 'liveCatering' ?  ((dishPrice * peopleCount) * 1.1 + 6500).toFixed(0) : dishPrice * peopleCount;


const discountPercentage = calculateDiscountPercentage(peopleCount, dishCount);
console.log("discountPercentage" + discountPercentage)
var discountedPrice = selectedDeliveryOption === 'liveCatering' ? ((totalPrice - 6500) * (discountPercentage / 100)).toFixed(0) : (totalPrice * (discountPercentage / 100)).toFixed(0);


const calculateFinalTotal = () => {
    let finalTotal = totalPrice - parseFloat(discountedPrice);
    console.log(totalPrice, discountedPrice);

    console.log("finalTotal: " + finalTotal);

    if (selectedDeliveryOption === 'foodDelivery') {
        finalTotal += parseFloat(packingCost);
        console.log("finalTotal after packing cost: " + finalTotal);

        if (includeDisposable) {
            finalTotal += parseFloat((20 * peopleCount).toFixed(0));
            console.log("finalTotal after disposable cost: " + finalTotal);
        }
    } else if (selectedDeliveryOption === 'liveCatering') {
        if (includeTables) {
            finalTotal += 1200;
            console.log("finalTotal after table cost: " + finalTotal);
        }
    }

    console.log("finalTotal after adjustments: " + finalTotal.toFixed(0));
    return finalTotal.toFixed(0);
};


    // Function to calculate the advance payment
    const calculateAdvancePayment = () => {
        return Math.round(calculateFinalTotal() * 0.65);
    };


    // useEffect(() => {
    //     Object.values(selectedDishData).map((item) => cat.push(item.cuisineId[0]));
    // }, []);


    // useEffect(() => {
    //     if (selectedDeliveryOption === "foodDelivery") {
    //         setType(6)
    //     }
    //     else if (selectedDeliveryOption === "liveCatering") {
    //         setType(7)
    //     }
    //     console.log("Type " + type);
    // })

      const RenderDishQuantity = ({ item }) => {
        const itemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b6b7ed240f7a09f7e2de" || meal.id[0] === "63f1b39a4082ee76673a0a9f" || meal.id[0] === "63edc4757e1b370928b149b3").length

        const mainCourseItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b6b7ed240f7a09f7e2de").length
        const appetizerItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63f1b39a4082ee76673a0a9f").length
        const breadItemCount = selectedDishQuantities.filter(meal => meal.id[0] === "63edc4757e1b370928b149b3").length

        let quantity = item.quantity * peopleCount;

        if ((item.id[0] === "63f1b6b7ed240f7a09f7e2de" && mainCourseItemCount > 1) || (item.id[0] === "63f1b39a4082ee76673a0a9f" && appetizerItemCount > 1) || (item.id[0] === "63edc4757e1b370928b149b3" && breadItemCount > 1)) {
            if (itemCount <= 5) {
                quantity = quantity
            }
            else if (itemCount == 6) {
                quantity = quantity * (1 - 0.15)
            }
            else if (itemCount == 7) {
                console.log("quantity before" + quantity)
                quantity = quantity * (1 - 0.15)
                console.log("quantity after" + quantity)
            }
            else if (itemCount == 8) {
                quantity = quantity * (1 - 0.25)
            }
            else if (itemCount == 8) {
                quantity = quantity * (1 - 0.30)
            }
            else if (itemCount == 9) {
                quantity = quantity * (1 - 0.35)
            }
            else if (itemCount == 10) {
                quantity = quantity * (1 - 0.35)
            }
            else if (itemCount == 11) {
                quantity = quantity * (1 - 0.40)
            }
            else if (itemCount == 11) {
                quantity = quantity * (1 - 0.40)
            }
            else if (itemCount == 12) {
                quantity = quantity * (1 - 0.50)
            }
            else if (itemCount == 13) {
                quantity = quantity * (1 - 0.53)
            }
            else if (itemCount == 15) {
                quantity = quantity * (1 - 0.55)
            }
        }
        quantity = Math.round(quantity)
        let unit = item.unit;
        if (quantity >= 1000) {
            quantity = quantity / 1000;
            if (unit === 'Gram')
                unit = 'KG'
            else if (unit === 'ml')
                unit = 'L'
        }
        return (
            <div style={{ width: "46%", paddingEnd: 2, alignItems: 'center', borderRadius: 5, borderColor: '#DADADA', borderWidth: 0.5, flexDirection: 'row', marginRight: 15, marginBottom: 8 }}>
                <div style={{ marginLeft: 5, width: 40, height: 40, backgroundColor: '#F0F0F0', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 5 }}>
                    <img
            src={`https://horaservices.com/api/uploads/${item.image}`}
            alt={item.name}
            style={{ width: 50, height: 24 }}
          />
                </div>

                <div style={{ flexDirection: 'column', marginLeft: 1, width: 80 }}>
                    <p style={{ fontSize: 10, fontWeight: '500', color: '#414141' }}>{item.name}</p>
                    <p style={{ fontSize: 14, fontWeight: '700', color: '#9252AA', display: selectedDeliveryOption === 'liveCatering' ? 'none' : 'inline' }}>{quantity + ' ' + unit}</p>
                </div>
            </div>
        );
    };



  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedDateError(false);
    combineDateTime(date, selectedTimeSlot);
    console.log(date); // Print the selected date
  };

  const handleTimeSlotChange = (event) => {
    const timeSlot = event.target.value;
    setSelectedTimeSlot(event.target.value);
    setSelectedDateError(false);
    combineDateTime(selectedDate, timeSlot);
  };
  const combineDateTime = (date, timeSlot) => {
    if (date && timeSlot) {
      const [startHour] = timeSlot.split('-')[0].trim().split(':');
      const combinedDate = new Date(date);
      combinedDate.setHours(startHour);
      combinedDate.setMinutes(0);
      combinedDate.setSeconds(0);
      combinedDate.setMilliseconds(0);
      setCombinedDateTime(combinedDate);
      validateDateTime(combinedDate);
    }
  };
  const validateDateTime = (combinedDate) => {
    const now = new Date();
    const timeDifference = combinedDate - now;
  
    // Check if the combined date and time are at least 24 hours in the future
    if (timeDifference < 24 * 60 * 60 * 1000) { // 24 hours in milliseconds
      setCombinedDateTimeError(true);
    } else {
      setCombinedDateTimeError(false);
    }
  };
  

  const generateTimeSlots = () => {
    const startTime = 7; // Starting hour
    const endTime = 22; // Ending hour
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

  const pincodes = ['451606', '421510', '431020', '494823', '451660']

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    if (e.target.value) {
      setAddressError(false)
    } else {
      setAddressError(true)
    }
  };

  const handlePinCodeChange = (e) => {
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

  const contactUsRedirection = () => {
    window.open('https://wa.me/917338584828?text=Hello%20I%20have%20some%20queries%20for%20food%20delivery%20and%20live%20Catering%20service', '_blank');
};



  const onContinueClick = async () =>{
    alert("confime order clicked")
  }
  // const onContinueClick = async () => {
  //   const apiUrl = BASE_URL + PAYMENT;

  //   const storedUserID = await localStorage.getItem('userID');
  //   const phoneNumber = await localStorage.getItem('mobileNumber')

  //   console.log(storedUserID);
  //   console.log(phoneNumber);

  //   const randomInteger = Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000)) + Math.floor(getRandomNumber(1, 1000000000000));

  //   let merchantTransactionId = randomInteger
  //   const requestData = {
  //     user_id: storedUserID,
  //     price: Math.round(product.price * 0.3),
  //     phone: phoneNumber,
  //     name: '',
  //     merchantTransactionId: merchantTransactionId
  //   };


  //   try {
  //     if(city && pinCode && address && selectedTimeSlot && selectedDate){
  //       if (combinedDateTimeError) {
  //         alert("The selected date and time must be at least 24 hours from now.");
  //         return;
  //       }
  //       const response = await axios.post(apiUrl, requestData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //       });
  //       console.log(response)
  //       window.location.href = response.data
  //       handleConfirmOrder(merchantTransactionId);
        
  //     }else{
  //       if(!city){
  //         setCityError(true)
  //       }
  //       if(!pinCode){
  //         setPinCodeError(true)
  //       }
  //       if(!address){
  //         setAddressError(true)
  //       }
  //       if(!selectedTimeSlot){
  //         setSelectedTimeSlotError(true)
  //       }
  //       if(!selectedDate){
  //        setSelectedDateError(true)
  //       }
  //     }

  //   } catch (error) {
  //     // Handle errors
  //     console.error('API error:', error);
  //   }

  // }



  // const handleConfirmOrder = async (merchantTransactionId) => {

  //   try {

  //     const message = await checkPaymentStatus(merchantTransactionId);
  //     const storedUserID = await localStorage.getItem('userID');
  //     //const locality = await AsyncStorage.getItem("Locality");

  //     if (message === 'PAYMENT_SUCCESS') {
  //       const url = BASE_URL + CONFIRM_ORDER_ENDPOINT;
  //       const requestData = {
  //         "toId": "",
  //         "order_time": selectedTimeSlot.toLocaleTimeString(),
  //         "no_of_people": 0,
  //         "type": 1,
  //         "fromId": storedUserID,
  //         "is_discount": "0",
  //         "addressId": address + pinCode,
  //         "order_date": selectedDate.toDateString(),
  //         "no_of_burner": 0,
  //         "order_locality": city,
  //         "total_amount": product.price,
  //         "orderApplianceIds": [],
  //         "payable_amount": product.price,
  //         "is_gst": "0",
  //         "order_type": true,
  //         "decoration_comments": comment
  //       }

  //       const token = await localStorage.getItem('token');

  //       console.log(requestData);

  //       const response = await axios.post(url, requestData, {
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'authorization': token
  //         },
  //       });

  //       if (response.status === API_SUCCESS_CODE) {
  //         alert("Order placed successfully");
  //       }
  //     }
  //   } catch (error) {
  //     console.log('Error Confirming Order:', error.message);
  //   }

  // };

  // const checkPaymentStatus = async (merchantTransactionId) => {
  //   console.log("inside chkecstatus")
  //   try {
  //     const storedUserID = await localStorage.getItem('userID');
  //     const apiUrl = BASE_URL + PAYMENT_STATUS + '/' + merchantTransactionId;


  //     const pollInterval = 5000; // 5 seconds (adjust as needed)
  //     const pollingDuration = 300000; // 5 minutes

  //     const pollPaymentStatus = async () => {
  //       const startTime = Date.now();

  //       while (Date.now() - startTime < pollingDuration) {
  //         try {
  //           const response = await axios.post(apiUrl, {}, {
  //             headers: {
  //               'Content-Type': 'application/json',
  //             },
  //           });



  //           if (response.data && response.data.message) {
  //             const message = response.data.message;
  //             console.log('API response message:', message);

  //             if (message === 'PAYMENT_PENDING') {
  //               console.log('Payment is still pending. Polling again...');
  //               await new Promise(resolve => setTimeout(resolve, pollInterval));
  //             } else {
  //               console.log('Payment status:', message);
  //               return message;
  //             }
  //           } else {
  //             console.log('API response does not contain a message field');
  //           }

  //         } catch (error) {
  //           console.error('API error:', error);
  //         }
  //       }

  //       // Stop polling after the specified duration
  //       console.log('Polling completed. Returning final result.');
  //       return 'PAYMENT_POLLING_TIMEOUT';
  //     };

  //     // Start polling and return the final result after polling completes
  //     return await pollPaymentStatus();
  //   } catch (error) {
  //     console.error('Error checking payment status:', error);
  //     throw error; // Rethrow the error for the caller to handle
  //   }
  // };





  return (
    <div className="App">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: "flex", alignItems: "start", height: '90vh' }} className='checoutSec my-3 gap-5 overflow-x-hidden overflow-y-auto'>
          <div style={{ width: "60%", boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }} className='leftSeccheckout'>
            <h2 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 8px 0", lineHeight: "35px" }}>Booking Details</h2>
            <div className='border border-danger p-1 px-3 rounded bg-danger-subtle text-black text-center' style={{ color: '#000', fontSize: 12, fontWeight: '500', textAlign: 'left', color: "#9252AA" }}>The decorator requires approximately 40-90 minutes to fulfill the service</div>
            <div style={{ display: 'flex', margin: "8px 0px 10px" }} className='row align-items-between justify-content-center  align-items-lg-center justify-content-lg-between'>
            <div className='col-6'>  <CustomDatePicker  handleDateChange={handleDateChange} setSelectedDate={setSelectedDate} selectedDate={selectedDate} showDatePicker={showDatePicker} setShowDatePicker={setShowDatePicker} combinedDateTimeError={combinedDateTimeError} selectedDateError={selectedDateError}/></div>
             <div className='col-6'> <CustomTimePicker handleTimeSlotChange={handleTimeSlotChange} generateTimeSlots={generateTimeSlots} selectedTimeSlot={selectedTimeSlot}combinedDateTimeError={combinedDateTimeError} selectedTimeSlotError={selectedTimeSlotError}/></div>
            </div>
            {combinedDateTimeError && <p className="text-danger" style={{fontSize:'12px'}}>The selected date and time must be at least 24 hours from now.</p>}

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
          <div className="rightSecfooddelivery" style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "20px" }}>
              <h3 style={{ fontSize: "22px", fontWeight: "400", color: "#222", borderBottom: "1px solid #f0f0f0", margin: "0 0 11px 0", lineHeight: "35px" }}>Order Summary</h3>
              <div className='righysercchefinner'>
              <div style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <div style={{ marginHorizontal: 16, flexDirection: 'column', width: 120, borderRadius: 6, borderColor: '#E6E6E6', borderWidth: 1, marginTop: 6 }}>
                                <p style={{ color: '#A3A3A3', fontSize: 9, fontWeight: '400' }}>Total Dishes</p>
                                <p style={{ color: '#9252AA', fontSize: 13, fontWeight: '600' }}>{Object.keys(selectedDishData).length}</p>
                            </div>
                            <div style={{ marginHorizontal: 16, flexDirection: 'column', width: 120, borderRadius: 6, borderColor: '#E6E6E6', borderWidth: 1, marginTop: 6 }}>
                                <p style={{ color: '#A3A3A3', fontSize: 9, fontWeight: '400' }}>No. of People</p>
                                <p style={{ color: '#9252AA', fontSize: 13, fontWeight: '600' }}>{peopleCount}</p>
                            </div>
              </div>

              <div style={{ paddingHorizontal: 5}}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Total</p>
                <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {totalPrice}</p>
            </div>
            {/* <img style={{ width: 290, height: 1, marginTop: 5, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
            {discountedPrice > 0 && (
                <div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3, alignItems: "center" }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: "center", flexDirection: 'row' }}>
                            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Item Discount:</p>
                        </div>
                        <p style={{ color: "#008631", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                            {'-'} ₹ {discountedPrice}
                        </p>
                    </div>
                    {/* <img style={{ width: 290, height: 1, marginTop: 5, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                </div>
            )}
             {selectedDeliveryOption === 'foodDelivery' && (
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeDisposable ? '#efefef' : '#fff', paddingHorizontal: 5, paddingVertical: 4, marginTop: 4 }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <button onClick={() => setIncludeDisposable(!includeDisposable)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                <div style={{ width: 19, height: 19, borderWidth: 1, borderColor: includeDisposable ? '#008631' : '#008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                    {includeDisposable && <img src="../../assets/check.png" style={{ width: 13, height: 13 }} alt="check" />}
                                </div>
                            </button>
                            <div>
                                <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px' }}>Disposable plates + water bottle:</p>
                                <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px' }}> ₹ 20/Person</p>
                            </div>
                        </div>

                        <div>
                            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14 }}>₹ {includeDisposable ? 20 * peopleCount : 0}</p>
                        </div>
                    </div>
                    {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
                        <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Packing Cost</p>
                        <div style={{ display: 'flex', color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>
                            <p style={{ color: "#9252AA", fontWeight: '600' }}> ₹ {packingCost}</p>
                        </div>
                    </div>
                </div>
            )}

            {selectedDeliveryOption === 'liveCatering' && (
                <div>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: includeTables ? '#efefef' : '#fff', paddingHorizontal: 5, paddingVertical: 4, marginTop: 4 }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <button onClick={() => setIncludeTables(!includeTables)} style={{ background: 'none', border: 'none', padding: 0 }}>
                                <div style={{ width: 19, height: 19, borderWidth: 1, borderColor: includeTables ? '#008631' : '#008631', borderRadius: 3, alignItems: 'center', justifyContent: 'center', marginRight: 4, display: 'flex' }}>
                                    {includeTables && <img src="../../assets/check.png" style={{ width: 13, height: 13 }} alt="check" />}
                                </div>
                            </button>
                            <div>
                                <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 13, lineHeight: '20px' }}>3-4 Serving Tables with Cloth:</p>
                            </div>
                        </div>

                        <div>
                            <p style={{ color: '#9252AA', fontWeight: '600', fontSize: 14 }}>₹ {includeTables ? 1200 : 0}</p>
                        </div>
                    </div>
                    {/* <img style={{ width: 290, height: 1, marginTop: 10, marginBottom: 5 }} src="../../assets/Rectangleline.png" alt="line" /> */}
                </div>
            )}

            {/* Calculation for final total amount */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Final Amount</p>
            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateFinalTotal()}</p>
            </div>

            {/* Calculation for advance payment */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 3 }}>
            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>Advance Payment</p>
            <p style={{ color: "#9252AA", fontWeight: '600', fontSize: 14, lineHeight: '20px' }}>₹ {calculateAdvancePayment()}</p>
            </div>

        
            </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', marginTop: 7, backgroundColor: '#E8E8E8', borderColor: '#D8D8D8', borderWidth: 1 }}>
            <div style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                <p style={{ padding: 4, color: '#000', fontSize: 13, fontWeight: '600' }}>Dishes selected</p>
            </div>

            <div style={{ marginTop: 10, marginHorizontal: 15, display: 'flex', flexDirection: 'row', flex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', width: '100%' }}>
                    {selectedDishQuantities.map((item, index) => (
                        <RenderDishQuantity key={index} item={item} />
                    ))}
                </div>
            </div>

           
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 12 }}>
                <p style={{ fontSize: 14, fontWeight: 500, color: '#333' }}>Need more info?</p>
                <button onClick={contactUsRedirection} style={{ marginLeft: 5, backgroundColor: '#E8E8E8', borderRadius: 18, borderWidth: 1, borderColor: '#9252AA', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 96, height: 28, cursor: 'pointer' }}>
                    <p style={{ color: '#9252AA', fontSize: 13, fontWeight: '500' }}>Contact Us</p>
                </button>
            </div>
            </div>

        </div>

      </div>

    </div>
  );
}

export default FoodDeliveryCheckout;





export const CustomDatePicker = ({ handleDateChange, selectedDate, showDatePicker, setShowDatePicker,selectedDateError,combinedDateTimeError }) => {

  const toggleDatePicker = () => {
    setShowDatePicker((prev) => !prev);
  };

  return (
    <div  className={`d-flex flex-column border border-2 rounded-4 p-2  ${combinedDateTimeError? 'border-danger' : ''} `}>
      <p style={{ marginBottom: "4px", color: "rgb(146, 82, 170)", fontSize: "12px" }} className='p-0 m-0'>Select Date</p>
      <Dropdown show={showDatePicker} onToggle={toggleDatePicker} className='border-none p-0'>
        <Dropdown.Toggle
          variant="outline-secondary"
          className={`w-100 m-0 p-0 d-flex justify-content-between align-items-center text-black ${selectedDateError? 'border-danger' : ''}`}
          style={{ cursor: 'pointer', padding: 0, background: 'none', border: 'none' }}        >
          <span style={{fontSize:'12px'}} className='m-0 p-0 '>{selectedDate ? selectedDate.toLocaleDateString() : 'Select Date'}</span>
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

export const CustomTimePicker = ({ selectedTimeSlot, handleTimeSlotChange, generateTimeSlots,selectedTimeSlotError,combinedDateTimeError }) => {
  return (
    <div  className={`timepkerSec d-flex flex-column border border-2 ${combinedDateTimeError? 'border-danger' : ''}  ${selectedTimeSlotError?'border-danger':""} rounded-4 p-2`}>
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