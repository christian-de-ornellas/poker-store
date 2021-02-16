import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';
import { Container, Content } from './styles';
import { Creators as PokemonActions } from '../../store/ducks/pokemon';
import Button from '../../components/Button';

const Header = () => {
  const pokemon = useSelector((state) => state.pokemon);
  const store = useSelector((state) => state.theme.store);
  const { data } = pokemon;

  const [search, setSearch] = useState('');
  const [select, setSelect] = useState([]);

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

  const selectedData = (items) => {
    const list = items.map((item) => {
      return { value: item.pokemon.name, label: item.pokemon.name };
    });

    setSelect(list);
  };

  useEffect(() => {
    selectedData(data);
  }, [data]);

  useEffect(() => {
    handleFilter(search);
  }, [search]);

  return (
    <Container>
      <Content>
        <div>
          <Select
            options={select}
            className="select-auto"
            onChange={(event) => setSearch(event.value)}
            placeholder="Pesquisar..."
          />
        </div>
        {search ? (
          <Button title="Limpar Filtro" onClick={() => handleClean()} />
        ) : (
          <></>
        )}
      </Content>
    </Container>
  );
};
export default Header;
