import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardList from '../../components/CardList';
import Cart from '../../components/Cart';
import { Container, Aside, Main } from './styles';
import { fetchAllPokemon } from '../../store/ducks/pokemon';
import { Creators as ThemeActions } from '../../store/ducks/theme';
import Navbar from '../../layout/Navbar';

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
    <>
      <Navbar
        items={[
          { title: 'Normal', path: '/store/1' },
          { title: 'Fighting', path: '/store/2' },
          { title: 'Flying', path: '/store/3' },
          { title: 'Poison', path: '/store/4' },
          { title: 'Ground', path: '/store/5' },
          { title: 'Rock', path: '/store/6' },
          { title: 'Bug', path: '/store/7' },
          { title: 'Ghost', path: '/store/8' },
          { title: 'Steel', path: '/store/9' },
          { title: 'Fire', path: '/store/10' },
          { title: 'Water', path: '/store/11' },
          { title: 'Grass', path: '/store/12' },
          { title: 'Electric', path: '/store/13' },
          { title: 'Psychic', path: '/store/14' },
          { title: 'Ice', path: '/store/15' },
          { title: 'Dragon', path: '/store/16' },
          { title: 'Dark', path: '/store/17' },
          { title: 'Fairy', path: '/store/18' },
        ]}
      />
      <Container>
        <Main>
          <CardList />
        </Main>
        <Aside>
          <Cart />
        </Aside>
      </Container>
    </>
  );
};
export default Home;
