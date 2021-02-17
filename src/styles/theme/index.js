import normal from './normal';
import fighting from './fighting';
import psychic from './psychic';
import ground from './ground';
import poison from './poison';
import rock from './rock';
import ghost from './ghost';
import bug from './bug';
import water from './water';
import grass from './grass';
import steel from './steel';
import flying from './flying';
import fire from './fire';
import electric from './electric';
import ice from './ice';
import dragon from './dragon';
import dark from './dark';
import fairy from './fairy';

export const storeTheme = (theme) => {
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
      return normal;
  }
};
