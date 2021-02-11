import React from 'react';
import { Container, Header, Footer, Content } from './styles';
import Button from '../Button';

const Cart = () => {
  return (
    <Container>
      <Header>Carrinho de Compras</Header>
      <Content>Conteúdo</Content>
      <Footer>
        <Button color="primary" type="button" title="Finalizar Compras" />
      </Footer>
    </Container>
  );
};

export default Cart;
