import React from 'react';
import CardList from '../../components/CardList';
import Cart from '../../components/Cart';
import { Container, Aside, Main } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Main>
        <CardList />
      </Main>
      <Aside>
        <Cart />
      </Aside>
    </Container>
  );
};
export default Home;
