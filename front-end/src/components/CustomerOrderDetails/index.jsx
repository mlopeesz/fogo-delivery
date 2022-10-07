import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById } from '../../services/api';
import CustomerOrderInfo from '../CustomerOrderInfo';
import OrderDetailTable from '../OrderDetailTable';

function CustomerOrderDetails() {
  const { id } = useParams();
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);

  const getOrder = async () => {
    const response = await getOrderById(id);
    setOrder(response.data);
    setProducts(response.data.products);
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div>
      <CustomerOrderInfo
        orderDetails={ order }
      />
      <OrderDetailTable
        products={ products }
        totalPrice={ order.totalPrice }
      />
    </div>
  );
}

export default CustomerOrderDetails;
