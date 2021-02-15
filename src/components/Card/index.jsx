import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Creators as CartActions } from '../../store/ducks/cart';
import Loading from '../Loading';

import {
  Container,
  Content,
  Body,
  Image,
  Title,
  Price,
  Footer,
  More,
} from './styles';
import Button from '../Button';
import { find } from '../../services/pokemon';

const Card = ({ data }) => {
  const [pokemon, setPokemon] = useState([]);

  const dispatch = useDispatch();

  const handleAddCart = (cart) => {
    dispatch(CartActions.addCart([cart]));
  };

  const getPokemon = async (url) => {
    const response = await find(url);
    setPokemon(response);
  };

  useEffect(() => {
    getPokemon(data.pokemon.url);
  }, [data]);

  return (
    <Container>
      {pokemon && pokemon.name ? (
        <>
          <Image image={`${pokemon.sprites && pokemon.sprites.back_default}`} />
          <Body>
            <Content>
              <Title>{pokemon.name}</Title>
              <Price>{pokemon.base_experience}</Price>
              <More>
                <Link to={`/pokemon/${pokemon.name}`}>Ver mais</Link>
              </More>
            </Content>
            <Footer>
              <Button
                color="secondary"
                type="button"
                title="Adicionar ao Carrinho"
                onClick={() =>
                  handleAddCart({
                    title: pokemon.name,
                    price: pokemon.base_experience,
                  })
                }
              />
            </Footer>
          </Body>
        </>
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Card;
