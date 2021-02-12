import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  storeTheme: ['store'],
});

const initialState = { store: 0 };

const storeTheme = (state = initialState, action) => {
  return { ...state, store: action.store };
};

export default createReducer(initialState, {
  [Types.STORE_THEME]: storeTheme,
});
