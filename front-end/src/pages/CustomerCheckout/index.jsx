import React from 'react';
import CheckoutTable from '../../components/CheckoutTable';
import DeliveryDetails from '../../components/DeliveryDetails';
import Navbar from '../../components/Navbar';

function CustomerCheckout() {
  return (
    <div>
      <Navbar />
      <CheckoutTable />
      <DeliveryDetails />
    </div>
  );
}

export default CustomerCheckout;
