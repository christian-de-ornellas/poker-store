import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardList from '../../components/CardList';
import Cart from '../../components/Cart';
import { Container, Aside, Main } from './styles';
import { fetchAllPokemon } from '../../store/ducks/pokemon';

const Home = () => {
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    dispatch(fetchAllPokemon(type));
  }, [dispatch, type]);

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
