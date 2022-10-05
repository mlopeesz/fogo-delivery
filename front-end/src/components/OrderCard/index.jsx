import React from 'react';

function OrderCard() {
  return (
    <div>
      <p data-testid="customer_orders__element-order-id-<id>">ORDER XXXX</p>
      <p data-testid="customer_orders__element-delivery-status-<id>">STATUS</p>
      <p data-testid="customer_orders__element-order-date-<id>">DATA</p>
      <p data-testid="customer_orders__element-card-price-<id>">PRICE</p>
    </div>
  );
}

export default OrderCard;
