import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Content } from './styles';
import TextField from '../../components/TextField';
import { Creators as PokemonActions } from '../../store/ducks/pokemon';
import Button from '../../components/Button';

const Header = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const store = useSelector((state) => state.theme.store);
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

  const handleClean = () => {
    window.location.href = `/store/${store}`;
  };

  return (
    <Container>
      <Content>
        <TextField
          type="search"
          placeholder="Digite o nome do pokémon..."
          onBlur={(event) => setSearch(event.target.value)}
        />
        <Button title="Buscar" onClick={() => handleFilter(search)} />
        <Button title="Limpar" onClick={() => handleClean()} />
      </Content>
    </Container>
  );
};
export default Header;
