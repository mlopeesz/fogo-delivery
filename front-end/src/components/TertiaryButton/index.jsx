import React from 'react';
import { PropTypes } from 'prop-types';

function TertiaryButton(props) {
  const { text, test } = props;
  return (
    <button data-testid={ test } type="button">
      {text}
    </button>
  );
}

TertiaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  test: PropTypes.string.isRequired,
};

export default TertiaryButton;
