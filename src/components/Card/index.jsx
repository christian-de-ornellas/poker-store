import React from 'react';
import propTypes from 'prop-types';
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
  price: propTypes.string.isRequired,
};
