import React from 'react';
import propTypes from 'prop-types';

import { Input } from './styles';

const TextField = ({ type, placeholder, onChange, onBlur, value }) => (
  <Input
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
);

export default TextField;

TextField.defaultProps = {
  type: 'text',
  placeholder: '',
};

TextField.propTypes = {
  type: propTypes.string,
  placeholder: propTypes.string,
};
