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

const App = () => {
  const themeSelected = useSelector((state) => state.theme.store);
  return (
    <ThemeProvider theme={() => storeTheme(themeSelected)}>
      <GlobalStyle />
      <Main>
        <Header />
        <Navbar />
        <Routes />
        <Footer text="&copy; Poké Store by Christian Possidonio" />
      </Main>
    </ThemeProvider>
  );
};

export default App;
