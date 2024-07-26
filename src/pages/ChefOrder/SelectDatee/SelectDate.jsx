import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { BASE_URL, GET_CUISINE_ENDPOINT, API_SUCCESS_CODE, GET_MEAL_DISH_ENDPOINT } from '../../../utills/apiconstants';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import orderWarning from "../../../assets/OrderWarning.png";
import Popup from '../../../utills/popup';
import ReadinessListt from "./ReadinessListt";
import CookingTimeIndicator from "./CookingTimeIndicator";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faCheckCircle, faUtensils} from "@fortawesome/free-solid-svg-icons";

import '../../../css/chefOrder.css';

import styled from 'styled-components';


import SelectDishes from "../../../assets/selectDish.png";
import SelectDateTime from "../../../assets/event2.png";
import SelectConfirmOrder from "../../../assets/confirm_order.png";

const orangeColor = '#FF6F61';
const defaultColor = '#B0BEC5';


const SelectDate = ({ history, currentStep }) => {
    const navigate = useNavigate();
    const { orderType, selectedDishDictionary, selectedDishPrice, selectedDishes , isDishSelected , selectedCount} = useLocation().state || {}; // Accessing subCategory and itemName safely
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [peopleCount, setPeopleCount] = useState(1);
    const [activeTab, setActiveTab] = useState('right');
    const data = selectedDishDictionary;
    const [dishPrice, setDishPrice] = useState(selectedDishPrice);
    const [showAll, setShowAll] = useState(false);
    const [burnerCount, setBurnerCount] = useState(0)
    const [isWarningVisible, setWarningVisible] = useState(false);
    const [isTimeValid, setTimeValid] = useState(null);
    const [isDateValid, setDateValid] = useState(null);
    const [errorText, setErrorText] = useState(null)
    const [isDatePressed, setIsDatePressed] = useState(false)
    const [isTimePressed, setIsTimePressed] = useState(false)
    const [showCookingTime, setShowCookingTime] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedTab, setSelectedTab] = useState('Appliances');
    const [isWarningVisibleForTotalAmount, setWarningVisibleForTotalAmount] =
      useState(false);

    // Container for the whole component
    const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 10px;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

// Layout for heading and control section
    const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
  }
`;

// Heading
    const Heading = styled.p`
  margin: 0;
  font-size: 18px;
  color: #3C3C3E;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

// Buttons container
    const ControlButtons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin: 0;
  }
`;

// Container for Range Input and Count Display
    const RangeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 94%;
  max-width: 920px;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

// Range Input container
    const RangeWrapper = styled.div`
  flex: 1;
  padding: 5px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
`;

// Text
    const CountText = styled.p`
  margin: 0 10px;
  line-height: 23px;
  font-size: 18px;
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

