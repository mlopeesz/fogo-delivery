import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { formatToBRL } from '../../constants';

function ProductCard({ id, name, price, image }) {
  const [counter, setCounter] = useState(0);

  const handleSubButton = () => {
    setCounter(counter - 1);
  };

  const handleAddButton = () => {
    setCounter(counter + 1);
  };

  const handleChangeInput = ({ target }) => {
    setCounter(Number(target.value));
  };

  return (
    <div>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {formatToBRL.format(price)}

      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <div>
        <button
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ handleSubButton }
          disabled={ counter === 0 }
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          value={ counter }
          onChange={ handleChangeInput }
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ handleAddButton }
        >
          +
        </button>
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;
