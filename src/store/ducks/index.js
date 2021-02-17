import { combineReducers } from 'redux';

import pokemon from './pokemon';
import cart from './cart';
import theme from './theme';
import modal from './modal';

export default combineReducers({
  pokemon,
  cart,
  theme,
  modal,
});