// Display Count
    const CountDisplay = styled.p`
  margin-left: 20px;
  line-height: 23px;
  font-size: 18px;
  text-align: center;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-left: 0; // Adjust margin for mobile
  }
`;
    //different


    const Container = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: row; // Align items horizontally
      overflow-x: auto;    // Enable horizontal scrolling if needed
      padding: 10px;      // Adjust padding for mobile view
      width: 100%;        // Ensure it takes up the full width of the parent
      white-space: nowrap; // Prevent labels from wrapping to the next line

      @media (max-width: 600px) {
        padding: 5px;    // Reduce padding on smaller screens
      }
    `;

    const Step = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;    // Adjust margin for spacing
    `;

    const Line = styled.div`
      height: 2px;
      width: 50px;       // Default width for mobile view
      background-color: #ccc;
      margin: 0 4px;     // Adjust margin for spacing
      color: ${(props) => (props.active ? '#F46C5B' : 'black')};

      @media (max-width: 600px) {
        width: 30px;     // Smaller width for mobile view
      }
    `;

    const Image = styled.img`
      width: 48px;       // Default size for mobile view
      height: 48px;

      ${(props) => props.active && `border: 2px solid #000;`};

      @media (max-width: 600px) {
      width: 32px;     // Smaller width for mobile view
      height: 32px;    // Maintain aspect ratio
    }
    `;

    const Label = styled.div`
      margin-top: 5px;
      text-align: center;
      font-size: 14px;   // Default font size
      color: ${(props) => (props.active ? '#F46C5B' : 'black')}; // Color based on active prop
      white-space: nowrap; // Prevent text from wrapping

      @media (max-width: 600px) {
        font-size: 10px; // Smaller font size for mobile view
      }
    `;


    const [popupMessage, setPopupMessage] = useState({
        image: "",
        title: "",
        body: "",
        button: "",
    });

    const minPeopleCount = 1
    const maxPeopleCount = 100
    const step = 10;
    
    const increasePeopleCount = () => {
        setPeopleCount(peopleCount + 1)
        setDishPrice(dishPrice + 49)
    }

    const decreasePeopleCount = () => {
        if (peopleCount != 1) {
            setPeopleCount(peopleCount - 1)
            setDishPrice(dishPrice - 49)
        }
    }
     const handleRangeChange = (e) => {
        console.log(e.target.value)
       const value = parseInt(e.target.value, 10);
       setPeopleCount(value);
       setDishPrice(value * 49); // Assuming 49 is the unit price
     };

    const handleWarningClose = () => {
      setWarningVisibleForTotalAmount(false);
    };
       const onContinueClick = () => {
    if (dishPrice < 700) {
        setWarningVisibleForTotalAmount(true);
        setPopupMessage({
          image: orderWarning,
          title: "Total Order Amount is less than ₹700",
          body: "Total Order amount can not be less than ₹700, Add more to continue",
          button: "Add More",
        });
        return; // Stop further execution if dishPrice is less than 400
    }

    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const navigateState = {
        state: {
            from: window.location.pathname,
            peopleCount,
            selectedDishDictionary,
            selectedDishPrice,
            selectedDishes,
            orderType,
            isDishSelected,
            selectedCount
        }
    };

    if (!isLoggedIn) {
        navigate('/login', navigateState);
    } else {
        navigate('/book-chef-checkout', navigateState);
    }
};


    const getTotalBurnerCount = () => {
        let totalBurnerCount = 0;

        for (const dishId in data) {
            const dish = data[dishId];
            if (dish.is_gas) {
                totalBurnerCount += 1;
            }
        }

        if (totalBurnerCount <= 6)
        return 2;
    else if (totalBurnerCount > 6 && totalBurnerCount < 10)
        return 3;
    else if (totalBurnerCount > 10)
        return 4;
};

const getTotalSpecialAppliances = () => {
    const totalSpecialAppliances = {};
    for (const dishId in data) {
        const dish = data[dishId];
        if (dish.special_appliance_id) {
            dish.special_appliance_id.forEach((appliance) => {
                if (!totalSpecialAppliances[appliance._id]) {
                    totalSpecialAppliances[appliance._id] = { ...appliance };
                }
            });
        }
    }
    return Object.values(totalSpecialAppliances);
};

const getTotalIngredients = () => {
    const totalIngredients = {};
    for (const dishId in data) {
        console.log('dishId2' + dishId)
        const dish = data[dishId];
        if (dish.ingredientUsed) {
            dish.ingredientUsed.forEach((ingredient) => {
                if (!totalIngredients[ingredient._id]) {
                    totalIngredients[ingredient._id] = {
                        _id: ingredient._id,
                        name: ingredient.name,
                        image: ingredient.image,
                        unit: ingredient.unit,
                        qty: 0,
                        count: 0
                    };

                    
                }
                totalIngredients[ingredient._id].qty += parseInt(ingredient.qty);
                totalIngredients[ingredient._id].count += 1
                if (ingredient.unit === 'gram' || ingredient.unit === 'Gram')
                    totalIngredients[ingredient._id].unit = 'g';
                if (ingredient.unit === 'ml' || ingredient.unit === 'ML')
                    totalIngredients[ingredient._id].unit = 'ml';
            });
        }
    }

  
    return Object.values(totalIngredients);
};

const RenderAppliances = ({ item }) => {
    return (
        <div style={{ height: '51px', paddingRight: '2px', alignItems: 'center', borderRadius: '5px', borderColor: '#DADADA', borderWidth: '0.5px', flexDirection: 'row', marginRight: '6px', marginBottom: '8px', display: 'flex', borderStyle: 'solid' }}>
            <div style={{ marginLeft: '5px', width: '40px', height: '40px', backgroundColor: '#F0F0F0', borderRadius: '3px', alignItems: 'center', justifyContent: 'center', marginRight: '5px', display: 'flex' }}>
                <img src={`https://horaservices.com/api/uploads/${item.image}`} alt={item.name} style={{ width: '33px', height: '34px' }} />
            </div>

            <div style={{ flexDirection: 'column', marginLeft: '1px', width: '43px', display: 'flex' }}>
                <span style={{ fontSize: '12px', fontWeight: '500', color: '#414141', lineHeight: '15px' }} title={item.name}>{item.name}</span>
            </div>
        </div>
    );
};

