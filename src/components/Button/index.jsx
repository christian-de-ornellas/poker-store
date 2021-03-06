import React from 'react';
import propTypes from 'prop-types';
import { Container, Title } from './styles';

const Button = ({ title, type, color, onClick, disabled }) => {
  return (
    <Container disabled={disabled} type={type} color={color} onClick={onClick}>
      <Title>{title}</Title>
    </Container>
  );
};

export default React.memo(Button);

Button.defaultProps = {
  type: 'button',
  color: 'primary',
  disabled: false,
};

Button.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string,
  color: propTypes.string,
  disabled: propTypes.bool,
};
