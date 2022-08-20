import React from 'react';
import { PropTypes } from 'prop-types';

function InputPassword(props) {
  return (
    <input type="password" { ...props } />
  );
}

InputPassword.propTypes = {
  placeholder: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default InputPassword;