const RenderIngredients = ({ item }) => {

        let quantity = item.qty * peopleCount;

        if (item.count == 4)
        {
            quantity = quantity * 0.7
        }
        else if (item.count == 5)
        {
            quantity = quantity * 0.6
        }
        else if (item.count == 6)
        {
            quantity = quantity * 0.5
        }
        else if (item.count == 7)
        {
            quantity = quantity * 0.4
        }
        else if (item.count == 8)
        {
            quantity = quantity * 0.35
        }
        else if (item.count == 9)
        {
            quantity = quantity * 0.3
        }
        else if (item.count == 10)
        {
            quantity = quantity * 0.28
        }
        else if (item.count == 11)
        {
            quantity = quantity * 0.25
        }

        quantity = Math.round(quantity)
        let unit = item.unit;
        if (quantity >= 1000) {
            quantity = quantity / 1000;
            if (unit === 'g')
                unit = 'kg'
            else if (unit === 'ml')
                unit = 'L'
        }
        return (
            <div style={{ width:"23%", alignItems: 'center', borderRadius: 5, border: "1px solid #DADADA",
                flexDirection: 'row', padding:"10px" , display:"flex" , marginBottom:"20px", marginRight: "10px"}} className='ingredientsec'>
                <div style={{ marginLeft: 5, width: "45%", height: "auto", backgroundColor: '#F0F0F0', borderRadius: "10px", alignItems: 'center', padding:"5%" , justifyContent: 'center', marginRight: 15 }} className='ingredientleftsec'>
                <img src={`https://horaservices.com/api/uploads/${item.image}`} alt={item.name} style={{width:"100%" , height:"100%"}}/>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: 1, width: 80 }} className='ingredientrightsec'>
                    <div style={{ fontSize: "70%", fontWeight: '500', color: '#414141' }} className='ingredientrightsecheading'>{item.name}</div>
                    <div style={{ fontSize: "140%", fontWeight: '700', color: '#9252AA' , textTransform:"lowerCase"}} className='ingredientrightsecsibheading'>{quantity + ' ' + unit}</div>
                </div>
            </div>
        );
    };

