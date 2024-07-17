import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { Modal, Button, Container, Row, Col, Spinner } from "react-bootstrap";
import {
  BASE_URL,
  GET_CUISINE_ENDPOINT,
  API_SUCCESS_CODE,
  GET_MEAL_DISH_ENDPOINT,
} from "../../utills/apiconstants";
import { useNavigate } from "react-router-dom";
import RectanglePurple from "../../assets/Rectanglepurple.png";
import RectangleWhite from "../../assets/rectanglewhite.png";
import MinusIcon from "../../assets/minus.png";
import PlusIcon from "../../assets/plus.png";
import Popup from "../../utills/popup";
import warningImage from "../../assets/Group.png";
import { CardSkeleton } from "../../component/CardSkeleton";
import {
  CardSkeletonGrid,
} from "../../component/ChefCardSkeleton";

const CreateOrder = ({ history }) => {
  const viewBottomSheetRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const [orderType, setOrderType] = useState(2);
  const [isDishSelected, setIsDishSelected] = useState(false);
  const [selected, setSelected] = useState("veg");
  const [cuisines, setCuisines] = useState([]);
  const [selectedCuisines, setSelectedCuisines] = useState([]);
  const [expandedCategories, setExpandedCategories] = useState([]);
  const [mealList, setMealList] = useState([]);
  const [isSelectedDish, setIsSelectedDish] = useState(false);
  const [dishDetail, setDishDetail] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);
  const [selectedDishes, setSelectedDishes] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isViewAllSheetOpen, setIsViewAllSheetOpen] = useState(false);
  const [selectedDishPrice, setSelectedDishPrice] = useState(0);
  const [selectedDishDictionary, setSelectedDishDictionary] = useState({});
  const [isNonVegSelected, setIsNonVegSelected] = useState(false);
  const [isVegSelected, setIsVegSelected] = useState(true);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isWarningVisibleForTotalAmount, setWarningVisibleForTotalAmount] =
    useState(false);
  const [isWarningVisibleForDishCount, setWarningVisibleForDishCount] =
    useState(false);
  const [isWarningVisibleForCuisineCount, setWarningVisibleForCuisineCount] =
    useState(false);
  const [isViewAllExpanded, setIsViewAllExpanded] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState({
    image: "",
    title: "",
    body: "",
    button: "",
  });

  const navigate = useNavigate();
  const handleWarningClose = () => {
    setWarningVisibleForDishCount(false);
    setWarningVisibleForCuisineCount(false);
    setWarningVisibleForTotalAmount(false);
  };

  // get category of cuisines
  useEffect(() => {
    const fetchCuisineData = async () => {
      try {
        const url = BASE_URL + GET_CUISINE_ENDPOINT;
        const requestData = {
          type: "cuisine",
        };
        const response = await axios.post(url, requestData, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === API_SUCCESS_CODE) {
          const names = response.data.data.configuration.map(
            ({ _id, name }) => [_id, name]
          );
          setCuisines(names);
        }
      } catch (error) {
        console.log("Error Fetching Data:", error.message);
      }
    };
    fetchCuisineData();
  }, []);

  useEffect(() => {
    if (cuisines.length > 0 && selectedCuisines.length === 0) {
      handleCuisinePress(cuisines[0][0]);
    }
  }, [cuisines, selectedCuisines]);

  const renderItem = ({ item }) => {
    const isSelected = selectedCuisines.includes(item[0]);

    return (
      <div className="d-flex align-items-center justify-content-between mb-2">
        <Button
          variant={isSelected ? "primary" : "outline-primary"}
          onClick={() => handleCuisinePress(item[0])}
          className="cusinebtn"
        >
          {item[1]}
        </Button>
        {expandedCategories.includes(item[0]) && (
          <ListGroup className="d-flex flex-wrap">
            {cuisines.map((cuisine, index) => (
              <ListGroupItem
                key={index}
                className="flex-grow-1"
                style={{ flexBasis: "calc(25% - 10px)", margin: "5px" }} // Adjust margin and flexBasis as needed
              >
                {renderItem({ item: cuisine })}
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </div>
    );
  };

  const handleIncreaseQuantity = (dish, isSelected) => {
    if (selectedDishes.length >= 0 && !isSelected) {
      setIsButtonVisible(true);
    }
    if (selectedDishes.length > 11 && !isSelected) {
      setWarningVisibleForDishCount(true);
      setPopupMessage({
        image: warningImage,
        title: "Total Dishes Selected can not be more than 12 Dish.",
        body: "Total dish selected can not be more than 12 dish, for more help contact us.",
        button: "Contact Us",
      });
    } else {
      const updatedSelectedDishes = [...selectedDishes];
      const updatedSelectedDishDictionary = { ...selectedDishDictionary };
      if (updatedSelectedDishes.includes(dish._id)) {
        const index = updatedSelectedDishes.indexOf(dish._id);
        updatedSelectedDishes.splice(index, 1);
      } else {
        updatedSelectedDishes.push(dish._id);
      }
      setSelectedDishes(updatedSelectedDishes);
      setSelectedCount(updatedSelectedDishes.length);
      if (isSelected) {
        const updatedPrice = selectedDishPrice - parseInt(dish.dish_rate, 10);
        setSelectedDishPrice(updatedPrice);
      } else {
        const updatedPrice = selectedDishPrice + parseInt(dish.dish_rate, 10);
        setSelectedDishPrice(updatedPrice);
      }
      if (updatedSelectedDishDictionary[dish._id]) {
        delete updatedSelectedDishDictionary[dish._id];
      } else {
        updatedSelectedDishDictionary[dish._id] = dish;
      }
      setSelectedDishDictionary(updatedSelectedDishDictionary);
      setIsDishSelected(updatedSelectedDishes.length > 0);
    }
  };

  useEffect(() => {
    setIsButtonVisible(false);
  }, []);

  const handleCuisinePress = (cuisineId) => {
    if (selectedCuisines.length < 3 || selectedCuisines.includes(cuisineId)) {
      setSelectedCuisines((prevSelected) => {
        if (prevSelected.includes(cuisineId)) {
          return prevSelected.filter((item) => item !== cuisineId);
        } else {
          return [...prevSelected, cuisineId];
        }
      });
    } else {
      setWarningVisibleForCuisineCount(true);
      setPopupMessage({
        image: warningImage,
        title: "One chef is only expert in 3 cuisine only.",
        body: "Our chef is expert in cuisines only please select appropriate number of cuisines to continue",
        button: "Continue",
      });
    }
  };

  const fetchMealBasedOnCuisine = async () => {
    try {
      setLoading(true);
      const url = BASE_URL + GET_MEAL_DISH_ENDPOINT;
      const is_dish = isNonVegSelected ? 0 : 1;
      const requestData = {
        cuisineId: selectedCuisines,
        is_dish: is_dish,
      };
      const response = await axios.post(url, requestData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === API_SUCCESS_CODE) {
        setMealList(response.data.data);
      }
    } catch (error) {
      console.log("Error Fetching Data:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (selectedCuisines.length > 0 && selectedCuisines.length <= 3) {
      fetchMealBasedOnCuisine();
    } else {
      setMealList([]);
      setSelectedDishDictionary({});
      setIsDishSelected(false);
      setSelectedDishes([]);
      setSelectedCount(0);
      setSelectedDishPrice(0);
    }
  }, [selectedCuisines, isNonVegSelected]);

  const renderDishItem = ({ item }) => (
    <div>
      {item.dish.length > 0 ? (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "top",
              margin: "9px 19px 0px 6px",
            }}
          >
            <h1
              style={{ color: "#000", fontSize: "16px", marginBottom: "0px" }}
            >
              {item.mealObject.name}
              {"  "}
              {"(" + item.dish.length + ")"}
            </h1>
            <Button
              onClick={() => handleViewAll(item.mealObject._id)}
              style={{
                color: expandedCategories.includes(item.mealObject._id)
                  ? "#000"
                  : "#fff",
                fontWeight: "400",
                textDecorationLine: "none",
                fontSize: 12,
              }}
              className={`viewbtn ${
                expandedCategories.includes(item.mealObject._id)
                  ? "clickedviewAll"
                  : ""
              }`}
            >
              View All
            </Button>
          </div>
          <div className="dish-item">
            {expandedCategories.includes(item.mealObject._id)
              ? item.dish.map((dish, index) => {
                  const dishImage = dish.image
                    ? `https://horaservices.com/api/uploads/${dish.image}`
                    : "";
                  const specialApplianceImage =
                    dish.special_appliance_id.length > 0 &&
                    dish.special_appliance_id[0].image
                      ? `https://horaservices.com/api/uploads/${dish.special_appliance_id[0].image}`
                      : "";
                  const selectedImage = selectedDishes.includes(dish._id)
                    ? dishImage
                    : dishImage;

                  return (
                    <div
                      key={index}
                      className={`dish-item-inner ${
                        dish.is_dish === 1 ? "veg-border" : "non-veg-border"
                      }`}
                      style={{
                        backgroundImage: `url(${
                          selectedDishes.includes(dish._id)
                            ? RectanglePurple
                            : RectangleWhite
                        })`,
                      }}
                    >
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt={dish.name}
                          className={`dish-image ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        />
                      ) : (
                        <div
                          className={`dish-placeholder ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        >
                          Image not available
                        </div>
                      )}
                      <p
                        className={`dish-name ${
                          selectedDishes.includes(dish._id) ? "selected" : ""
                        }`}
                      >
                        {isDishSelected &&
                        dish.special_appliance_id.length > 0 &&
                        selectedDishes.includes(dish._id)
                          ? dish.special_appliance_id[0].name
                          : dish.name}
                      </p>
                      <div className="d-flex justify-content-between w-100 px-3 dishPrice">
                        <span
                          className={`dish-price ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        >
                          ₹ {dish.dish_rate}
                        </span>
                        <Button
                          className="pluBtn"
                          onClick={() =>
                            handleIncreaseQuantity(
                              dish,
                              selectedDishes.includes(dish._id)
                            )
                          }
                        >
                          <img
                            src={
                              selectedDishes.includes(dish._id)
                                ? MinusIcon
                                : PlusIcon
                            }
                            style={{ width: 21, height: 21 }}
                          />
                        </Button>
                      </div>
                      <div
                        className={`dish-indicator ${
                          dish.is_dish === 1 ? "veg" : "non-veg"
                        }`}
                      ></div>
                    </div>
                  );
                })
              : item.dish.slice(0, 7).map((dish, index) => {
                  const dishImage = dish.image
                    ? `https://horaservices.com/api/uploads/${dish.image}`
                    : "";
                  const specialApplianceImage =
                    dish.special_appliance_id.length > 0 &&
                    dish.special_appliance_id[0].image
                      ? `https://horaservices.com/api/uploads/${dish.special_appliance_id[0].image}`
                      : "";
                  const selectedImage = selectedDishes.includes(dish._id)
                    ? dishImage
                    : dishImage;

                  return (
                    <div
                      key={index}
                      className={`dish-item-inner ${
                        dish.is_dish === 1 ? "veg-border" : "non-veg-border"
                      }`}
                      style={{
                        backgroundImage: `url(${
                          selectedDishes.includes(dish._id)
                            ? RectanglePurple
                            : RectangleWhite
                        })`,
                      }}
                    >
                      {selectedImage ? (
                        <img
                          src={selectedImage}
                          alt={dish.name}
                          className={`dish-image ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        />
                      ) : (
                        <div
                          className={`dish-placeholder ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        >
                          Image not available
                        </div>
                      )}
                      <p
                        className={`dish-name ${
                          selectedDishes.includes(dish._id) ? "selected" : ""
                        }`}
                      >
                        {isDishSelected &&
                        dish.special_appliance_id.length > 0 &&
                        selectedDishes.includes(dish._id)
                          ? dish.special_appliance_id[0].name
                          : dish.name}
                      </p>
                      <div className="d-flex justify-content-between w-100 px-3 dishPrice">
                        <span
                          className={`dish-price ${
                            selectedDishes.includes(dish._id) ? "selected" : ""
                          }`}
                        >
                          ₹ {dish.dish_rate}
                        </span>
                        <Button
                          className="pluBtn"
                          onClick={() =>
                            handleIncreaseQuantity(
                              dish,
                              selectedDishes.includes(dish._id)
                            )
                          }
                        >
                          <img
                            src={
                              selectedDishes.includes(dish._id)
                                ? MinusIcon
                                : PlusIcon
                            }
                            style={{ width: 21, height: 21 }}
                          />
                        </Button>
                      </div>
                      <div
                        className={`dish-indicator ${
                          dish.is_dish === 1 ? "veg" : "non-veg"
                        }`}
                      ></div>
                    </div>
                  );
                })}
          </div>
          <div className="chef-divider" style={{ marginTop: "20px" }}></div>
        </div>
      ) : null}
    </div>
  );

  const addDish = (selectedDishPrice) => {
    navigate(`/book-chef-cook-for-party/order-details`, {
      state: {
        selectedDishDictionary,
        selectedDishPrice,
        selectedDishes,
        orderType,
        isDishSelected,
        selectedCount,
      },
    });
  };

  const closeBottomSheet = () => {
    setDishDetail(null);
    bottomSheetRef.current.close();
  };

  const addDishAndCloseBottomSheet = () => {
    closeBottomSheet();
  };

  const RenderBottomSheetContent = () => (
    <div className="bottom-sheet-content">
      <img
        src={`https://horaservices.com/api/uploads/${dishDetail.image}`}
        alt={dishDetail.name}
        className="bottom-sheet-image"
      />
      <h5 className="bottom-sheet-title">{dishDetail.name}</h5>
      <hr />
      <p className="bottom-sheet-description">{dishDetail.description}</p>
      <div className="bottom-sheet-info">
        <div className="info-item">
          <strong>Per Plate Qty:</strong>{" "}
          {dishDetail.per_plate_qty.qty
            ? `${dishDetail.per_plate_qty.qty} ${dishDetail.per_plate_qty.unit}`
            : "NA"}
        </div>
        <div className="info-item">
          <strong>Price Per Plate:</strong>{" "}
          {dishDetail.dish_rate ? `₹ ${dishDetail.dish_rate}` : "NA"}
        </div>
        <div className="info-item">
          <strong>Price:</strong>{" "}
          {dishDetail.price ? `₹ ${dishDetail.price}` : "NA"}
        </div>
      </div>
      <Button variant="primary" onClick={addDishAndCloseBottomSheet}>
        Add Dish
      </Button>
    </div>
  );

  const openBottomSheet = (dish, ref) => {
    setDishDetail(dish);
    ref.current.open();
  };

  const closeViewAllSheet = () => {
    setIsViewAllSheetOpen(false);
  };

  const openViewAllSheet = (dish, ref) => {
    setDishDetail(dish);
    setIsViewAllSheetOpen(true);
  };

  const handleSwitchChange = (value) => {
    setSelected(value);
    if (value === "veg") {
      setIsVegSelected(true);
      setIsNonVegSelected(false);
    } else {
      setIsVegSelected(false);
      setIsNonVegSelected(true);
    }
  };

  const handleViewAll = (categoryId) => {
    setIsViewAllExpanded(!isViewAllExpanded);

    setExpandedCategories((prevExpanded) =>
      categoryId === prevExpanded[0]
        ? prevExpanded.length === 1
          ? []
          : prevExpanded.slice(1) // If the first category is clicked, toggle its expansion state only if it's not the only expanded category
        : prevExpanded.includes(categoryId)
        ? prevExpanded.filter((id) => id !== categoryId)
        : [...prevExpanded, categoryId]
    );
  };

  if(loading){
    return <CardSkeletonGrid loading={true} />;
  }

  return (
    <>
      <div className="order-container">
        {/* {loading &&
          [1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
            <div className="decimagecontainer" style={styles.imageContainer}>
              <CardSkeleton key={index} />
            </div>
          ))}
        {!loading && ( */}
          <>
            <Row className="d-flex justify-content-start">
              <div style={{ display: "flex", margin: "10px 0 0" }}>
                <div style={{ marginRight: "10px" }}>
                  <Button
                    variant={selected === "veg" ? "success" : "outline-success"}
                    onClick={() => handleSwitchChange("veg")}
                    className="cuisinebtn"
                  >
                    Only Veg
                  </Button>
                </div>
                <div>
                  <Button
                    variant={
                      selected === "non-veg" ? "danger" : "outline-danger"
                    }
                    onClick={() => handleSwitchChange("non-veg")}
                    className="cuisinebtn"
                  >
                    Non-Veg
                  </Button>
                </div>
              </div>
              <div className="chef-divider" style={{ marginTop: "20px" }}></div>
              <div style={{ margin: "10px 0 0 0" }}>
                <h1
                  style={{
                    fontSize: "14px",
                    color: "#000",
                    marginTop: "0px",
                    marginBottom: "0",
                  }}
                >
                  Select Cusinies
                </h1>
                <ListGroup className="cuisine-list d-flex flex-row flex-wrap justify-content-start">
                  {cuisines.map((cuisine, index) => (
                    <ListGroupItem key={index} className="cuisine-item">
                      {renderItem({ item: cuisine })}
                    </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Row>
            <div className="chef-divider"></div>
            <Row className="mt-1">
              <Col>
                {selectedCuisines.length > 0 && (
                  <ListGroup className="dish-list">
                    {mealList.map((meal) => (
                      <div>
                        <ListGroupItem key={meal._id} className="dish-item">
                          {renderDishItem({ item: meal })}
                        </ListGroupItem>
                      </div>
                    ))}
                  </ListGroup>
                )}
              </Col>
            </Row>

            {isButtonVisible && (
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
                  onClick={() => addDish(selectedDishPrice)}
                  style={{
                    width: "50%",
                    backgroundColor: isDishSelected ? "#9252AA" : "#F9E9FF",
                    borderColor: isDishSelected ? "#9252AA" : "#F9E9FF",
                  }}
                  disabled={!isDishSelected}
                  className="continuebtnchef"
                >
                  <div
                    className="continueButtonLeftText"
                    style={{
                      color: isDishSelected ? "white" : "#fff",
                    }}
                  >
                    Continue
                  </div>
                  <div
                    className="continueButtonRightText"
                    style={{
                      color: isDishSelected ? "white" : "#fff",
                    }}
                  >
                    {selectedCount} Items | ₹ {selectedDishPrice}
                  </div>
                </Button>
              </div>
            )}
          </>
        {/* )} */}
      </div>
      <Modal show={isViewAllSheetOpen} onHide={closeViewAllSheet}>
        <Modal.Header closeButton>
          <Modal.Title>View All</Modal.Title>
        </Modal.Header>
        <Modal.Body>{dishDetail && <RenderBottomSheetContent />}</Modal.Body>
      </Modal>

      {(isWarningVisibleForCuisineCount || isWarningVisibleForDishCount) && (
        <Popup popupMessage={popupMessage} onClose={handleWarningClose} />
      )}
    </>
  );
};

const styles = {
  imageContainer: {
    position: "relative",
    width: "270px",
    backgroundColor: "#fff",
    marginBottom: 40,
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.14)",
    borderRadius: "5px",
    overflow: "hidden", 
    transition: "transform 0.3s ease-in-out", 
    margin: "10px 12px 20px",
    padding: "6px 5px 10px",
  },
};

export default CreateOrder;
