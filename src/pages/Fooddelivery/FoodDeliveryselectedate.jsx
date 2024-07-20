import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import checkImage from '../../assets/tick.jpeg.jpeg';
import orderWarning from '../../assets/OrderWarning.png'
import Popup from '../../utills/popup';

const FoodDeliveryselectDate = ({ history }) => {
    const navigate = useNavigate();
    const { selectedOption, selectedDishDictionary, selectedDishPrice, selectedDishes , isDishSelected , selectedCount , selectedDishQuantities } = useLocation().state || {}; // Accessing subCategory and itemName safely
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [peopleCount, setPeopleCount] = useState(10);
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

     const [popupMessage, setPopupMessage] = useState({
       image: "",
       title: "",
       body: "",
       button: "",
     });

     const minPeopleCount = 10;
     const maxPeopleCount = 100;
     const step = 10;

    const increasePeopleCount = () => {
        setPeopleCount(peopleCount + 1)
    }

    const decreasePeopleCount = () => {
        if (peopleCount > 10) {
            setPeopleCount(peopleCount - 1);
        } else {
            alert("Minimum guest count should be 10");
        }
    };

    const handleRangeChange = (e) => {
      const value = parseInt(e.target.value, 10);
      setPeopleCount(value);
    };

    const handleWarningClose = () => {
      setWarningVisibleForTotalAmount(false);
    };

    const contactUsRedirection = () => {
        window.open('whatsapp://send?phone=+917338584828&text=Hello%20I%20have%20some%20queries%20for%20food%20delivey%20and%20live%20Catering%20service');
    }
    const onContinueClick = () => {
        const totalOrderAmount = selectedOption === 'party-live-buffet-catering' ? ((dishPrice * peopleCount) * 1.1 + 6500).toFixed(0) : dishPrice * peopleCount;
        
        if (totalOrderAmount < 3000) {
            // alert("Please select minimum order amount: 3000rps");
             setWarningVisibleForTotalAmount(true);
             setPopupMessage({
               image: orderWarning,
               title: "Total Order Amount is less than ₹3000",
               body: "Total Order amount can not be less than ₹3000, Add more to continue",
               button: "Add More",
             });
            return; // Stop further execution if totalOrderAmount is less than 3000
        }
    
        const navigateState = {
            state: {
                from: window.location.pathname,
                peopleCount: peopleCount,
                selectedDeliveryOption: selectedOption,
                selectedDishesFoodDelivery: data,
                totalOrderAmount: totalOrderAmount,
                selectedDishQuantities: selectedDishQuantities,
                selectedOption: selectedOption,
            }
        };
    
        if (localStorage.getItem("isLoggedIn") !== "true") {
            navigate('/login', navigateState);
        } else {
            navigate("/party-food-delivery-live-catering-buffet-checkout", navigateState);
        }
    };
    




    const LeftTabContent = ({ selectedOption }) => {
        return (
            <div style={{  paddingTop: 10, backgroundColor: '#FFFFFF', paddingLeft:10, borderRadius: 10, fontSize: 14 , paddingBottom:10}}>
                <div>
                    {selectedOption === "party-food-delivery" && (
                        <>
                           
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                            <img src={checkImage} alt="Info" style={{ height: 13, width: 13 , marginRight:10}} />
                            <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 7  , marginBottom:"2px"}}>Free Delivery</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                            <img src={checkImage} alt="Info" style={{ height: 13, width: 13 , marginRight:10}} />
                            <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 7 , marginBottom:"2px"}}>Hygienically Packed boxes</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                            <img src={checkImage} alt="Info" style={{ height: 13, width: 13 , marginRight:10}} />
                            <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 7 , marginBottom:"2px"}}> Freshly Cooked Food</p>
                            </div>
                        </>
                    )}
                </div>
                <div>
                    {selectedOption === "party-live-buffet-catering" && (
                        <>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 1 }}>  Well Groomed Waiters (2 Nos)</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 4, flex: 1, flexWrap: 'wrap' }}> Bone-china Crockery & Quality disposal for loose items.</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 6 }}>Transport (to & fro)</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 8 }}>Dustbin with Garbage bag</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 4 }}> Head Mask for waiters & chefs</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 7 }}>Tandoor/Other cooking Utensils</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 8 }}>Chafing Dish</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 8 }}>Cocktail Napkins</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 8 }}>2 Chefs</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 9 }}>Water Can (Bisleri)(20 litres)</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '100%' }}>
                                <img src={require('../../assets/tick.png')} alt="tick" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 9 }}>Hand gloves</p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', width: '90%' }}>
                                <img src={require('../../assets/tick.png')} alt="exclusion" style={{ height: 16, width: 16 }} />
                                <p style={{ color: '#9252AA', fontWeight: '700', paddingLeft: 7, flex: 1, flexWrap: 'wrap' }}>Exclusion: Buffet table/kitchen table is in client scope (can be provided at additional cost)</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        );
    };

    const RenderDishQuantity = ({ item }) => {
        const itemCount = Object.values(data).filter(x => 
            x.mealId[0] === "63f1b6b7ed240f7a09f7e2de" || 
            x.mealId[0] === "63f1b39a4082ee76673a0a9f" || 
            x.mealId[0] === "63edc4757e1b370928b149b3"
        ).length;
    
        const mainCourseItemCount = Object.values(data).filter(x => x.mealId[0] === "63f1b6b7ed240f7a09f7e2de").length;
        const appetizerItemCount = Object.values(data).filter(x => x.mealId[0] === "63f1b39a4082ee76673a0a9f").length;
        const breadItemCount = Object.values(data).filter(x => x.mealId[0] === "63edc4757e1b370928b149b3").length;
    
        let quantity = item.quantity * peopleCount;
    
        if (
            (item.id[0] === "63f1b6b7ed240f7a09f7e2de" && mainCourseItemCount > 1) || 
            (item.id[0] === "63f1b39a4082ee76673a0a9f" && appetizerItemCount > 1) || 
            (item.id[0] === "63edc4757e1b370928b149b3" && breadItemCount > 1)
        ) {
            if (itemCount <= 5) {
                quantity = quantity;
            } else if (itemCount === 6 || itemCount === 7) {
                quantity = quantity * (1 - 0.15);
            } else if (itemCount === 8) {
                quantity = quantity * (1 - 0.25);
            } else if (itemCount === 9 || itemCount === 10) {
                quantity = quantity * (1 - 0.35);
            } else if (itemCount === 11) {
                quantity = quantity * (1 - 0.40);
            } else if (itemCount === 12) {
                quantity = quantity * (1 - 0.50);
            } else if (itemCount === 13) {
                quantity = quantity * (1 - 0.53);
            } else if (itemCount === 15) {
                quantity = quantity * (1 - 0.55);
            }
        }
    
        quantity = Math.round(quantity);
        let unit = item.unit;
    
        if (quantity >= 1000) {
            quantity = quantity / 1000;
            if (unit === 'Gram') {
                unit = 'KG';
            } else if (unit === 'ml') {
                unit = 'L';
            }
        }
    
        return (
<div style={{ width:"23%", alignItems: 'center', borderRadius: 5, border: "1px solid #DADADA",  flexDirection: 'row', padding:"10px" , display:"flex" , marginBottom:"20px"}} className='ingredientsec'>
<div style={{ marginLeft: 5, width: "45%", height: "auto", backgroundColor: '#F0F0F0', borderRadius: "10px", alignItems: 'center', padding:"5%" , justifyContent: 'center', marginRight: 15 }} className='ingredientleftsec'>
<img src={`https://horaservices.com/api/uploads/${item.image}`} alt={item.name} style={styles.image} />
</div>
<div style={{ flexDirection: 'column', marginLeft: 1, width: 80 }} className='ingredientrightsec'>
    <div style={{ fontSize: "80%", fontWeight: '500', color: '#414141' }} className='ingredientrightsecheading'>{item.name}</div>
    {/* <div style={{ fontSize: "140%", fontWeight: '700', color: '#9252AA' , textTransform:"uppercase"}} className='ingredientrightsecsibheading'>{quantity + ' ' + unit}</div> */}
</div>
</div>
        );
    };
    

    const RightTabContent = ({ selectedDishQuantities }) => {
        return (
            <div style={{
                paddingTop: 14,
                paddingBottom: 11,
                paddingLeft: 8,
                backgroundColor: '#FFFFFF',
                marginLeft: 0,
                marginRight: 0,
                borderRadius: "0px 10px 10px 10px",
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
            }}>
                <div style={{ flex: 1, overflowY: 'auto'  , borderRadius:"4px 13px 13px 13px" }}>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        paddingBottom: 2,
                        justifyContent:"flex-start",
                        alignItems:"center",
                    }}>
                        {selectedDishQuantities.map((item, index) => (
                            <RenderDishQuantity key={item.name} item={item} />
                        ))}
                    </div>
                </div>
    
                <div style={{
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'row',
                    borderRadius: 10,
                    marginRight: 12,
                    marginTop: 0,
                    borderRadius: 10,
                    backgroundColor: '#F9E9FF',
                    padding:"10px 13px",
                }}>
                    <img src={require('../../assets/info.png')} alt="Info" style={{ height: 13, width: 13 }} />
                    <p style={{
                        color: '#9252AA',
                        fontWeight: '700',
                        marginLeft: 5,
                        fontSize: 11,
                        marginBottom:0,
                    }}>Complementary: Green Salad, Mint Chutney, and Achar</p>
                </div>
            </div>
        );
    };
    
   
    



