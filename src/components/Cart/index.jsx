import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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
import { Creators as ModalActions } from '../../store/ducks/modal';

const Cart = () => {
  const pokemonCart = useSelector((state) => state.cart);
  const modalGlobal = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleFinish = () => {
    dispatch(
      ModalActions.showModal({
        show: true,
        message: 'Parabéns por comprar estes pokémon!',
      }),
    );
    localStorage.removeItem('persist:root');

    setTimeout(() => {
      window.location.href = '/store/1';
    }, 3000);
  };

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
        <Button
          disabled={modalGlobal.show === true}
          color="primary"
          type="button"
          title="Finalizar Compras"
          onClick={handleFinish}
        />
      </Footer>
    </Container>
  );
};

export default Cart;
