import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { Container, Item } from './styles';
import Card from '../Card';

const CardList = () => {
  const pokemonData = useSelector((state) => state.pokemon);

  return (
    <Container>
      {pokemonData.data.length > 0 ? (
        <>
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
        </>
      ) : (
        <>
          <h1>Nenhum pokémon foi encontrado!</h1>
        </>
      )}
    </Container>
  );
};

export default CardList;
