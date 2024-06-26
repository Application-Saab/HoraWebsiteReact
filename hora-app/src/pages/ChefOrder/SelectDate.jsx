import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { Modal, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import { BASE_URL, GET_CUISINE_ENDPOINT, API_SUCCESS_CODE, GET_MEAL_DISH_ENDPOINT } from '../../utills/apiconstants';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SelectDate = ({ history }) => {
    const navigate = useNavigate();
    const { orderType, selectedDishDictionary, selectedDishPrice, selectedDishes , isDishSelected , selectedCount} = useLocation().state || {}; // Accessing subCategory and itemName safely
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);
    const [peopleCount, setPeopleCount] = useState(0);
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

    const increasePeopleCount = () => {
        setPeopleCount(peopleCount + 1)
        setDishPrice(dishPrice + 49)
    }

    const decreasePeopleCount = () => {
        if (peopleCount != 0) {
            setPeopleCount(peopleCount - 1)
            setDishPrice(dishPrice - 49)
        }
    }

        const onContinueClick = () => {
            if (dishPrice < 400) {
                setWarningVisible(true);
            }
            else {
                navigate(`/chefcheckout`, { state: { peopleCount, selectedDishDictionary, selectedDishPrice, selectedDishes, orderType , isDishSelected , selectedCount} });
            }
        }

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
            <div style={{ width:"23%", alignItems: 'center', borderRadius: 5, border: "1px solid #DADADA",  flexDirection: 'row', padding:"10px" , display:"flex" , marginBottom:"20px"}} className='ingredientsec'>
                <div style={{ marginLeft: 5, width: "45%", height: "auto", backgroundColor: '#F0F0F0', borderRadius: "10px", alignItems: 'center', padding:"5%" , justifyContent: 'center', marginRight: 15 }} className='ingredientleftsec'>
                <img src={`https://horaservices.com/api/uploads/${item.image}`} alt={item.name} style={{width:"100%" , height:"100%"}}/>
                </div>
                <div style={{ flexDirection: 'column', marginLeft: 1, width: 80 }} className='ingredientrightsec'>
                    <div style={{ fontSize: "80%", fontWeight: '500', color: '#414141' }} className='ingredientrightsecheading'>{item.name}</div>
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
            <img style={styles.burner} src={require('../../assets/burner.png')} alt="burner" />
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
            <img style={styles.verticalSeparator} src={require('../../assets/verticalSeparator.png')} alt="separator" />
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
        <div style={{width:"90%" , margin:"0 auto" , backgroundColor:"#EDEDED"}} className='selectdatesecouter'>
            <div style={{ flexDirection: 'row', backgroundColor: '#EFF0F3' , boxShadow:"0px 0px 6px 0px rgba(0, 0, 0, 0.23)" , display:"flex" ,justifyContent:"center" , alignItems:"center" , padding:"10px 0"}}>
                <img style={{width:"20px" , marginRight:"10px"}} src={require('../../assets/info.png')} />
                <p style={{ color: '#676767', fontSize: "94%", fontWeight: '400', margin:"0" }} className='billheading'>Bill value depends upon Dish selected + Number of people</p>
            </div>
          
            <div style={{width:"90%" , margin:"0 auto" , backgroudColor:"rgb(237, 237, 237)" , display:"flex"   , flexDirection:"column" ,  backgroundColor:"#edededc9"}} className='selectdateContainersec'>
                <div style={{  width:"98%" , margin:"10px" , padding:"10px 30px"}} className='selectdateContainer'>
                <div style={{  backgroundColor:"#fff"  , borderRadius:"10px" , padding:"10px 10px 20px 15px"}} className='peoplecontsec'>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 13, alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <img src={require('../../assets/people.png')} style={{ height: 25, width: 25 }} alt="people icon" />
                    <p style={{ margin: "0 0 0 10px", fontSize: "100%", padding:"0", color: '#3C3C3E', fontWeight: '500' }} className='selectdateContainerheadig'>How many people you are hosting?</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginRight: 9 }}>
                    <button onClick={decreasePeopleCount} style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <img src={require('../../assets/ic_minus.png')} style={{ height: 25, width: 25, marginLeft: 5 }} alt="minus icon" />
                    </button>
                    <p style={{ marginLeft: 5, lineHeight: '23px', fontSize: 18, marginTop: 2, width: 22, textAlign: 'center', color: 'black' , marginBottom:"10px" }} className='totalcount'>{peopleCount}</p>
                    <button onClick={increasePeopleCount} style={{ backgroundColor: 'transparent', border: 'none' }}>
                        <img src={require('../../assets/plus.png')} style={{ height: 25, width: 25, marginLeft: 5 }} alt="plus icon" />
                    </button>
                </div>

                </div>

                <div style={{ alignItems: 'center', flexDirection: 'row', marginTop:"10px", borderRadius: 10, backgroundColor: '#F9E9FF' , padding:"10px" , display:"flex"}} className='personsectionprice'>
                <img src={require('../../assets/info.png')} style={{ height: 16, width: 16 }} alt="info icon" />
                <p style={{ color: '#9252AA', fontWeight: '700', marginLeft: 5, fontSize: "90%" , marginBottom:"0"}}>₹ 49/person would be added to bill value in addition to dish price</p>
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