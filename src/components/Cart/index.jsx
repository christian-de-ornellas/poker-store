import React from 'react';
import {
  Container,
  Header,
  Footer,
  Content,
  Item,
  Title,
  Price,
} from './styles';
import Button from '../Button';

const Cart = () => {
  return (
    <Container>
      <Header>Carrinho de Compras</Header>
      <Content>
        {[
          { title: 'Tomate', price: 10.5 },
          { title: 'Cebola', price: 150.0 },
        ].map((itemCart) => {
          return (
            <Item key={itemCart.title}>
              <Title>{itemCart.title}</Title>
              <Price>{itemCart.price}</Price>
            </Item>
          );
        })}
      </Content>

      <Item>
        <Title>Total</Title>
        <Price>R$ 160,50</Price>
      </Item>

      <Footer>
        <Button color="primary" type="button" title="Finalizar Compras" />
      </Footer>
    </Container>
  );
};

export default Cart;
