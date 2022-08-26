import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ id, name, price, image }) {
  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
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
        >
          -
        </button>
        <input
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
        />
        <button
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
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
