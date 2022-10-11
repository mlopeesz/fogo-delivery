import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { formatToBRL } from '../../constants';
import { setLocalStorage } from '../../utils/localStorage';
import './style.scss';

function ProductCard({ id, name, price, image, handleTotal }) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantity = (value) => {
    if (value >= 0) {
      setQuantity(value);
    } else {
      setQuantity(0);
    }
  };

  useEffect(() => {
    const handleCart = () => {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const itemExistsInCart = cart.some((item) => item.id === id);

      if (itemExistsInCart) {
        const updateProduct = cart.find((product) => product.id === id);
        updateProduct.quantity = quantity;
      }

      if (!itemExistsInCart) {
        cart.push({ id, name, price, quantity });
      }

      const filteredCart = cart.filter((prod) => prod.quantity > 0);
      setLocalStorage('cart', JSON.stringify(filteredCart));
      handleTotal();
    };
    handleCart();
  }, [handleTotal, id, name, price, quantity]);

  return (
    <div className="product-card">
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ image }
        alt={ name }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <p
        className="card-price"
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {formatToBRL.format(price)}

      </p>
      <div className="qty-input-button">
        <button
          id={ id }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          type="button"
          onClick={ () => handleQuantity(quantity - 1) }
          disabled={ quantity === 0 }
        >
          -
        </button>
        <input
          className="qty-input"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          type="text"
          value={ quantity }
          onChange={ ({ target }) => handleQuantity(target.value) }
        />
        <button
          id={ id }
          data-testid={ `customer_products__button-card-add-item-${id}` }
          type="button"
          onClick={ () => handleQuantity(quantity + 1) }
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
  handleTotal: PropTypes.func.isRequired,
};

export default ProductCard;
