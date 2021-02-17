import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';

import Routes from './routes';
import GlobalStyle from './styles/global';
import Main from './layout/Main';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { storeTheme } from './styles/theme';
import Modal from './components/Modal';

const App = () => {
  const themeSelected = useSelector((state) => state.theme.store);
  return (
    <ThemeProvider theme={() => storeTheme(themeSelected)}>
      <GlobalStyle />
      <Modal />
      <Main>
        <Header />
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

        <Routes />
        <Footer text="&copy; Poké Store by Christian Possidonio" />
      </Main>
    </ThemeProvider>
  );
};

export default App;
