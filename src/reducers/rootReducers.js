import { combineReducers } from 'redux';
import stateReducer from './stateReducer';

const rootReducer = combineReducers({
  state: stateReducer
});

export default rootReducer;