import React from 'react';
import { PropTypes } from 'prop-types';

function InputText(props) {
  return (
    <input type="text" { ...props } />
  );
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default InputText;
