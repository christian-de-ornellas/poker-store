import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';
import Loading from '../Loading';
import { Container, Item } from './styles';

const CardList = () => {
  const pokemonData = useSelector((state) => state.pokemon);
  const { data, search, loading } = pokemonData;

  return (
    <Container>
      {loading === false ? (
        <>
          {search.length === 1 ? (
            <>
              {search.map((itemSearch, index) => {
                return (
                  <Item key={index}>
                    <Card data={itemSearch} />
                  </Item>
                );
              })}
            </>
          ) : (
            <>
              {data.map((itemPokemon, index) => {
                return (
                  <Item key={index}>
                    <Card data={itemPokemon} />
                  </Item>
                );
              })}
            </>
          )}
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default CardList;
