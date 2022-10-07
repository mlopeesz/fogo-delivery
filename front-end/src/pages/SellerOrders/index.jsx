import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import SellerOrderCard from '../../components/SellerOrderCard';
import { getOrdersBySellerId } from '../../services/api';

function SellerOrders() {
  const [orders, setOrders] = useState();
  const navigate = useNavigate();

  const getOrders = async () => {
    const { id } = JSON.parse(localStorage.getItem('user'));
    const response = await getOrdersBySellerId(id);
    setOrders(response.data);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <Navbar />
      {orders?.map((order, index) => (
        <button
          key={ index }
          type="button"
          onClick={ () => navigate(`${order.id}`) }
        >
          <SellerOrderCard
            orderId={ order.id }
            orderStatus={ order.status }
            orderDate={ order.saleDate }
            orderPrice={ order.totalPrice }
            orderAddress={ order.deliveryAddress }
            orderAddressNumber={ order.deliveryNumber }
          />
        </button>
      ))}
    </div>
  );
}

export default SellerOrders;
