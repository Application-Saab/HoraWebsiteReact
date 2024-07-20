// src/reducers/stateReducer.js
import { SET_STATE } from '../actions/action';

const initialState = {
  subCategory: null,
  imgAlt: null,
  orderType: null,  // Add if needed
  catValue: null,   // Add if needed
  product: null     // Add product to the state
};

const stateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {
        ...state,
        subCategory: action.payload.subCategory,
        imgAlt: action.payload.imgAlt,
        orderType: action.payload.orderType, // Handle orderType
        catValue: action.payload.catValue,   // Handle catValue
        product: action.payload.product      // Handle product
      };
    default:
      return state;
  }
};

export default stateReducer;