const LeftTabContent = ({ burnerCount, ApplianceList }) => {
    return(
        <>
       <div style={{padding:"10px 20px 20px 20px" ,  flexDirection: 'column', borderWidth: 1, elevation: 1, backgroundColor: 'white', borderBottomRightRadius: 15, borderBottomLeftRadius: 15, borderColor: 'white'  , border: "1px solid #efefef"}}>
    <div style={{ flexDirection: 'column' }} class="req-applicance-details">
        <p style={{ color: '#000000', fontSize: "100%", fontWeight: '400' }} >Required Burners</p>
        <p style={{ color: '#969696', fontSize: "100%", fontWeight: '400'  }}>Number of burners depend upon the number of dishes chosen</p>
        <p style={{ color: '#969696', fontSize: "100%", fontWeight: '400'}}>(Burners would be used at your location)</p>
    </div>

    <div style={{ width: 90, height: 54, flexDirection: 'column', borderColor: "#DADADA", borderWidth: 0.5, borderRadius: 5  }}>
        <div style={{ flexDirection: 'row' }}>
            <img style={styles.burner} src={require('../../../assets/burner.png')} alt="burner" />
            <span style={{ marginInlineStart: 12, marginBlock: 6, fontSize: 26, color: "#9252AA" }}>{burnerCount}</span>
        </div>
    </div>
        
    {ApplianceList.length > 0 && (
        <div style={{ flexDirection: 'column', marginTop: 11 }}>
            <div style={{ flexDirection: 'column' }}>
                <span style={{ color: '#000000', fontSize: 13, fontWeight: '600' }}>Requires Special Appliances</span>
                <span style={{ color: '#969696', fontSize: 11, fontWeight: '500', marginTop: 7 }}>(Keep these appliances ready at your location)</span>
            </div>
        </div>
    )}

    {ApplianceList.length > 0 && (
        <div style={{ flexDirection: 'row', marginTop: 11 }}>
            <img style={styles.verticalSeparator} src={require('../../../assets/verticalSeparator.png')} alt="separator" />
        </div>
    )}

    <div style={{ flexDirection: 'column', marginTop: 8 }}>
    <ListGroup>
    {ApplianceList.map(item => (
        <ListGroup.Item key={item.id}>
            <RenderAppliances item={item} />
        </ListGroup.Item>
    ))}
</ListGroup>
    </div>

    {/* {preparationTextList.length > 0 && (
        <div style={{ flexDirection: 'column', backgroundColor: '#F9E9FF', borderRadius: 15, paddingInline: 10 }}>
            <div style={styles.header}>
                <span style={{ color: '#9252AA', fontWeight: '500', fontSize: 10 }}>Readiness Required*</span>
                <button onClick={toggleShowAll} style={styles.showAllText}>{showAll ? 'Show Less' : 'Show All'}</button>
            </div>
            <div style={{ flexDirection: 'column' }}>
                {renderPreparationText(preparationTextList)}
            </div>
        </div>
    )} */}
</div>

        </>
    )
}

