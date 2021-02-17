import { createActions, createReducer } from 'reduxsauce';
import { findAll } from '../../services/pokemon';

export const { Types, Creators } = createActions({
  pokemonSuccess: ['loading', 'data'],
  pokemonSearch: ['loading', 'search'],
  pokemonLoading: ['loading'],
});

const initialState = { loading: false, data: [], search: [] };

const pokemonSuccess = (state = initialState, action) => {
  return { ...state, loading: action.loading, data: action.data };
};
const pokemonLoading = (state = initialState, action) => {
  return { ...state, loading: action.loading };
};

const pokemonSearch = (state = initialState, action) => {
  return { ...state, loading: action.loading, search: action.search };
};

export default createReducer(initialState, {
  [Types.POKEMON_SUCCESS]: pokemonSuccess,
  [Types.POKEMON_LOADING]: pokemonLoading,
  [Types.POKEMON_SEARCH]: pokemonSearch,
});

export const fetchAllPokemon = (type) => async (dispatch) => {
  try {
    dispatch(Creators.pokemonLoading(true));
    const response = await findAll(type);
    dispatch(Creators.pokemonSuccess(false, response));
  } catch (error) {
    console.error(error.message);
    dispatch(Creators.pokemonLoading(false));
  }
};