const renderTabContent = (selectedDishQuantities) => {
    if (activeTab === 'left') {


        return <LeftTabContent  selectedOption={selectedOption} />;
    } else if (activeTab === 'right') {

        return <RightTabContent selectedDishQuantities={selectedDishQuantities} />;
    }
};


    

    return (
      <div
        style={{ width: "90%", margin: "0 auto", backgroundColor: "#EDEDED" }}
        className="selectdatesecouter"
      >
        <div
          style={{
            flexDirection: "row",
            backgroundColor: "#EFF0F3",
            boxShadow: "0px 0px 6px 0px rgba(0, 0, 0, 0.23)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <img
            style={{ width: "20px", marginRight: "10px" }}
            src={require("../../assets/info.png")}
          />
          <p
            style={{
              color: "#676767",
              fontSize: "94%",
              fontWeight: "400",
              margin: "0",
            }}
            className="billheading"
          >
            Bill value depends upon Dish selected + Number of people
          </p>
        </div>

        <div
          style={{
            width: "90%",
            margin: "0 auto",
            backgroudColor: "rgb(237, 237, 237)",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#edededc9",
          }}
          className="selectdateContainersec"
        >
          <div
            style={{ width: "98%", margin: "10px", padding: "10px 30px" }}
            className="selectdateContainer"
          >
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "10px",
                padding: "10px",
              }}
              className="peoplecontsec"
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: 13,
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                >
                  <img
                    src={require("../../assets/people.png")}
                    style={{ height: 25, width: 25 }}
                    alt="people icon"
                  />
                  <p
                    style={{
                      margin: "0 0 0 10px",
                      fontSize: "100%",
                      padding: "0",
                      color: "#3C3C3E",
                      fontWeight: "500",
                    }}
                    className="selectdateContainerheadig"
                  >
                    How many people you are hosting?
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    marginRight: 9,
                  }}
                >
                  {/* <button
                    onClick={decreasePeopleCount}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <img
                      src={require("../../assets/ic_minus.png")}
                      style={{ height: 25, width: 25, marginLeft: 5 }}
                      alt="minus icon"
                    />
                  </button>
                  <p
                    style={{
                      marginLeft: 5,
                      lineHeight: "23px",
                      fontSize: 18,
                      marginTop: 2,
                      width: 22,
                      textAlign: "center",
                      color: "black",
                      marginBottom: "10px",
                    }}
                    className="totalcount"
                  >
                    {peopleCount}
                  </p>
                  <button
                    onClick={increasePeopleCount}
                    style={{ backgroundColor: "transparent", border: "none" }}
                  >
                    <img
                      src={require("../../assets/plus.png")}
                      style={{ height: 25, width: 25, marginLeft: 5 }}
                      alt="plus icon"
                    />
                  </button> */}
                  <input
                    type="range"
                    className="form-range"
                    min={minPeopleCount}
                    max={maxPeopleCount}
                    step={step}
                    value={peopleCount}
                    id="customRange3"
                    onChange={handleRangeChange}
                  />
                  <p
                    style={{
                      marginLeft: 5,
                      lineHeight: "23px",
                      fontSize: 18,
                      marginTop: 2,
                      width: 22,
                      textAlign: "center",
                      color: "black",
                      marginBottom: "10px",
                    }}
                    className="totalcount"
                  >
                    {peopleCount}
                  </p>
                </div>
              </div>

              <div
                style={{
                  alignItems: "center",
                  flexDirection: "row",
                  marginTop: "10px",
                  borderRadius: 10,
                  backgroundColor: "#F9E9FF",
                  padding: "10px",
                  display: "flex",
                }}
                className="personsectionprice"
              >
                <img
                  src={require("../../assets/info.png")}
                  style={{ height: 16, width: 16 }}
                  alt="info icon"
                />
                <p
                  style={{
                    color: "#9252AA",
                    fontWeight: "700",
                    marginLeft: 5,
                    fontSize: "90%",
                    marginBottom: "0",
                  }}
                >
                  ₹ 49/person would be added to bill value in addition to dish
                  price
                </p>
              </div>

              <div>
                <div
                  style={{
                    flex: 1,
                    marginTop: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                ></div>
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                marginTop: 20,
                marginHorizontal: 16,
              }}
            >
              <button
                style={{
                  backgroundColor: activeTab === "left" ? "#D9D9D9" : "white",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 15,
                  padding: "5px 60px",
                  borderRight: "1px solid #ccc",
                }}
                onClick={() => setActiveTab("left")}
                className="tabButton"
              >
                <p
                  style={
                    activeTab === "left" ? styles.activeTab : styles.inactiveTab
                  }
                >
                  Inclusion
                </p>
              </button>
              <button
                style={{
                  backgroundColor: activeTab === "right" ? "#D9D9D9" : "white",
                  borderTopRightRadius: 10,
                  borderTopLeftRadius: 15,
                  padding: "5px 60px",
                }}
                onClick={() => setActiveTab("right")}
                className="tabButton"
              >
                <p
                  style={
                    activeTab === "right"
                      ? styles.activeTab
                      : styles.inactiveTab
                  }
                >
                  Dish Selected
                </p>
              </button>
              {renderTabContent(selectedDishQuantities)}
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-between justify-content-center  align-items-lg-center justify-content-lg-between">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: 12,
                }}
              >
                <p style={{ fontSize: 14, fontWeight: 500, color: "#333" }}>
                  Need more info?
                </p>
                <button
                  onClick={contactUsRedirection}
                  style={{
                    marginLeft: 5,
                    backgroundColor: "#E8E8E8",
                    borderRadius: 18,
                    borderWidth: 1,
                    borderColor: "#9252AA",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 96,
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      color: "#9252AA",
                      fontSize: 13,
                      fontWeight: "500",
                    }}
                  >
                    Contact Us
                  </div>
                </button>
              </div>

              <div>
                <div
                  style={{
                    padding: 7,
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: 10,
                    paddingRight: 11,
                    marginTop: 15,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "rgba(211, 75, 233, 0.10)",
                    borderColor: "#E6E6E6",
                    borderWidth: 1,
                  }}
                >
                  <div></div>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9252AA",
                        fontWeight: "400",
                        marginLeft: 4,
                      }}
                    >
                      Dish quantities vary based on guest count and selections.
                      Over 5 dishes: 550-700g per person. Under 5 dishes: 100g
                      per person per dish
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Row>
          <Col>
            <div
              style={{
                position: "fixed",
                bottom: 0,
                width: "100%",
                backgroundColor: "#EDEDED",
                borderTop: "1px solid #efefef",
                padding: "15px 0",
                left: "0",
              }}
            >
              <Button
                onClick={onContinueClick}
                style={{
                  width: "50%",
                  backgroundColor: isDishSelected ? "#9252AA" : "#F9E9FF",
                  borderColor: isDishSelected ? "#9252AA" : "#F9E9FF",
                }}
                disabled={!isDishSelected}
                className="continuebtnchef"
              >
                <div
                  style={{
                    className: "continueButtonLeftText",
                    color: isDishSelected ? "white" : "#343333",
                  }}
                >
                  Continue
                </div>
                <div
                  style={{
                    className: "continueButtonRightText",
                    color: isDishSelected ? "white" : "#343333",
                  }}
                >
                  {selectedCount} Items | ₹ {dishPrice * peopleCount}
                </div>
              </Button>
            </div>
          </Col>
        </Row>
        {isWarningVisibleForTotalAmount && (
          <Popup popupMessage={popupMessage} onClose={handleWarningClose} />
        )}
      </div>
    );
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

export default FoodDeliveryselectDate;