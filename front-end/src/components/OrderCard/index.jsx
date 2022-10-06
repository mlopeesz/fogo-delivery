import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utils';
import { formatToBRL } from '../../constants';

function OrderCard({ orderId, orderStatus, orderDate, orderPrice }) {
  return (
    <div>
      <p data-testid={ `customer_orders__element-order-id-${orderId}` }>{orderId}</p>
      <p
        data-testid={ `customer_orders__element-delivery-status-${orderId}` }
      >
        {orderStatus}

      </p>
      <p
        data-testid={ `customer_orders__element-order-date-${orderId}` }
      >
        {formatDate(orderDate)}

      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${orderId}` }
      >
        {formatToBRL.format(orderPrice)}

      </p>
    </div>
  );
}

OrderCard.propTypes = {
  orderId: PropTypes.number.isRequired,
  orderStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  orderPrice: PropTypes.string.isRequired,
};

export default OrderCard;
