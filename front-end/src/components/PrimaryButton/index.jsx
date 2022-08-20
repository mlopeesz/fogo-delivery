import React from 'react';
import { PropTypes } from 'prop-types';

function PrimaryButton(props) {
  const { text, test } = props;
  return (
    <button type="button" data-testid={ test }>
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default PrimaryButton;
