import React from 'react';
import propTypes from 'prop-types';
import { Container, Title } from './styles';

const Button = ({ title, type, color, onClick }) => {
  return (
    <Container type={type} color={color} onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;

Button.defaultProps = {
  type: 'button',
  color: 'primary',
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string,
  color: propTypes.string,
};
