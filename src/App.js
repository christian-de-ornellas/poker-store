import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

import { store, persistor } from './store';
import { fetchAllPokemon } from './store/ducks/pokemon';

import light from './styles/theme/light';

store.dispatch(fetchAllPokemon(13));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Main>
            <Header />
            <Home />
            <Footer text="&copy; Poké Store by Christian Possidonio" />
          </Main>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
