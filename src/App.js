import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

import light from './styles/theme/light';

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Main>
        <Header />
        <Home />
        <Footer text="&copy; Poké Store by Christian Possidonio" />
      </Main>
    </ThemeProvider>
  );
};

export default App;
