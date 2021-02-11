import React, { useEffect, useState } from 'react';

import { findAll } from '../../services/pokemon';
import { Container, Item } from './styles';
import Card from '../Card';

const CardList = () => {
  const [data, setData] = useState([]);

  const getPokemon = async () => {
    const response = await findAll();
    setTimeout(() => {
      setData(response);
    }, 5000);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <Container>
      {data.length > 0 ? (
        data.map((itemCard) => {
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
