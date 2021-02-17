import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  showModal: ['dialog'],
});

const initialState = { show: false, message: 'Modal global mané' };

const modal = (state = initialState, action) => {
  return { ...state, ...action.dialog };
};

export default createReducer(initialState, {
  [Types.SHOW_MODAL]: modal,
});
