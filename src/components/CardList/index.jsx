import React from 'react';
import { useSelector } from 'react-redux';

import { Container, Item } from './styles';
import Card from '../Card';

const CardList = () => {
  const pokemonData = useSelector((state) => state.pokemon);

  return (
    <Container>
      {pokemonData.length > 0 ? (
        pokemonData.map((itemCard) => {
          return (
            <Item key={itemCard.pokemon.name}>
              <Card title={itemCard.pokemon.name} price="10" />
            </Item>
          );
        })
      ) : (
        <>Loading ...</>
      )}
    </Container>
  );
};

export default CardList;
