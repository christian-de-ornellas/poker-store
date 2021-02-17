import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  addCart: ['data'],
});

const initialState = [];

const add = (state = initialState, action) => [...state, ...action.data];

export default createReducer(initialState, {
  [Types.ADD_CART]: add,
});
