import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import Routes from './routes';
import GlobalStyle from './styles/global';
import Main from './layout/Main';
import Header from './layout/Header';
import Footer from './layout/Footer';

import light from './styles/theme/light';
import normal from './styles/theme/normal';
import fighting from './styles/theme/fighting';
import psychic from './styles/theme/psychic';
import ground from './styles/theme/ground';
import poison from './styles/theme/poison';
import rock from './styles/theme/rock';
import ghost from './styles/theme/ghost';
import bug from './styles/theme/bug';
import water from './styles/theme/water';
import grass from './styles/theme/grass';
import steel from './styles/theme/steel';
import flying from './styles/theme/flying';
import fire from './styles/theme/fire';
import electric from './styles/theme/electric';
import ice from './styles/theme/ice';
import dragon from './styles/theme/dragon';
import dark from './styles/theme/dark';
import fairy from './styles/theme/fairy';

const App = () => {
  const themeSelected = useSelector((state) => state.theme.store);

  const storeTheme = (theme) => {
    switch (theme) {
      case '1':
        return normal;
      case '2':
        return fighting;
      case '3':
        return flying;
      case '4':
        return poison;
      case '5':
        return ground;
      case '6':
        return rock;
      case '7':
        return bug;
      case '8':
        return ghost;
      case '9':
        return steel;
      case '10':
        return fire;
      case '11':
        return water;
      case '12':
        return grass;
      case '13':
        return electric;
      case '14':
        return psychic;
      case '15':
        return ice;
      case '16':
        return dragon;
      case '17':
        return dark;
      case '18':
        return fairy;
      default:
        return light;
    }
  };

  return (
    <ThemeProvider theme={() => storeTheme(themeSelected)}>
      <GlobalStyle />
      <Main>
        <Header />
        <Routes />
        <Footer text="&copy; Poké Store by Christian Possidonio" />
      </Main>
    </ThemeProvider>
  );
};

export default App;
