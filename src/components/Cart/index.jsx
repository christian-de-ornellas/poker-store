import React from 'react';
import { useSelector } from 'react-redux';
import {
  Container,
  Header,
  Footer,
  Content,
  Item,
  Title,
  Price,
  Badge,
  SubTotal,
} from './styles';
import Button from '../Button';

const Cart = () => {
  const pokemonCart = useSelector((state) => state.cart);

  return (
    <Container>
      <Header>
        Carrinho de Compras <Badge>{pokemonCart.length}</Badge>
      </Header>
      <Content>
        {pokemonCart.map((itemCart, index) => {
          return (
            <Item key={index}>
              <Title>{itemCart.title}</Title>
              <Price>{itemCart.price}</Price>
            </Item>
          );
        })}
      </Content>

      <Item>
        {pokemonCart.length > 0 ? (
          <>
            <SubTotal>
              {pokemonCart
                .map((item) => item.price)
                .reduce((pushed, total) => pushed + total, 0)}
            </SubTotal>
          </>
        ) : (
          <>
            <Title>O seu carrinho está vazio!</Title>
          </>
        )}
      </Item>

      <Footer>
        <Button color="primary" type="button" title="Finalizar Compras" />
      </Footer>
    </Container>
  );
};

export default Cart;
