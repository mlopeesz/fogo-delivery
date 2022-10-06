import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import OrderCard from '../../components/OrderCard';
import { getOrdersByUserId } from '../../services/api';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const getOrders = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const response = await getOrdersByUserId(id);
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      {orders.map((order, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => navigate(`${order.id}`) }
        >
          <OrderCard
            key={ index }
            orderId={ order.id }
            orderStatus={ order.status }
            orderDate={ order.saleDate }
            orderPrice={ order.totalPrice }
          />
        </button>
      ))}
    </div>
  );
}

export default CustomerOrders;
