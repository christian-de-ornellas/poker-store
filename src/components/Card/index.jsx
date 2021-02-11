import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Creators as CartActions } from '../../store/ducks/cart';
import {
  Container,
  Content,
  Body,
  Image,
  Title,
  Price,
  Footer,
} from './styles';
import Button from '../Button';

const Card = ({ title, price }) => {
  const dispatch = useDispatch();

  const handleAddCart = (cart) => {
    dispatch(CartActions.addCart([cart]));
  };

  return (
    <Container>
      <Image />
      <Body>
        <Content>
          <Title>{title}</Title>
          <Price>{price}</Price>
          <Footer>
            <Button
              color="secondary"
              type="button"
              title="Adicionar ao Carrinho"
              onClick={() => handleAddCart({ title, price })}
            />
          </Footer>
        </Content>
      </Body>
    </Container>
  );
};

export default Card;

Card.propTypes = {
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
};
