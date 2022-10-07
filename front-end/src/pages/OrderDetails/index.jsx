import React from 'react';
import CustomerOrderDetails from '../../components/CustomerOrderDetails';
import Navbar from '../../components/Navbar';
import SellerOrderDetails from '../../components/SellerOrderDetails';

function OrderDetails() {
  const { role } = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
      <Navbar />
      {role === 'customer'
        ? <CustomerOrderDetails />
        : <SellerOrderDetails /> }
    </div>
  );
}

export default OrderDetails;
