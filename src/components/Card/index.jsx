import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Creators as CartActions } from '../../store/ducks/cart';
import { Creators as ModalActions } from '../../store/ducks/modal';
import Loading from '../Loading';
import imageLess from '../../assets/miniatura.jpeg';

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
  const cartGlobal = useSelector((state) => state.cart);
  const modalGlobal = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const handleAddCart = (cart) => {
    const filtered = cartGlobal.filter((item) => item.title === cart.title);
    if (filtered.length > 0)
      return dispatch(
        ModalActions.showModal({
          show: true,
          message: 'Este pokémon já está na sua lista!',
        }),
      );
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
          {pokemon && pokemon.sprites.front_default ? (
            <>
              <Image
                image={`${pokemon.sprites && pokemon.sprites.front_default}`}
              />
            </>
          ) : (
            <>
              <Image image={`${imageLess}`} />
            </>
          )}
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
                disabled={modalGlobal.show === true}
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
