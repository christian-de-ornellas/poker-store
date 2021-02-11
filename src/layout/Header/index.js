import React from 'react';
import { Container } from './styles';
import TextField from '../../components/TextField';

const Header = () => {
  return (
    <Container>
      <TextField type="search" placeholder="Pesquisar" />
    </Container>
  );
};
export default Header;
