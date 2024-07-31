import React, {useState, useEffect} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Helmet} from "react-helmet";
import checkImage from '../assets/tick.jpeg.jpeg';
import {getDecorationProductOrganizationSchema} from "../utills/schema";
import '../css/decoration.css';
import buynowImage from "../assets/experts.png";
import buynowImage1 from "../assets/secured.png";
import buynowImage2 from "../assets/service.png";

function DecorationCatDetails() {
  const [selCat, setSelCat] = useState("");
  const [orderType, setOrderType] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderState, setOrderState] = useState({
    selectedItems: {},
    totalPrice: 0,
    basePrice: 0
  });

  const [modalData, setModalData] = useState([]);

  const navigate = useNavigate();
  const {subCategory: urlSubCategory, catValue: urlCatValue, productName} = useParams();
  const formattedProductName = productName.replace(/-/g, ' ');

  const {
    subCategory: stateSubCategory,
    catValue: stateCatValue,
    product: stateProduct
  } = useSelector((state) => state.state || {});
  const subCategory = stateSubCategory || urlSubCategory;
  const catValue = stateCatValue || urlCatValue;
  const product = stateProduct || formattedProductName;

  const schemaOrg = getDecorationProductOrganizationSchema(product);
  const scriptTag = JSON.stringify(schemaOrg);

  useEffect(() => {
    setModalData([
      {
        id: 0,
        title: `Fairy Lights`,
        image: `https://cheetah.cherishx.com/uploads/165148276684691.jpg`,
        description: 'Fairy lights are very unique concept in the market This is very good light for home recoration',
        buttonText: 'Add',
        price: 100
      },
      {
        id: 1,
        title: `Desktop Lights`,
        image: `https://cheetah.cherishx.com/uploads/165148276684691.jpg`,
        description: 'This light is very good condition of desktop lights This is very good light for home recoration',
        buttonText: 'Add',
        price: 100
      },
      {
        id: 2,
        title: `25 Balloon`,
        image: `https://cheetah.cherishx.com/uploads/162635507482230.jpg`,
        description: '25 ballon for your birthday is very good This is very good light for home recoration',
        buttonText: 'Add',
        price: 130
      },
      {
        id: 3,
        title: `Blue Light`,
        image: `https://cheetah.cherishx.com/uploads/164174012749611.jpg`,
        description: 'This is very good light for home recoration blue is the water color naturaly',
        buttonText: 'Add',
        price: 150
      },
      {
        id: 4,
        title: `NBl Light`,
        image: `https://cheetah.cherishx.com/uploads/164174012749611.jpg`,
        description: 'This is very good light for home recoration',
        buttonText: 'Add',
        price: 150
      },{
        id: 5,
        title: `Neon Light`,
        image: `https://cheetah.cherishx.com/uploads/164174012749611.jpg`,
        description: 'This is very good light for home recoration',
        buttonText: 'Add',
        price: 150
      },
    ]);
    setOrderState(prevState => ({
      ...prevState,
      basePrice: 1000, // Assuming a base price for demonstration
      totalPrice: 1000
    }));
  }, []);

  const updateOrderState = (itemId, quantity) => {
    setOrderState(prevState => {
      const item = modalData.find(item => item.id === itemId);
      if (!item) return prevState; // Handle case where item is not found

      const newSelectedItems = {...prevState.selectedItems, [itemId]: quantity};

      // Precompute item prices into a map for efficient lookup
      const itemPriceMap = modalData.reduce((map, item) => {
        map[item.id] = item.price;
        return map;
      }, {});

      // Calculate new add-on total price
      const newAddOnTotalPrice = Object.entries(newSelectedItems).reduce((total, [id, qty]) => {
        const itemPrice = itemPriceMap[Number(id)] || 0;
        return total + (itemPrice * qty);
      }, 0);

      const newTotalPrice = prevState.basePrice + newAddOnTotalPrice;

      return {
        selectedItems: newSelectedItems,
        totalPrice: newTotalPrice,
        basePrice: prevState.basePrice
      };
    });
  };


  const handleAddItem = (itemId) => {
    const currentQuantity = orderState.selectedItems[itemId] || 0;
    updateOrderState(itemId, currentQuantity + 1);
    console.log(itemId.id)
  };

  const handleRemoveItem = (itemId) => {
    const currentQuantity = orderState.selectedItems[itemId] || 0;
    if (currentQuantity > 0) {
      updateOrderState(itemId, currentQuantity - 1);
    }
  };

  const handleCheckout = (subCategory, product) => {
    const stateData = {from: window.location.pathname, subCategory, product, orderType, catValue};

    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate('/login', {state: stateData});
    } else {
      setIsModalOpen(true);
    }
  };

  function addSpaces(subCategory) {
    let result = "";
    for (let i = 0; i < subCategory.length; i++) {
      if (i !== 0 && subCategory[i] === subCategory[i].toUpperCase()) {
        result += " ";
      }
      result += subCategory[i];
    }
    setSelCat(result);
  }

  useEffect(() => {
    addSpaces(subCategory);
  }, [subCategory]);


  const handleCheckout2 = (subCategory, product) => {
    const basePrice = orderState.basePrice;
    const addonsTotal = orderState.totalPrice - basePrice;

    // Prepare the order details
    const orderDetails = Object.keys(orderState.selectedItems).map(itemId => {
      const item = modalData.find(item => item.id === Number(itemId));
      return {
        title: item.title,
        price: item.price,
        description: item.description,
        quantity: orderState.selectedItems[itemId],
        total: item.price * orderState.selectedItems[itemId]
      };
    });

    // Store prices and order details in local storage
    localStorage.setItem('basePrice', basePrice);
    localStorage.setItem('addonsTotal', addonsTotal);
    localStorage.setItem('orderState', JSON.stringify(orderState));
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    const stateData = { from: window.location.pathname, subCategory, product, orderType, catValue, orderDetails };

    if (localStorage.getItem("isLoggedIn") !== "true") {
      navigate('/login', { state: stateData });
    } else {
      navigate('/checkout', { state: { subCategory, product, orderType, orderDetails } });
    }
  };



  const getItemInclusion = (inclusion) => {
    const htmlString = inclusion[0];
    const withoutTags = htmlString.replace(/<[^>]*>/g, '');
    const withoutSpecialChars = withoutTags.replace(/&#[^;]*;/g, ' ');
    const statements = withoutTags.split('<div>');
    const inclusionItems = statements.flatMap(statement => statement.split("-").filter(item => item.trim() !== ''));
    const inclusionList = inclusionItems.map((item, index) => (
        <li key={index} className="inclusionstyle">
          <img src={checkImage} alt="Info" style={{height: 13, width: 13, marginRight: 10}}/>
          {item.trim()}
        </li>
    ));
    return (
        <div>
          <div style={{fontSize: "21px", borderBottom: "1px solid #e7eff9", marginBottom: "10px"}}>Inclusions</div>
          <ul>
            {inclusionList}
          </ul>
        </div>
    );
  }

  const closeModal = () => setIsModalOpen(false);

  return (
      <div className="App" style={{backgroundColor: "#EDEDED"}}>
        <Helmet>
          <title>Balloon and Flower Decoration @999</title>
          <meta name="description"
                content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
          <meta name="keywords" content="Balloon and Flower Decoration @999"/>
          <meta property="og:title" content="Balloon and Flower Decoration by Professional Decorators"/>
          <meta property="og:description"
                content="Celebrate Anniversary, Birthday & other Occasions with Candlelight Dinners, Surprises & Balloon Decorations"/>
          <meta property="og:image" content="https://horaservices.com/api/uploads/attachment-1706520980436.png"/>
          <script type="application/ld+json">{JSON.stringify(getDecorationProductOrganizationSchema(product))}</script>
          <meta name="robots" content="index, follow"/>
          <meta name="author" content="Hora Services"/>
          <meta property="og:url"
                content={`https://horaservices.com/balloon-decoration/${catValue}/product/${product.name}`}/>
          <meta property="og:type" content="website"/>
        </Helmet>
        <div style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingTop: "10px",
            position: "relative"
          }}
               className="decDetails">
            <div style={{width: "50%", textAlign: "center"}} className="decDetailsLeft">
              <div style={{
                width: "80%",
                boxShadow: "0 1px 8px rgba(0,0,0,.18)",
                padding: "10px",
                margin: "0 auto",
                position: "relative"
              }}
                   className="decDetailsImage">
                <img src={`https://horaservices.com/api/uploads/${product.featured_image}`} style={{width: "100%"}}/>
                <div style={{position: "absolute", bottom: 20, right: 20, borderRadius: "50%", padding: 10}}>
                  <span style={{color: "rgba(157, 74, 147, 0.6)", fontWeight: "600"}}>Hora</span>
                </div>
              </div>
            </div>
            <div style={{width: "50%", paddingLeft: "20px", paddingRight: "50px"}} className="decDetailsRight">
              <div style={{
                boxShadow: "0 1px 8px rgba(0,0,0,.18)",
                padding: "10px",
                marginBottom: "12px",
                backgroundColor: "#fff"
              }}>
                <h2 style={{fontSize: "12px", color: "#9252AA"}}>{'Home'}{' > '}{subCategory}{' > '}{product.name}</h2>
                <h1 style={{color: "#222", fontSize: "21px", fontWeight: "#222"}}>{product.name}</h1>
                <p className='mb-2'
                   style={{fontSize: "18px", color: "#9252AA", fontWeight: "600"}}> ₹ {orderState.totalPrice}</p>
              </div>

              <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px", marginBottom: "12px" , backgroundColor:"#fff"}}>
                {getItemInclusion(product.inclusion)}
                  <button onClick={() => setIsModalOpen(true)} className="button_inclusion">
                    Continue
                  </button>

              </div>

              <div style={{
                boxShadow: "0 1px 8px rgba(0,0,0,.18)",
                padding: "10px",
                marginBottom: "10px",
                backgroundColor: "#fff"
              }} className="whyHoraSec">
                <p style={{fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9"}}
                   className="whyHoraHeading">Why Hora</p>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}
                     className="whyHoraSecInner">
                  <div className="whyHoraSecBox">
                    <img src={buynowImage}/>
                    <p style={{color: "gray", fontSize: "12px"}} className="whyHoraSubheading">Experts Decorations</p>
                  </div>
                  <div className="whyHoraSecBox">
                    <img src={buynowImage1}/>
                    <p style={{color: "gray", fontSize: "12px"}} className="whyHoraSubheading">Secured Transactions</p>
                  </div>
                  <div className="whyHoraSecBox">
                    <img src={buynowImage2}/>
                    <p style={{color: "gray", fontSize: "12px"}} className="whyHoraSubheading">100% Service Guaranteed</p>
                  </div>

                </div>
              </div>

              <div style={{ boxShadow: "0 1px 8px rgba(0,0,0,.18)", padding: "10px" , backgroundColor:"#fff"}} className="canceltionPolicy">
                <p style={{ fontSize: "21px", color: "rgb(34, 34, 34)", borderBottom: "1px solid #e7eff9" }}
                   className="cancelltionPolicySecHeading">Cancellation and Order Change Policy:</p>
                <p className="cancelltionPolicySecSubHeading">- Till the order is not assigned to service provider,
                  100% of the amount will be refunded, otherwise 50% of advance will be deducted as cancellation
                  charges to compensate the service provider.</p>
                <p className="cancelltionPolicySecSubHeading">- The order cannot be edited after paying advance.
                  Customer can cancel the order and replace the new order with required changes.</p>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
            <div className="modal-overlay" style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div className="modal-content" style={{
                backgroundColor: '#fff',
                borderRadius: '8px',
                padding: '20px',
                maxWidth: '80%',
                maxHeight: '95%',
                overflowY: 'auto',
                position: 'relative'
              }}>
                <button className="modal-close" onClick={() => setIsModalOpen(false)} style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '20px',
                  cursor: 'pointer'
                }}>X
                </button>

                <h2 className="modal-heading"
                    style={{fontSize: '28px', color: '#9252AA', textAlign: 'center', marginBottom: '20px'}}>Select Customization</h2>

                <div className="modal-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                  gap: '20px'
                }}>

                  {modalData.map((item) => (
                      <div key={item.id} className="modal-item" style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px',
                        textAlign: 'center'
                      }}>
                        <img src={item.image} alt={item.title} className="modal-image"
                             style={{width: '100%', borderRadius: '8px', height: '150px'}}/>
                        <h3 className="modal-title" style={{fontSize: '18px', margin: '10px 0'}}>{item.title}</h3>
                        <h3 className="modal-title" style={{fontSize: '14px'}}>{item.description}</h3>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', marginTop: '10px'}}>
                          <p className='modal-price'
                             style={{fontSize: '18px', color: '#9252AA', fontWeight: '600', margin: '0'}}>₹ {item.price}</p>
                          <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                            {!orderState.selectedItems[item.id] ? (
                                <button onClick={() => handleAddItem(item.id)} className="modal-button" style={{
                                  backgroundColor: '#9252AA',
                                  color: '#fff',
                                  border: 'none',
                                  borderRadius: '4px',
                                  padding: '5px 10px', // Made the button slightly smaller
                                  cursor: 'pointer'
                                }}>{item.buttonText}</button>
                            ) : (
                                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                                  <button onClick={() => handleRemoveItem(item.id)} className="modal-button" style={{
                                    backgroundColor: '#f0f0f0',
                                    color: '#333',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    padding: '5px 10px',
                                    cursor: 'pointer'
                                  }}>-
                                  </button>
                                  <span style={{
                                    fontSize: '18px',
                                    color: '#9252AA'
                                  }}>{orderState.selectedItems[item.id]}</span>
                                  <button onClick={() => handleAddItem(item.id)} className="modal-button" style={{
                                    backgroundColor: '#9252AA',
                                    color: '#fff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '5px 10px', // Made the button slightly smaller
                                    cursor: 'pointer'
                                  }}>+
                                  </button>
                                </div>
                            )}
                          </div>
                        </div>
                      </div>
                  ))}


                </div>

                <div className="modal-footer" style={{
                  display: 'flex',
                  justifyContent: 'space-between',  // Space between the button and the list
                  alignItems: 'flex-end',  // Align items to the bottom
                  marginTop: '20px',
                  borderTop: '1px solid #e7eff9',
                  paddingTop: '10px'
                }}>
                  <button
                      onClick={() => handleCheckout2(subCategory, product)}
                      // className="continue-button"
                      style={{
                        backgroundColor: '#9252AA',
                        color: 'white',
                        border: 'none',
                        borderRadius: '19.39px',
                        padding: '8px 12px',
                        cursor: 'pointer',
                        fontSize: '16px',
                        width: '120px',
                        marginRight: '10px'
                      }}>
                    Continue
                  </button>
                  <div style={{textAlign: 'right'}}>
                    <ul style={{listStyleType: 'none', padding: 0, margin: 0}}>
                      <h2 style={{fontSize: '24px', color: '#9252AA', marginBottom: '10px'}}>{product.name}</h2>
                      <li style={{fontSize: '20px', color: '#9252AA', fontWeight: '600'}}>Product Price:
                        ₹ {orderState.basePrice}</li>
                      <li style={{fontSize: '20px', color: '#9252AA', fontWeight: '600'}}>Add-Ons Total:
                        ₹ {orderState.totalPrice - orderState.basePrice}</li>
                      <li style={{fontSize: '22px', color: '#e74c3c', fontWeight: '700'}}>Total Price:
                        ₹ {orderState.totalPrice}</li>

                      {Object.keys(orderState.selectedItems).map(itemId => {
                        const item = modalData.find(item => item.id === Number(itemId));
                        if (!item) return null;
                        const quantity = orderState.selectedItems[itemId];
                        return (
                            <li key={itemId} style={{fontSize: '18px', color: '#555', marginTop: '10px'}}>
                              {/*<span style={{fontWeight: '600'}}>{item.title}:</span> ₹ {item.price} x {quantity} = ₹ {item.price * quantity}*/}
                            </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}

export default DecorationCatDetails;
