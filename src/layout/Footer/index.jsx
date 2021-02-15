import React from 'react';

import { Container, Copyright } from './styles';

const Footer = ({ text }) => {
  return (
    <Container>
      <Copyright>{text}</Copyright>
    </Container>
  );
};

export default Footer;
