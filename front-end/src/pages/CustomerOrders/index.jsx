import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import OrderCard from '../../components/OrderCard';
import { getOrdersByUserId } from '../../services/api';
import './index.scss';

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
      <h1 className="title">Meus Pedidos</h1>
      <div className="orders-container">
        {orders.map((order, index) => (
          <button
            key={ index }
            type="button"
            onClick={ () => navigate(`${order.id}`) }
            className="tertiary-button"
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
    </div>
  );
}

export default CustomerOrders;
