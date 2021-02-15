import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { Container, Item } from './styles';
import Card from '../Card';

const CardList = () => {
  const pokemonData = useSelector((state) => state.pokemon);

  return (
    <Container>
      {pokemonData.loading === false ? (
        pokemonData.data.map((itemCard, index) => {
          return (
            <Item key={index}>
              <Card data={itemCard} />
            </Item>
          );
        })
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default CardList;
