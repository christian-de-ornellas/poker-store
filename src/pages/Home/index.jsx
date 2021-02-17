import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardList from '../../components/CardList';
import Cart from '../../components/Cart';
import { Container, Aside, Main } from './styles';
import { fetchAllPokemon } from '../../store/ducks/pokemon';
import { Creators as ThemeActions } from '../../store/ducks/theme';

const Home = () => {
  const dispatch = useDispatch();
  const { type } = useParams();

  useEffect(() => {
    dispatch(ThemeActions.storeTheme(type));
  }, [dispatch, type]);

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
