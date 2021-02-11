import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addCart: ['data'],
  removeCart: ['id'],
});

const initialState = [];

const add = (state = initialState, action) => [...state, ...action.data];
const remove = (state = initialState, action) =>
  state.filter((item) => item.id !== action.id);

export default createReducer(initialState, {
  [Types.ADD_CART]: add,
  [Types.REMOVE_CART]: remove,
});