const RightTabContent = ({ ingredientList, preparationTextList, toggleShowAll, showAll, renderPreparationText }) => {
    return (
        <div style={{ overflowY: 'auto', height: '100%' , borderRadius:"4px 13px 13px 13px" ,   border: "1px solid #efefef" }}>
            <div style={{ padding:"0px 20px 20px 20px" ,  flexDirection: 'column', boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)', backgroundColor: 'white', borderBottomRightRadius: '15px', borderBottomLeftRadius: '15px',  display: 'flex' , border: "1px solid #efefef"}}>
                <div style={{ flexDirection: 'column', display: 'flex' }}>
                    <span style={{ color: '#000000', fontSize: '13px', fontWeight: '600', marginTop: '20px' }}>Required Ingredient</span>
                    <span style={{ color: '#969696', fontSize: '11px', fontWeight: '500', marginTop: '6px' }}>(Keep these ingredient ready at your location)</span>
                </div>

                <div style={{ flexDirection: 'row', marginTop: '15px', display: 'flex' }}>
                    <ListGroup style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row'  , justifyContent:"flex-start" , alignItems:"center"}}>
                        {ingredientList.map(item => (
                            <RenderIngredients key={item.id} item={item} />
                        ))}
                    </ListGroup>
                </div>

                {/* {preparationTextList.length > 0 && (
                    <div style={{ flexDirection: 'column', backgroundColor: '#F9E9FF', borderRadius: '15px', padding: '10px', display: 'flex' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span style={{ color: '#9252AA', fontWeight: '500', fontSize: '10px' }}>Readiness Required*</span>
                            <button onClick={toggleShowAll} style={{ background: 'none', border: 'none', color: '#9252AA', cursor: 'pointer', padding: 0 }}>
                                {showAll ? 'Show Less' : 'Show All'}
                            </button>
                        </div>
                        <div style={{ flexDirection: 'column', display: 'flex' }}>
                            {renderPreparationText(preparationTextList)}
                        </div>
                    </div>
                )} */}
            </div>
        </div>
    );
};


    const renderTabContent = () => {
        if (activeTab === 'left') {
            const totalBurnerCount = getTotalBurnerCount();
            const totalSpecialAppliancesList = getTotalSpecialAppliances();
            return (
                <LeftTabContent
                    burnerCount={totalBurnerCount}
                    ApplianceList={totalSpecialAppliancesList}
                />
            );
        } else if (activeTab === 'right') {
            const totalIngredientsList = getTotalIngredients();
            return <RightTabContent ingredientList={totalIngredientsList} />;
        }
    };


    

    return (

        <div style={{width:"90%" , margin:"0 auto" , backgroundColor:"#EDEDED", marginBottom: "10px"}} className='selectdatesecouter'>
            <div style={{ flexDirection: 'row', backgroundColor: '#EFF0F3' , boxShadow:"0px 0px 6px 0px rgba(0, 0, 0, 0.23)" , display:"flex" ,justifyContent:"center" , alignItems:"center" , padding:"10px 0"}}>
                <img style={{width:"20px" , marginRight:"10px"}} src={require('../../../assets/info.png')} />
                <p style={{ color: '#676767', fontSize: "94%", fontWeight: '400', margin:"0" }} className='billheading'>Bill value depends upon Dish selected + Number of people</p>
            </div>

            <Container>
                <Step active>
                    <Image  src={SelectDishes} alt="Select Dishes" />
                    <Label active>Select Dishes</Label>
                </Step>
                <Line active/>
                <Step>
                    <Image src={SelectDateTime} alt = "Select Date & Time"/>
                    <Label active>Select Date & Time</Label>
                </Step>
                <Line />
                <Step>
                    <Image src={SelectConfirmOrder} alt= "Confirm Order"/>
                    <Label>Select Confirm Order</Label>
                </Step>
            </Container>
          
            <div style={{width:"90%" , margin:"0 auto" , backgroudColor:"rgb(237, 237, 237)" ,
                display:"flex"   , flexDirection:"column" ,  backgroundColor:"#edededc9"}} className='selectdateContainersec'>
                
                <div style={{  width:"98%" , margin:"10px" , padding:"10px 30px"}} className='selectdateContainer'>

                    <div style={{ backgroundColor:"#fff", borderRadius:"10px", padding:"10px 10px 20px 15px" }} className='peoplecontsec'>
                        <div style={{ display: "flex", padding: 7, flexDirection: 'row', borderRadius: 5, marginTop: 5, marginBottom: 10, backgroundColor: 'rgba(211, 75, 233, 0.10)', justifyContent: 'flex-start', alignItems: 'top' }}>
                            <div style={{ color: "#9252AA", fontWeight: '500', fontSize: 10}}>Note: Additional charge of 700 applies for more than 7 dishes.</div>
                        </div>
                        <div className="header-section">
                            <div className="heading">How many people you are hosting?</div>
                            <div className="control-buttons">
                                <button onClick={decreasePeopleCount} className="control-button">
                                    <img src={require('../../../assets/ic_minus.png')} alt="minus icon" />
                                </button>
                                <div className="count-text">{peopleCount}</div>
                                <button onClick={increasePeopleCount} className="control-button">
                                    <img src={require('../../../assets/plus.png')} alt="plus icon" />
                                </button>
                            </div>
                        </div>

                        <div className="range-container">
                            <div className="range-wrapper">
                            <input
    type="range"
    min={minPeopleCount}
    max={maxPeopleCount}
    step={step}
    value={peopleCount}
    id="customRange3"
    onChange={handleRangeChange}
    className="range-input"
    style={{
        // CSS styles inline for the range input
        '--range-color': 'rgb(146, 82, 170)',  // Custom color variable
        '--range-track-height': '6px',         // Custom track height
        '--range-thumb-size': '14px'  ,         // Custom thumb (handle) size
        '--range-thumb-transform': 'translateY(-30%)'  // Vertically center the thumb
    }}
/>
                            <div>
                                <div className="count-display">{peopleCount}</div>
                            </div>
                            </div>

                        </div>

                        <div className='personsectionprice'>
                            <img src={require('../../../assets/info.png')} className="info-icon" alt="info icon" />
                            <p className="info-text">₹ 49/person would be added to bill value in addition to dish price</p>
                        </div>
                    </div>


                    <div>
                <div style={{
                    flex: 1, marginTop: 16,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding:"0 10px",
                }}>
                    <p style={{ flexDirection: 'row', alignItems: 'center' , marginBottom:"2px"}} className='req-sec'>
                        <span style={{ color: '#000', fontSize: "100%", fontWeight: '800'  }}>Required </span>
                        <span style={{ color: '#9252AA', fontSize: "100%", fontWeight: '800' }}>Procurement </span>
                        <span style={{ color: '#000', fontSize: "100%", fontWeight: '800' }}>?</span>
                    </p>
                </div>

                <div style={{ flexDirection: 'row', marginTop: 4, padding:"0 10px" , justifyContent: 'center' }}>
                    <p style={{ color: '#707070', fontSize: "100%", fontWeight: '400' }} className='req-des'>Keep these Appliances and Ingredients ready before chef Arrival</p>
                </div>
                </div>


                <div style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 16 }}>
                <button
                style={{
                backgroundColor: activeTab === 'left' ? "#D9D9D9" : 'white',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 15,
                padding: "5px 60px",
                borderRight: "1px solid #ccc"
                }}
                onClick={() => setActiveTab('left')}
                className='tabButton'
                >
                <p style={activeTab === 'left' ? styles.activeTab : styles.inactiveTab}>Appliances</p>
                </button>
                <button
                style={{
                backgroundColor: activeTab === 'right' ? "#D9D9D9" : 'white',
                borderTopRightRadius: 10,
                borderTopLeftRadius: 15,
                padding: "5px 60px",
                    
                }}
                onClick={() => setActiveTab('right')}
                className='tabButton'
                >
                <p style={activeTab === 'right' ? styles.activeTab : styles.inactiveTab}>Ingredient</p>
                </button>
                {renderTabContent()}
                </div>
                </div>
                </div>

                <Row>
                <Col>
                <div style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "#EDEDED",
            borderTop: "1px solid #efefef",
            padding:"15px 0",
            left:"0",
        }}>
                    <Button
                         onClick={onContinueClick}
                        style={{
                            width: "50%",
                            backgroundColor: isDishSelected ? '#9252AA' : '#F9E9FF',
                            borderColor: isDishSelected ? '#9252AA' : '#F9E9FF',
                        }}
                        disabled={!isDishSelected}
                        className='continuebtnchef'
                    >
                            <div
                                style={{
                                    className: "continueButtonLeftText",
                                    color: isDishSelected ? 'white' : '#343333',
                                }}
                            >
                                Continue
                            </div>
                            <div
                                style={{
                                    className: "continueButtonRightText",
                                    color: isDishSelected ? 'white' : '#343333',
                                }}
                            >
                                {selectedCount} Items | ₹ {dishPrice}
                        </div>
                    </Button>
                    </div>
                </Col>
            </Row>
            {isWarningVisibleForTotalAmount && (<Popup popupMessage={popupMessage} onClose={handleWarningClose}/>)}


              {/* <div>
                <ReadinessListt />
            </div>
            <div>
                <CookingTimeIndicator time={3.5} />
            </div> */}
        </div>
    )
}

const styles = {
    activeTab: {
        fontWeight: '500',
        color: '#823D9D', 
        fontSize:13,
        padding:"0px",
        margin:"0px",
      },
      inactiveTab: {
        color: '#969696', 
        fontSize:13,
        fontWeight:'500',
        padding:"0px",
        margin:"0px",
      },
      burner:{
        width:"56px",
        margin:"10px 0 0"
      }
    }

export default SelectDate;