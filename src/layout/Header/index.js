import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import TextField from '../../components/TextField';
import Button from '../../components/Button';
import { Creators as PokemonActions } from '../../store/ducks/pokemon';

const Header = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const { data } = pokemon;
  const [search, setSearch] = useState('');

  const dispatch = useDispatch();

  const handleFilter = (arg) => {
    if (arg !== '') {
      const filtered = data.filter(
        (item) => item.pokemon.name === arg.toLowerCase(),
      );
      dispatch(PokemonActions.pokemonSearch(false, [...filtered]));
    }
  };

  return (
    <Container>
      <Content>
        <TextField
          type="search"
          placeholder="Qual o seu Pokémon favorito?"
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button title="BUSCAR" onClick={() => handleFilter(search)} />
      </Content>
    </Container>
  );
};
export default Header;
