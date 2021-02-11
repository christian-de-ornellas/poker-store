import { combineReducers } from 'redux';

import pokemon from './pokemon';
import cart from './cart';

export default combineReducers({
  pokemon,
  cart,
});
