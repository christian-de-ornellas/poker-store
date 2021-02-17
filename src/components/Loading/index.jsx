import React from 'react';
import { Container } from './styles';
import LoadGif from '../../assets/loading.gif';

const Loading = () => {
  return (
    <Container>
      <img width="80" src={LoadGif} alt="loading..." />:
    </Container>
  );
};

export default Loading;
