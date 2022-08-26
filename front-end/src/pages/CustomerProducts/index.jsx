import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import ProductCard from '../../components/ProductCard';
import { api } from '../../services/api';

function CustomerProducts() {
  const [products, setProducts] = useState();

  const getAllProducts = async () => {
    const response = await api.get('/customer/products');
    setProducts(response.data);
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
        />
      ))}
    </div>
  );
}

export default CustomerProducts;
