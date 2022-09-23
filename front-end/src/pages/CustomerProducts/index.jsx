import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { api } from '../../services/api';

function CustomerProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState();
  const [disableButton, setDisableButton] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const getAllProducts = async () => {
    const response = await api.get('/customer/products');
    setProducts(response.data);
  };

  const handleTotal = () => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    let total = 0;
    cart.forEach(({ quantity, price }) => {
      total += quantity * price;
    });
    setDisableButton(!total);
    setTotalPrice(total);
  };

  useEffect(() => {
    getAllProducts();
  });

  return (
    <div>
      <Navbar />
      {products?.map((product, index) => (
        <ProductCard
          key={ index }
          id={ product.id }
          name={ product.name }
          price={ product.price }
          image={ product.urlImage }
          handleTotal={ handleTotal }
        />
      ))}
      <button
        type="button"
        onClick={ () => navigate('/customer/checkout') }
        disabled={ disableButton }
        data-testid="customer_products__button-cart"
      >
        <p data-testid="customer_products__checkout-bottom-value">
          { `Ver Carrinho: ${totalPrice.toFixed(2).replace('.', ',')}` }
        </p>
      </button>
    </div>
  );
}

export default CustomerProducts;
