import { createActions, createReducer } from 'reduxsauce';
import { findAll } from '../../services/pokemon';

export const { Types, Creators } = createActions({
  pokemonSuccess: ['loading', 'data'],
  pokemonLoading: ['loading'],
});

const initialState = { loading: false, data: [] };

const pokemonSuccess = (state = initialState, action) => {
  return { ...state, loading: action.loading, data: action.data };
};
const pokemonLoading = (state = initialState, action) => {
  return { ...state, loading: action.loading };
};

export default createReducer(initialState, {
  [Types.POKEMON_SUCCESS]: pokemonSuccess,
  [Types.POKEMON_LOADING]: pokemonLoading,
});

export const fetchAllPokemon = async (dispatch) => {
  try {
    const response = await findAll(1);
    dispatch(Creators.pokemonLoading(true));
    dispatch(Creators.pokemonSuccess(true, response));
  } catch (error) {
    console.error(error.message);
    dispatch(Creators.pokemonLoading(false));
  }
};
