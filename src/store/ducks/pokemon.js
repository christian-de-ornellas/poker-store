import { createActions, createReducer } from 'reduxsauce';
import { findAll } from '../../services/pokemon';

export const { Types, Creators } = createActions({
  pokemonSuccess: ['data'],
});

const initialState = [];

const pokemonSuccess = (state = initialState, action) => [
  ...state,
  ...action.data,
];

export default createReducer(initialState, {
  [Types.POKEMON_SUCCESS]: pokemonSuccess,
});

export const fetchAllPokemon = async (dispatch) => {
  const response = await findAll();
  dispatch(Creators.pokemonSuccess(response));
};
