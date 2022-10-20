import React from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../utils/utils';
import { formatToBRL } from '../../constants';
import './index.scss';

function OrderCard({ orderId, orderStatus, orderDate, orderPrice }) {
  return (
    <div className="card-container">
      <p>{orderId}</p>
      <p className="order-status">
        {orderStatus}

      </p>
      <p className="order-date">
        {formatDate(orderDate)}

      </p>
      <p className="order-price">
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
