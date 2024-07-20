export const SET_STATE = 'SET_STATE';

export const setState = (subCategory, orderType, catValue, product) => ({
  type: SET_STATE,
  payload: { subCategory,orderType, catValue, product }
});